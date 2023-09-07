// utilities
import { useEffect, useState } from 'react';
import axios from 'axios'

// static
import './App.css';

// components
import Nav from './Nav';
import Footer from './Footer'
import Create from './Create';


const App = () => {
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    console.log("a");
    axios.get('http://127.0.0.1:8000/api/post')
      .then(res => {
        console.log(res.data.posts);
        setPosts(res.data.posts)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => { fetchPosts(); }, [])

  return (
    <div className="App" >
      <Nav />
      <div className='container p-xxl-5 p-sm-5'>
        {posts.map((post) => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
