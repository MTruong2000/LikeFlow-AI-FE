import React from "react";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "MR. ALEX TRAN",
      title: "CEO Ecomstone",
      avatar:
        "https://w.ladicdn.com/s450x450/66e18ea9521baa00137153a3/screenshot_1-20250114085752-fqq5q.jpg",
      quote:
        "We’ve tried multiple AI tools, but Likeflow’s capabilities for local language content are unmatched. It cut our costs by 50% and automated 80% of repetitive tasks.",
      rating: 5,
    },
    {
      id: 2,
      name: "MS. HA ANH",
      title: "Entrepreneur",
      avatar:
        "https://w.ladicdn.com/s450x450/66e18ea9521baa00137153a3/screenshot_1-20250114085752-fqq5q.jpg",
      quote:
        "The platform runs seamlessly, delivering high-quality content in multiple languages. We rate it 10/10 — reduced costs, improved results.",
      rating: 4,
    },
    {
      id: 3,
      name: "MR. TUAN KAYO",
      title: "Amazon Seller",
      avatar:
        "https://w.ladicdn.com/s450x450/66e18ea9521baa00137153a3/screenshot_1-20250114085752-fqq5q.jpg",
      quote:
        "Likeflow empowers content creators to focus on quality without deep marketing expertise. It’s fast, intuitive, and professional.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <div className="xl:w-[1200] m-auto mb-12 xl:px-0 sm:px-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-[length:var(--text-header-sp)] md:text-[length:var(--text-header-pc)] font-bold pb-4">
          HOW{" "}
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            LIKEFLOW
          </span>{" "}
          AI DRIVES BUSINESS GROWTH
        </h2>
        <p className="text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)]">
          Likeflow AI helps businesses increase sales, optimize operations, and
          enhance team collaboration. Discover real stories and insights
          directly from our customers.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Mobile: scroll ngang | Desktop: grid */}
        <div className="flex space-x-6 overflow-x-auto snap-x snap-mandatory pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0 md:overflow-visible">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 relative border border-gray-100 min-w-[80%] sm:min-w-[60%] md:min-w-0 snap-center"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Quote */}
              <div className="text-center mb-8">
                <p className="text-gray-700 text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] leading-relaxed font-medium">
                  {testimonial.quote}
                </p>
              </div>

              {/* Customer Info */}
              <div className="text-center mb-4">
                <h3 className="font-bold text-gray-900 text-[length:var(--text-body-text-sp)] md:text-[length:var(--text-body-text-pc)] tracking-wide mb-1">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-xs font-medium">
                  {testimonial.title}
                </p>
              </div>

              {/* Stars */}
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
