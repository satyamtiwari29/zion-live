import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import "../assets/css/Swiper.css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Autoplay } from "swiper";

const testimonials = [
  {
    id: 1,
    name: "Dr Vivek Rastogi",
    title: "CTO, Fabindia",
    image:
      "https://ziongroup.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-22.01.03_ddb07b09.jpg",
    text: "Partnering with Zion Computers has been a game-changer for our business. Our relationship goes back to 1994, and their expertise in IT infrastructure and managed services has ensured seamless operations and robust support as we’ve grown. Their commitment to excellence and customer satisfaction truly sets them apart.",
    bgColor: '#d01257'
  },
  {
    id: 2,
    name: "Mr Titus Koshy,",
    title: "CEO, UCS",
    image:
      "https://ziongroup.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-22.01.02_23bd3430.jpg",
    text: "Zion Computers has been transformative for our business. They have been providing reliable and scalable IT infrastructure solutions across pan India, supporting our growth and innovation. Their commitment to excellence and customer satisfaction is evident in everything they do. We couldn’t have asked for a better partner.",
    bgColor: '#c06c84'
  },
  {
    id: 3,
    name: "Mr Adolf Fernades",
    title: " IT Manager, Coty Inc.",
    image:
      "https://ziongroup.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-22.18.30_df03a271.jpg",
    text: "Zion has significantly enhanced our business operations with their managed IT services. Their proactive approach and expertise have ensured our systems run smoothly and securely, allowing us to focus on our core activities. Their dedication to excellence and customer satisfaction is unmatched. We are grateful to have such a reliable and responsive partner.",
    bgColor: '#6c5b7c'
  },
  {
    id: 4,
    name: "Dr Vivek Rastogi",
    title: "CTO, Fabindia",
    image:
      "	https://ziongroup.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-22.01.03_ddb07b09.jpg",
    text: "Partnering with Zion Computers has been a game-changer for our business. Our relationship goes back to 1994, and their expertise in IT infrastructure and managed services has ensured seamless operations and robust support as we've grown. Their commitment to excellence and customer satisfaction truly sets them apart.",
    bgColor: '#f67280'
  },
  {
    id: 5,
    name: "Mr Titus Koshy",
    title: "CEO, UCS",
    image:
      "https://ziongroup.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-22.01.02_23bd3430.jpg",
      text: "Zion Computers has been transformative for our business. They have been providing reliable and scalable IT infrastructure solutions across pan India, supporting our growth and innovation. Their commitment to excellence and customer satisfaction is evident in everything they do. We couldn’t have asked for a better partner.",
    bgColor: '#d01257'
  },
  {
    id: 6,
    name: "Mr Adolf Fernades",
    title: "IT Manager, Coty Inc.",
    image:
      "https://ziongroup.com/wp-content/uploads/2024/07/WhatsApp-Image-2024-07-04-at-22.18.30_df03a271.jpg",
      text: "Zion has significantly enhanced our business operations with their managed IT services. Their proactive approach and expertise have ensured our systems run smoothly and securely, allowing us to focus on our core activities. Their dedication to excellence and customer satisfaction is unmatched. We are grateful to have such a reliable and responsive partner.",
    bgColor: '#c06c84'
  },
];

const ClientCarousel = () => {

  return (
    <>
      <div className="container-fluid d-lg-block d-none">
        <Swiper
          grabCursor={true}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          {testimonials &&
            testimonials.map((client) => (
              <SwiperSlide key={client.id}>
                <TestimonialCard details={client} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <div className="container-fluid d-lg-none d-block">
        <Swiper
          grabCursor={true}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="mySwiper"
        >
          {testimonials &&
            testimonials.map((client) => (
              <SwiperSlide key={client.id}>
                <TestimonialCard details={client} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </>
  );
};

export default ClientCarousel;
