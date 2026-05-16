import { analyzeCVService } from "../services/aiService.js";

export const analyzeCV = async (req, res) => {
  try {
    const result = await analyzeCVService(
      req.body.cv_text
    );

    res.json(result);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};