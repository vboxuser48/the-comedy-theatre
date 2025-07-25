import React from 'react';
import { Users, Award, Heart, Mic } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: <Mic className="h-8 w-8" />,
      title: "Premium Comedy Shows",
      description: "Featuring the best local and national comedians every night"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Intimate Venue",
      description: "Perfect seating for 150 guests ensuring everyone gets the best experience"
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: "Award Winning",
      description: "Recognized as Bangalore's premier comedy destination since 2018"
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Community Focused",
      description: "Supporting local talent and building the comedy scene in Bangalore"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About <span className="text-yellow-400">The Comedy Theatre</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Located in the vibrant heart of Indiranagar, The Comedy Theatre has been Bangalore's 
            premier destination for world-class stand-up comedy since 2018. Our intimate venue 
            creates the perfect atmosphere where comedians and audiences connect through the 
            universal language of laughter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-700"
            >
              <div className="text-yellow-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Join the Laughter Revolution!
          </h3>
          <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
            Whether you're looking for a fun night out with friends or a unique date experience, 
            our carefully curated shows guarantee an unforgettable evening of entertainment.
          </p>
          <button className="bg-white text-red-600 hover:bg-yellow-400 hover:text-black px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
            Book Your Seats Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;