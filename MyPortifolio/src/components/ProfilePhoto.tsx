
// Profile Photo section - swap out the placeholder image for your own photo
import React from 'react';

/*
  To update your profile picture:
    - Replace the src attribute below with the path to your photo.
    - For best results, use a square headshot ~400x400px.
    - You can use a URL or a local file path ("public/yourphoto.jpg").
*/
const ProfilePhoto = () => (
  <div className="flex justify-center -mt-10 mb-6">
    {/* PROFILE PHOTO: update img src with your headshot */}
    <div className="w-40 h-40 rounded-full border-4 border-yellow-400 shadow-lg bg-gradient-to-br from-yellow-100/50 to-gray-900/10 flex items-center justify-center overflow-hidden group relative">
      <img
        src="/myphoto.jpeg"
        alt="Profile placeholder"
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
      />
      {/* Guidance overlay for swapping photo */}
      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs bg-yellow-400/80 text-black px-2 py-0.5 rounded-md opacity-0 group-hover:opacity-100 transition">
        Swap with your photo &rarr;
      </span>
    </div>
  </div>
);

export default ProfilePhoto;

