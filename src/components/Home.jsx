import React, { useEffect, useState } from 'react';
import { Container, PostCard } from './index';
import service from '../Appwrite/config';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Home() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  const userData = useSelector((state) => state.auth.data);
  const Location=useLocation()
  const stat=useSelector((state)=>state.auth.status)
  // As soon as page loads we will check in our database for posts
  console.log(userData);
  useEffect(() => {
    if(stat){
    service.getPosts().then((posts) => {
      console.log(posts);
      if (posts) setPosts(posts.documents);
    });
  }
  }, [Location,userData,slug]);

  // Conditional Rendering based on whether we have a post or not
  if (stat == false) {
    return (
      <div className="min-h-screen bg-blue-100">
        <Container>
          <div className="py-8">
            <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">Login to read and add posts</h1>
            {/* Add login button or link here */}
          </div>
        </Container>
      </div>
    );
  }
  console.log(userData);
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-300">
      <Container>
        <h1 className="text-3xl text-center font-bold text-gray-900  p-3">YOUR POSTS(RELOAD THE PAGE IF NOT SHOWING)</h1>
        <div className="py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) =>
            userData && post && userData.$id === post.UserId ? (
    <div key={post.$id} className="w-full">
      <PostCard {...post} />
    </div>
  ) : null
)}

          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
