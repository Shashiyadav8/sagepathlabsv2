import React from "react";
import "./Testimonials.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Enhanced data with attribution titles
const testimonials = [
  {
    rating: 5,
    text: "SagePath Labs is my trusted partner for diagnostics. The staff are professional and the reports are prompt and accurate.",
    author: "Aarav R.",
    role: "Regular Patient",
    initial: "A"
  },
  {
    rating: 5,
    text: "Excellent service! Got a home sample collection and the process was clean and convenient. Highly recommend.",
    author: "Sneha P.",
    role: "Home Collection",
    initial: "S"
  },
  {
    rating: 4,
    text: "Great experience at SagePath Labs. The doctors explained everything in detail and made sure I was comfortable.",
    author: "Rohit M.",
    role: "Full Body Checkup",
    initial: "R"
  },
  {
    rating: 5,
    text: "Very efficient and affordable. The follow-ups are timely and the lab is equipped with modern technology.",
    author: "Nikita S.",
    role: "Diagnostic Test",
    initial: "N"
  },
  {
    rating: 5,
    text: "The online report system is seamless. I got my results within hours. Very impressed with the speed.",
    author: "Vikram K.",
    role: "Blood Test",
    initial: "V"
  },
];

const ratingStars = (count) =>
  Array.from({ length: count }, (_, i) => (
    <span key={i} className="star-icon">★</span>
  ));

const Testimonials = () => (
  <section className="testimonials-section-new py-5" id="testimonials">
    <div className="container">
      <div className="text-center mb-5">
        <span className="testimonials-badge-new">Testimonials</span>
        <h2 className="testimonials-heading">What Our <span className="highlight">Patients Say</span></h2>
        <p className="testimonials-sub">Trusted by thousands for accurate diagnostics and care.</p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="testimonials-swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i} className="h-auto">
            <div className="testimonial-card-new">
              <div className="quote-icon-bg">”</div>

              <div className="card-header-row mb-3">
                <div className="author-avatar">{t.initial}</div>
                <div className="author-meta">
                  <h5 className="author-name">{t.author}</h5>
                  <span className="author-role">{t.role}</span>
                </div>
              </div>

              <div className="testimonial-stars-new mb-3">
                {ratingStars(t.rating)}
              </div>

              <div className="testimonial-content">
                <p>"{t.text}"</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Testimonials;
