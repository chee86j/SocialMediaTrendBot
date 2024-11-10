require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require("chromedriver");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// Parse JSON bodies
app.use(express.json());

// /api/trends route
app.get("/api/trends", async (req, res) => {
  let driver;
  try {
    // Set ChromeOptions for headless mode in order to run on the server
    const options = new chrome.Options();
    options.addArguments("--headless"); // Run in headless mode
    options.addArguments("--no-sandbox"); // For Docker compatibility
    options.addArguments("--disable-dev-shm-usage"); // For resource optimization

    // Initialize Selenium WebDriver
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();

    // Navigate to Google Trends
    await driver.get("https://trends.google.com/trends/trendingsearches/daily");

    // Wait for trending items to load
    await driver.wait(
      until.elementLocated(By.css(".trending-searches-title")),
      10000
    );

    // Extract trending search titles
    const trendsElements = await driver.findElements(
      By.css(".trending-searches-title")
    );
    const trends = [];

    for (let trend of trendsElements) {
      const title = await trend.getText();
      trends.push({ title });
    }

    // Respond with JSON
    res.json({ trends });
  } catch (error) {
    console.error("Error scraping Google Trends:", error);
    res.status(500).json({ error: "Failed to fetch trends" });
  } finally {
    if (driver) await driver.quit();
  }
});

// Start the server
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
