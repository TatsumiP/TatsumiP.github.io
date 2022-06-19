import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper-bundle.min.js'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import { Pagination } from "swiper";
import atom from "../../img/atom.png";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
// import 'swiper/swiper.scss';
// import "swiper/css";
// import "swiper/css/pagination";

const Testimonial = () => {
    //     const Swiper = new Swiper('.swiper', {
    //     navigation: {
    //       nextEl: '.swiper-button-next',
    //       prevEl: '.swiper-button-prev',
    //     },
    // });

    const clients = [
        {
            img: profilePic1,
            review:
                "PomPom PomPom PomPomPien..."
        },
        {
            img: profilePic2,
            review:
                "PomPom PomPom PomPomPien..."
        },
        {
            img: profilePic3,
            review:
                "PomPom PomPom PomPomPien..."
        },
    ];

    return (
        <div className="tm-wrapper" id="testimonial">
            {/* -----heading----- */}
            <div className="heading-container">
                <div className="heading-board">
                    <img src={atom} alt="" className="icon" />
                    <h2>Testimonial</h2>
                </div>
            </div>

            {/* -----main----- */}
            <div className="swiper">
                <div className="swiper-wrapper">
                    <Swiper
                        modules={[Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        navigation={true}
                    >
                        {clients.map((client, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="testimonial">
                                        <img src={client.img} alt="client images" />
                                        <span>{client.review}</span>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div className="swiper-pagination"></div>

            </div>
        </div>
    );
};

export default Testimonial;