import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://backend-service:80/",{
        mode : 'no-cors'
  }).then(res => res.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Data from Backend</h1>
        {reviews && reviews.map(blog => (
          <div key={blog.id}>{blog.title}</div>
        ))}
      </header>
    </div>
  );
}

export default App;

