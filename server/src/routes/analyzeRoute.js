import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/predict",
      {
        cv_text: req.body.cv_text,
      }
    );

    res.json(response.data);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "AI Service Error",
    });
  }
});

export default router;