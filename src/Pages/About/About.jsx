import React, { useRef, useEffect } from 'react';
import './About.css';

function About() {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseMove = (e) => {
      const mouseX = e.pageX - card.offsetLeft;
      const mouseY = e.pageY - card.offsetTop;

      const centerX = card.offsetWidth / 2;
      const centerY = card.offsetHeight / 2;

      const deltaX = mouseX - centerX;
      const deltaY = mouseY - centerY;

      const tiltX = deltaY * 0.01; // Slight tilt effect on X axis
      const tiltY = deltaX * -0.01; // Slight tilt effect on Y axis

      card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

      card.style.setProperty('--x', `${mouseX}px`);
      card.style.setProperty('--y', `${mouseY}px`);
    };

    const handleMouseLeave = () => {
      card.style.transform = `perspective(1000px) rotateX(0) rotateY(0)`;
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="about" ref={cardRef}>
      <h1 style={{fontSize:"40px",fontFamily:"monospace"}}>About Tech Spark</h1>
      <h4>Tech Spark is a dynamic tech community founded at DSEU Okhla-II with the goal of fostering innovation, collaboration, and growth in the tech space. Our society is dedicated to bringing together students and tech enthusiasts to sharpen their skills, solve real-world challenges, and grow through collaboration. We specialize in coding challenges, DSA development, referrals, and tech guidance, ensuring that every member not only stays updated with the latest trends but also gains hands-on experience through practical sessions.

With Tech Spark, you’ll be part of a community that encourages learning, networking, and problem-solving. Our members regularly participate in hackathons, coding competitions, and mentorship sessions to build technical proficiency and professional networks.

Join us and spark your journey in tech—whether you're looking to enhance your coding skills, get career guidance, or collaborate on exciting projects, Tech Spark is the place for you!</h4>
    </div>
  );
}

export default About;
