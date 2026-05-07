const analyzeService = require('../services/analyzeService');

exports.analyzeCV = async (req, res) => {
  try {
    const { cv_text } = req.body;

    if (!cv_text) {
      return res.status(400).json({ error: 'CV text is required' });
    }

    const result = await analyzeService.processCV(cv_text);

    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};