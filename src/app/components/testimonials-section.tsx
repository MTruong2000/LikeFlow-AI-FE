import React from 'react';
import { MessageSquare, Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "MR. ALEX TRAN",
      title: "CEO Ecomstone",
      avatar: "https://w.ladicdn.com/s450x450/66e18ea9521baa00137153a3/screenshot_1-20250114085752-fqq5q.jpg",
      quote: "We've tried many AI tools, but Bothive's Vietnamese LLM capabilities are unmatched. It cut our costs by 50% and automated 80% of repetitive tasks.",
      rating: 5
    },
    {
      id: 2,
      name: "MS. HA ANH",
      title: "Entrepreneur",
      avatar: "https://w.ladicdn.com/s450x450/66e18ea9521baa00137153a3/screenshot_1-20250114085752-fqq5q.jpg",
      quote: "It runs smoothly. The Vietnamese content quality is top-notch. We rate it 10/10 – reduced cost, better output.",
      rating: 4
    },
    {
      id: 3,
      name: "MR. TUAN KAYO",
      title: "Amazon Seller",
      avatar: "https://w.ladicdn.com/s450x450/66e18ea9521baa00137153a3/screenshot_1-20250114085752-fqq5q.jpg",
      quote: "Bothive lets content creators focus on quality without needing deep marketing knowledge. Fast, easy, and professional.",
      rating: 5
    }
  ];

  const renderStars = (rating:any) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="xl:w-[1200] m-auto mb-12 xl:px-0 sm:px-12 px-4">
      <div className='text-center mb-12'>
        <h2 className='text-2xl sm:text-4xl font-bold pb-4'>HOW <span className='text-[var(--color-primary)]'>BOTHIVE AI</span> BOOSTS BUSINESS PERFORMANCE</h2>
        <p className='text-xl'>BotHive AI empowers businesses to improve sales, streamline operations, and boost team collaboration</p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative border border-gray-100"
            >
              {/* Avatar với khung tròn vàng */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full p-1">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  
                  {/* Icon tin nhắn nhỏ */}
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Quote Text */}
              <div className="text-center mb-8">
                <p className="text-gray-700 text-sm leading-relaxed font-medium">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-gray-900 text-sm tracking-wide mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-xs font-medium">
                  {testimonial.title}
                </p>
              </div>

              {/* Rating Stars */}
              <div className="flex justify-center space-x-1">
                {renderStars(testimonial.rating)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;