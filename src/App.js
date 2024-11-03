import React, { useState } from "react";
import axios from "axios";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/api/trends`, {
        params: { query, maxResults: 5 },
      });
      setResults(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch data");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Social Media Trend Analyst</h1>
      <input
        type="text"
        placeholder="Enter search query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", marginRight: "10px" }}
      />
      <button onClick={handleSearch} style={{ padding: "10px" }}>
        Search
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {results && (
        <div style={{ marginTop: "20px" }}>
          <h2>Results:</h2>
          <ul>
            {results.videos.map((video) => (
              <li key={video.videoId}>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <img src={video.thumbnail} alt={video.title} />
              </li>
            ))}
          </ul>
          <p>
            <strong>Insights:</strong> {results.insights}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
