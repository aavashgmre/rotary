import React from "react";

interface NewsProps {
  title: string;
  date: string;
  imageUrl: string;
}

const Hero: React.FC<NewsProps> = ({ title, date, imageUrl }) => {
  return (
    <section className="relative w-full bg-gray-100">
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-75"
        />
      </div>

      {/* Overlay content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-24 text-center text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium">
          {date}
        </p>
      </div>

      {/* Optional color gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
    </section>
  );
};

export default Hero;
