import './App.css';
import Nav from './Nav';
import axios from 'axios'
import Create from './Create';
import { useEffect, useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get('http://127.0.0.1:8000/api/post').then(res => {
      console.log(res.data.posts);
      setPosts(res.data.posts)
    });
  }

  useEffect(() => { fetchPosts(); }, [])

  return (
    <div className="App">
      <Nav />
      {posts.map((post) => (
        <div>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
