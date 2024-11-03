const axios = require("axios");

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const youtubeService = {
  async searchVideos(query, maxResults = 5) {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: YOUTUBE_API_KEY,
            q: query,
            part: "snippet",
            type: "video",
            maxResults,
          },
        }
      );

      return response.data.items.map((video) => ({
        title: video.snippet.title,
        description: video.snippet.description,
        videoId: video.id.videoId,
        thumbnail: video.snippet.thumbnails.default.url,
      }));
    } catch (error) {
      console.error("Error fetching videos:", error);
      throw error;
    }
  },
};

module.exports = youtubeService;
