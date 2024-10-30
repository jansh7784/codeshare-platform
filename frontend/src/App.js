import React, { useState } from 'react';

function App() {
  const [message, setMessage] = useState('');

  const fetchMessage = async () => {
    const response = await fetch('http://localhost:5000');
    const data = await response.text();
    setMessage(data);
  };

  return (
    <div className="App">
      <h1>Code Sharing Platform</h1>
      <button onClick={fetchMessage}>Get Backend Message</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
