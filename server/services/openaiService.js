const axios = require("axios");

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const openaiService = {
  async generateInsights(videos) {
    const videoSummaries = videos
      .map((video) => `${video.title}: ${video.description}`)
      .join("\n");

    const response = await axios.post(
      "https://api.openai.com/v1/completions",
      {
        model: "text-davinci-003",
        prompt: `Analyze these trending YouTube videos and provide a summary of common themes and potential success factors:\n\n${videoSummaries}`,
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  },
};

module.exports = openaiService;
