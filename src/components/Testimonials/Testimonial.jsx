import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import { Pagination } from "swiper";
// import "swiper/css/pagination";
// import 'swiper/modules/pagination/pagination.min.css'
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";

const Testimonial = () => {
    const clients = [
        {
            img: profilePic1,
            review:
                "PomPom"
        },
        {
            img: profilePic2,
            review:
                "PomPom"
        },
        {
            img: profilePic3,
            review:
                "PomPom"
        },
    ];

    return (
        <div className="t-wrapper" id="testimonial">
            <div className="t-heading">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
            <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
            <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>
            <Swiper
                modules={[Pagination]}
                slidersPerView={1}
                pagination={{ clickable: true }}
            >
                {clients.map((client, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <div className="testimonial">
                                <img src={client.img} alt="" />
                                <span>{client.review}</span>
                            </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
};

export default Testimonial;