import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

function App() {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/trends`
        );
        setTrends(response.data.trends);
      } catch (err) {
        setError(
          "Oops! Couldn't fetch the latest trends. Please try again later."
        );
        console.error(err);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>SMT (Social Media Trend Analyst)</h1>
        <p>
          Your AI-powered assistant for staying ahead in the world of trending
          content. Harness data to strategize and engage capitalize on the
          latest trends.
        </p>
      </header>

      <section className="subheader">
        <p>
          <strong>How It Works:</strong>
          Powered by Google Trends and the latest in AI technology, this
          powerful app identifies the most viral topics on social media. By
          tracking real-time trends, it helps content creators tap into what’s
          hot, adapt their strategy, and engage audiences.
        </p>
        <p>
          <em>
            Built with a powerful tech stack: Node.js, Express, React,
            PostgreSQL, and OpenAI, SMT is your gateway to social media success.
          </em>
        </p>
      </section>

      {error && <p className="error">{error}</p>}

      <ul className="trends-list">
        {trends.length > 0
          ? trends.map((trend, index) => (
              <li key={index} className="trend-item">
                <h2>{trend.title}</h2>
                <p>
                  Capture the attention of your audience with the latest
                  trending topic.
                </p>
              </li>
            ))
          : !error && (
              <p className="loading">Loading the latest trends for you...</p>
            )}
      </ul>

      <footer className="footer">
        <p>
          &copy; 2024 Social Media Trend Analyst - Powered by Google Trends &
          OpenAI
        </p>
      </footer>
    </div>
  );
}

export default App;
