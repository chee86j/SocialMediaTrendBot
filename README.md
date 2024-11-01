# Social Media Trend Analyst Chatbot AI

## Overview

This application serves as a Social Media Trend Analyst chatbot AI, leveraging the OpenAI API to track, analyze, and report on trending video content across platforms. Initially, the app focuses on YouTube, with plans to expand to other social platforms like Instagram, Twitter, Reddit, Facebook, Pinterst, and TikTok. The AI chatbot provides insights on video trends based on niche topics, hashtags, and engagement metrics, acting as a virtual analyst.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Roadmap](#roadmap)

## Features

### MVP Features

1. **Platform Analysis (YouTube)**: Fetch and analyze trending videos based on user-defined keywords.
2. **Trend Insights**: Use OpenAI API to analyze content and generate trend insights.
3. **User-Defined Metrics**: Customize search based on specific keywords, comment count, likes, and engagement metrics.

### Future Features

1. **Multi-Platform Support**: Extend functionality to other platforms (Instagram, Twitter, TikTok, etc.).
2. **Competitor Analysis**: Track competitor channels and trends.
3. **Cross-Platform Strategy**: Suggest strategies for leveraging trends across platforms.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL (via Prisma ORM)
- **APIs**: YouTube Data API, OpenAI API
- **Frontend**: React, Tailwind CSS
- **Deployment**: Docker
- **Authentication**: JWT for secure API access
- **Tools**: Axios, dotenv

## Project Structure

```plaintext
youtube-trend-bot/
├── .env                    # Environment variables
├── server.js               # Main server file
├── package.json            # Node dependencies and scripts
├── services/               # External API services
│   ├── youtubeService.js   # YouTube Data API integration
│   └── openaiService.js    # OpenAI API integration
└── README.md               # Project documentation
```

## Setup and Installation

1. ** Clone the repository **
2. ** Install dependencies **: `npm install`

## Environment Variables

** Create an `.env` file in the root directory and add the following environment variables: **

```plaintext
YOUTUBE_API_KEY=your_youtube_api_key
OPENAI_API_KEY=your_openai_api_key
PORT=3000
```

## Usage

1. ** Start the server **: `npm start`
2. ** Access the API **: Open `http://localhost:3000` in your browser
