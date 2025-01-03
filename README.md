# Social Media Trend Analyst Chatbot AI

## Overview

Social Media Trend Analyst chatbot  leverages the Google Trends API (scraped using Selenium) and the OpenAI API to track, analyze, and report on trending content across multiple platforms. Currently focused on Google Trends data, the app will expand to analyze content across major social platforms, including YouTube, Instagram, Twitter, Reddit, Facebook, Pinterest, and TikTok. By providing insights on video and content trends based on niche topics, hashtags, and engagement metrics, this AI-powered chatbot helps social media creators strategize and engage audiences more effectively.

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

1. **Google Trends Analysis**: Scrape and analyze trending data on Google Trends based on user-defined keywords.
2. **Trend Insights**: Use OpenAI API to analyze content and generate trend insights.
3. **User-Defined Metrics**: Customize search based on specific keywords, comment count, likes, and engagement metrics.

### Future Features

1. **Multi-Platform Support**: Extend functionality to other platforms (Instagram, Twitter, TikTok, etc.).
2. **Competitor Analysis**: Track competitor channels and trends.
3. **Cross-Platform Strategy**: Suggest strategies for leveraging trends across platforms.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **APIs**: Google Trends (via Selenium scraping), OpenAI API
- **Frontend**: React, Tailwind CSS
- **Deployment**: Docker
- **Authentication**: JWT for secure API access
- **Tools**: Axios, dotenv, Selenium for web scraping

## Project Structure

```plaintext
SocialMediaTrendBot/
├── .env                        # Environment variables
├── Dockerfile                  # Docker configuration for each service
├── docker-compose.yml          # Docker Compose configuration for multi-service setup
├── README.md                   # Project documentation
├── server/                     # Backend folder
│   ├── server.js               # Main server file
│   ├── package.json            # Node dependencies and scripts for backend
│   ├── services/               # External API services
│   │   ├── googleTrendsScraper.js  # Selenium-based Google Trends scraping integration
│   │   └── openaiService.js    # OpenAI API integration
│   └── database/               # Database configuration and connection
└── src/                        # Client folder
    ├── index.html              # Entry HTML file for React app
    ├── App.js                  # Main App component
    ├── package.json            # Node dependencies and scripts for frontend
    └── components/             # React components

```
## Prerequisites
1. Docker: Ensure Docker is installed. Instructions for different operating systems:
    https://www.docker.com/get-started/
    Windows: Requires Windows 10 or later with WSL2 enabled.
    MacOS: Supports macOS Mojave or later.
    Linux: Available for most distributions.
2. Chrome and ChromeDriver: Required for Selenium scraping.
    https://developer.chrome.com/docs/chromedriver/downloads
    ChromeDriver Installation: Ensure ChromeDriver matches your Chrome version.
    Download: ChromeDriver
    Add ChromeDriver to your system path.

## Setup and Installation

1. ** Clone the repository **
2. ** cd SocialMediaTrendBot **
3. ** cd server then Install dependencies within **: `npm install` \*\*
4. ** cd ../src then Install dependencies within **: `npm install` \*\*
5. ** setup Docker by running `docker-compose up --build` **

## Environment Variables

** Create an `.env` file in the root directory and add the following environment variables: **

```plaintext
GOOGLE_TRENDS_API_KEY=your_google_trends_api_key
OPENAI_API_KEY=your_openai_api_key
REACT_APP_API_URL=http://localhost:5000/api
DATABASE_URL=postgres://postgres:password@db:5432/socialmedia
PORT=5000
SCRAPER_MODE=headless  # Options: headless or visible (for Selenium browser mode)


```

## Usage

1. ** Start the Docker containers **: Run `docker-compose up --build` in the root directory \*\*
2. ** API: Backend API is accessible at `http://localhost:5000/api` **

## Notes

1. ** Google Trends Scraping: Uses Selenium for scraping Google Trends in either headless or visible mode. Ensure Chrome and chromedriver are installed if running locally. **
2. ** Environment Variables: All required keys and URLs should be stored in the .env file in the root directory. **
3. \*\* Docker Troubleshooting: If you encounter issues with Docker, try the following commands to rebuild and restart the containers:

`docker-compose down --volumes --remove-orphans
docker-compose build --no-cache
docker-compose up
`
\*\*
/