import React, { useEffect, useState } from 'react';
import { Container, PostCard } from './index';
import service from '../Appwrite/config';
import { useLocation, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Home() {
  
  const [posts, setPosts] = useState([]);
  const { slug } = useParams();
  const userData = useSelector((state) => state.auth.data);
  const Location=useLocation()
  const stat=useSelector((state)=>state.auth.status)
  // As soon as page loads we will check in our database for posts
  console.log(userData);

  useEffect(() => {
    if(!userData && stat)window.location.reload()
    if(stat){
    service.getPosts().then((posts) => {

      if (posts){
       setPosts(posts.documents);
        console.log(posts);
      }
    });
  }
  }, []);

  // Conditional Rendering based on whether we have a post or not
  if (stat == false) {
    return (
      
      <section className="flex pt-32 justify-center bg-gradient-to-r from-teal-100 to-blue-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to Blogerrr
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover the best content and connect with others. Join us today and start your journey!
        </p>
        <Link
          to="/Signup"
          className="inline-block px-8 py-3 text-lg font-semibold text-white bg-teal-600 hover:bg-teal-500 rounded-full transition duration-200"
        >
          Get Started
        </Link>
        <img className="w-96 ml-12 mt-24 " src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
        <div className=" block"></div>

        <div className='p-52 ml-72'>
        <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
        </div>
      </div>
    </section>
    );
  }
  console.log(userData);
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 to-blue-100">
      <Container>
        <h1 className="text-3xl text-center font-bold text-gray-500  p-3">YOUR POSTS</h1>
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
