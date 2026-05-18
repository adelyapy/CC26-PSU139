from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from inference import load_assets, predict_top_jobs

app = FastAPI(title="CareerPath AI - Matching Engine", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

print("Loading model...")
model, vec_cv, vec_job, df_jobs, job_vectors = load_assets()
print(f"Model loaded. Total jobs: {len(df_jobs)}")


class CVInput(BaseModel):
    cv_text: str

class JobRecommendation(BaseModel):
    job_id           : str
    title            : str
    location         : str
    experience_level : str
    work_type        : str
    job_posting_url  : str
    application_url  : str
    similarity_score : float

class PredictResponse(BaseModel):
    status                : str
    total_recommendations : int
    recommendations       : List[JobRecommendation]


@app.post("/predict", response_model=PredictResponse)
async def predict(input: CVInput):
    if len(input.cv_text.strip()) < 50:
        raise HTTPException(status_code=400, detail="CV terlalu pendek.")
    try:
        results = predict_top_jobs(input.cv_text, model, vec_cv, job_vectors, df_jobs)
        return {"status": "success", "total_recommendations": len(results), "recommendations": results}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health():
    return {"status": "ok", "total_jobs": len(df_jobs)}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=7860, reload=True)