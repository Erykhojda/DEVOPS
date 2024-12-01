import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DevOps Dashboard</h1>
        <p>
          Witaj w naszym Dashboardzie DevOps! Tutaj znajdziesz najnowsze informacje
          oraz narzędzia używane w procesie DevOps.
        </p>
        <h2>Narzędzia DevOps</h2>
        <ul>
          <li>🔧 Docker</li>
          <li>🌐 Kubernetes</li>
          <li>☁️ AWS</li>
          <li>🛠️ Jenkins</li>
          <li>📦 Git</li>
        </ul>
        <h2>Co to jest DevOps?</h2>
        <p>
          DevOps to zbiór praktyk, które łączą rozwój oprogramowania (Dev) i operacje IT (Ops),
          aby poprawić współpracę i wydajność.
        </p>
        <a
          className="App-link"
          href="https://www.atlassian.com/devops"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dowiedz się więcej o DevOps
        </a>
      </header>
    </div>
  );
}

export default App;
