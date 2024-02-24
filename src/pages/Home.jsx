// pages/index.js
import { useEffect, useState } from 'react';

export default function Home() {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    fetch('/api/codes') // Change the API endpoint as per your setup
      .then(response => response.json())
      .then(data => setCodes(data.codes))
      .catch(error => console.error('Error fetching codes:', error));
  }, []);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert('Code copied!');
  };

  return (
    <div>
      <h1>Code Display</h1>
      {codes.map((code, index) => (
        <div key={index}>
          <pre>{code}</pre>
          <button onClick={() => handleCopy(code)}>Copy Code</button>
        </div>
      ))}
    </div>
  );
}
