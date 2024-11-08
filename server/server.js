require("dotenv").config();
const express = require("express");
const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/trends", async (req, res) => {
  let driver;
  try {
    // Initialize Selenium WebDriver in headless mode
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(/* Add ChromeOptions here */)
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
