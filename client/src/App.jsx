import { useState } from "react";
import axios from "axios";

function App() {
  const [cv, setCv] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/analyze",
        {
          cv_text: cv,
        }
      );

      setResult(res.data);
    } catch (err) {
      console.error(err);
      alert("Error connecting to backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center mb-2">
          CareerPath AI
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Intelligent Labor Market & Skill-Gap Analysis
        </p>

        <textarea
          rows="8"
          placeholder="Masukkan isi CV kamu di sini..."
          value={cv}
          onChange={(e) => setCv(e.target.value)}
          className="w-full border rounded-xl p-4 outline-none focus:ring-2 focus:ring-black mb-4"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition"
        >
          {loading ? "Analyzing..." : "Analyze CV"}
        </button>

        {result && (
          <div className="mt-10">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                Detected Skills
              </h2>

              <div className="flex flex-wrap gap-3">
                {result.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 px-4 py-2 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Job Recommendations
              </h2>

              <div className="space-y-4">
                {result.jobs.map((job, i) => (
                  <div
                    key={i}
                    className="border rounded-xl p-5"
                  >
                    <h3 className="text-xl font-bold">
                      {job.title}
                    </h3>

                    <p className="text-gray-600 mt-1">
                      Match Score: {job.score}%
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;