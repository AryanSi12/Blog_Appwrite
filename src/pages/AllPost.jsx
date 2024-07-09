import React from 'react';
import service from '../Appwrite/config';
import { Container, PostCard } from '../components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function AllPost() {
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, [slug]);

  return (
    <div className='min-h-screen w-full p-3 bg-gradient-to-b from-blue-200 to-blue-300'>
        <h1 className="text-3xl text-center font-bold text-gray-900 mb-3  p-3">ALL POSTS</h1>
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {posts.map((post) => (
            <div key={post.$id} className='w-full'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPost;
