import React from 'react';
import service from '../Appwrite/config';
import { Link } from 'react-router-dom';

function PostCard({ $id, title, Image, slug }) {
  return (
    <Link to={`/post/${$id}`} className="block transform transition duration-300 hover:scale-105">
      <div className="w-full bg-white shadow-md rounded-xl p-4 hover:shadow-lg">
        <div className="w-full justify-center mb-4">
          <img src={service.getFilePreview(Image)} alt="" className="rounded-xl" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-600 mt-2">{slug}</p>
      </div>
    </Link>
  );
}

export default PostCard;
