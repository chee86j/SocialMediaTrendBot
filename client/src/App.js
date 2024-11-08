import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [trends, setTrends] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrends = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/trends`
        );
        setTrends(response.data.trends);
      } catch (err) {
        setError("Failed to load trends");
        console.error(err);
      }
    };

    fetchTrends();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Google Trends</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {trends.map((trend, index) => (
          <li key={index}>{trend.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
