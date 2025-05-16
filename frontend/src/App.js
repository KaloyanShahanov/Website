import './App.css';

import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('http://localhost:5000/api/hello')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div style={{ padding: '2rem', textAlign: 'center' }}>
            <h1>{message || 'Loading...'}</h1>
        </div>
    );
}

export default App;

