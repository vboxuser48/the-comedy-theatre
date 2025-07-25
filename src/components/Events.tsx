import React, { useState } from 'react';
import { Calendar, Clock, MapPin, X, ExternalLink } from 'lucide-react';

interface Event {
  id: number;
  name: string;
  date: string;
  time: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  comedian: string;
  price: string;
  bookmyshowUrl: string;
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      name: "Stand-Up Comedy Night",
      date: "2025-01-25",
      time: "7:00 PM",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg",
      shortDescription: "An evening of hilarious stand-up comedy with top local comedians",
      fullDescription: "Join us for an unforgettable evening of laughter with some of Bangalore's most talented stand-up comedians. Featuring a mix of observational humor, storytelling, and interactive comedy that will keep you entertained throughout the night. Perfect for date nights, friend gatherings, or just treating yourself to some quality entertainment.",
      comedian: "Rajesh Kumar & Friends",
      price: "₹299 onwards",
      bookmyshowUrl: "https://in.bookmyshow.com"
    },
    {
      id: 2,
      name: "Weekend Comedy Special",
      date: "2025-01-26",
      time: "8:00 PM",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
      shortDescription: "Special weekend show featuring nationally acclaimed comedians",
      fullDescription: "Our weekend special brings you nationally recognized comedians who have performed on major platforms and comedy festivals. Experience premium comedy in an intimate setting with professional lighting and sound. This show includes a complimentary welcome drink and reserved seating for the best comedy experience in Bangalore.",
      comedian: "Priya Vasudev",
      price: "₹499 onwards",
      bookmyshowUrl: "https://in.bookmyshow.com"
    },
    {
      id: 3,
      name: "Open Mic Night",
      date: "2025-01-28",
      time: "7:30 PM",
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg",
      shortDescription: "Support local talent at our monthly Open Mic event",
      fullDescription: "Be part of supporting the next generation of comedy talent at our monthly Open Mic Night. Watch aspiring comedians test their material in a supportive environment while enjoying an evening of fresh, unpolished, and authentic humor. Great for discovering new talent and experiencing the raw energy of emerging comedians.",
      comedian: "Various Local Artists",
      price: "₹199 onwards",
      bookmyshowUrl: "https://in.bookmyshow.com"
    },
    {
      id: 4,
      name: "Ladies Night Special",
      date: "2025-01-30",
      time: "8:30 PM",
      image: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg",
      shortDescription: "Exclusive comedy show featuring female comedians",
      fullDescription: "Celebrate the power of female comedy with our Ladies Night Special. Featuring talented female comedians who bring unique perspectives and hilarious takes on modern life. The show includes special cocktail offers for ladies and a fun, empowering atmosphere that celebrates women in comedy. A perfect night out with your girl gang!",
      comedian: "Sneha Menon & Team",
      price: "₹399 onwards",
      bookmyshowUrl: "https://in.bookmyshow.com"
    }
  ];

  const openModal = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBookNow = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section id="events" className="py-20 bg-gradient-to-br from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Upcoming <span className="text-yellow-400">Events</span>
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't miss out on our fantastic lineup of comedy shows and events
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {events.map((event) => (
            <div 
              key={event.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-yellow-400"
              onClick={() => openModal(event)}
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {event.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">
                  {event.name}
                </h3>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-yellow-400" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-yellow-400" />
                    {event.time}
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed">
                  {event.shortDescription}
                </p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-yellow-400 font-semibold">
                      {event.comedian}
                    </p>
                  </div>
                  <div className="flex items-center text-yellow-400 hover:text-white transition-colors">
                    <span className="mr-2">View Details</span>
                    <ExternalLink className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Event Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative">
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.name}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-black/50 text-white hover:text-yellow-400 p-2 rounded-full transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
                <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full font-semibold">
                  {selectedEvent.price}
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedEvent.name}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-yellow-400">
                    <Calendar className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-semibold">Date</p>
                      <p className="text-gray-300">{formatDate(selectedEvent.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400">
                    <Clock className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-semibold">Time</p>
                      <p className="text-gray-300">{selectedEvent.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400 md:col-span-2">
                    <MapPin className="h-5 w-5 mr-3" />
                    <div>
                      <p className="font-semibold">Venue</p>
                      <p className="text-gray-300">The Comedy Theatre, Indiranagar, Bangalore</p>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    Featuring: {selectedEvent.comedian}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {selectedEvent.fullDescription}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => handleBookNow(selectedEvent.bookmyshowUrl)}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Book on BookMyShow
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Events;