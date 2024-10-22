import React from 'react';
import Clubcard from '../../components/ClubCard/Clubcard';
import { Carousel } from "@/components/ui/carousel.jsx";

function Club() {
  const clubs = [
    {
      name: "Spark Web Development",
      img: "https://wayspire.in/wp-content/uploads/2022/11/web-development.jpg",
      join: "https://chat.whatsapp.com/FcBhWOqmyV48eYP8uGpQBn",
    },
    {
      name: "Spark Ai & ML",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvkUFmp5jSF-DhrD5102bzHU7RbidetfqYfA&s", // replace with actual image URL
      join: "https://chat.whatsapp.com/EUptvl5swRKK5bSoxlL9UD",
    },
    {
      name: "Spark DSA",
      img: "https://30dayscoding.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2F3pv3o0yr6pgj%2F5KSVf7vuNxFjxcHfm9idjM%2F4e5563dfa5f1ca9cc169a7274a7dbcac%2F64f93394e4b0e75ce98af312_scaled_cover.jpg&w=3840&q=75", // replace with actual image URL
      join: "https://chat.whatsapp.com/Lcwy9tZ10nULV1YylqgnnV",
    },
    {
      name: "APP Development",
      img: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg", // replace with actual image URL
      join: "https://chat.whatsapp.com/Gad5E6lX1pY5Xctqg0M0qz",
    },
  ];

  return (
    <>
      <h1 className={`text-4xl gradient-shade text-center pb-4 font-semibold relative`}>
        Our Clubs
      </h1>
      <div className="flex flex-wrap justify-center mx-4 my-4"> {/* Adjusted margins here */}
        {clubs.map((club, index) => (
          <div key={index} className="m-4"> {/* Add margin to each card */}
            <Clubcard
              name={club.name} 
              img={club.img} 
              join={club.join} 
            />
          </div>
        ))}
      </div>
      <Carousel />
    </>
  );
}

export default Club;
