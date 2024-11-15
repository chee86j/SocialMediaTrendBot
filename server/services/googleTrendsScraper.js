const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");

const scrapeGoogleTrends = async () => {
  let driver;
  const trends = [];

  try {
    // Set up the Chrome WebDriver in headless mode for scraping
    const chromeOptions = new (require("selenium-webdriver/chrome").Options)();
    chromeOptions.headless(); // Run Chrome in headless mode

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(chromeOptions)
      .build();

    // Navigate to Google Trends
    await driver.get("https://trends.google.com/trends/trendingsearches/daily");

    // Wait for the trending searches elements to load
    await driver.wait(
      until.elementLocated(By.css(".trending-searches-title")),
      10000
    );

    // Extract each trending search title
    const trendsElements = await driver.findElements(
      By.css(".trending-searches-title")
    );

    for (let element of trendsElements) {
      const title = await element.getText();
      trends.push({ title });
    }
  } catch (error) {
    console.error("Error scraping Google Trends:", error);
  } finally {
    if (driver) await driver.quit();
  }

  return trends;
};

module.exports = { scrapeGoogleTrends };
