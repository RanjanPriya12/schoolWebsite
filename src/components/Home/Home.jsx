import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay,Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";

import './Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className='homeContainer'>
        <Link className='link' to='/'><h1 className='h1'>MAAN   PHULAJHARI  DEVI  SCHOOL</h1></Link>
       <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
        
        modules={[Parallax, Pagination,Autoplay]}
        className="mySwiper"
      >
                <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://swiperjs.com/demos/images/nature-1.jpg)",
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        </Swiper>

        <div className='principle'>
            <div className='principleDetails'>
                <h1>The Executive Leadership Team</h1>
                <p>Welcome to Hampton Junior School (HJS) which is part of the Hampton Primary Partnership (HPP) with Hampton Infant School. This partnership enables the two schools to closely work together to provide a consistently high standard of education and a coherent approach to the education of all our children. HPP has a single governing body but both schools retain their individual identities and Ofsted ratings.  We have a shared vision, to be a partnership which all children have the opportunity to reach excellence and we work hard to achieve this.

It is a great privilege to be part of the Executive Leadership Team at HPP, this team includes myself, Ms Helen Lockey and the Heads of both schools. Mr Patrick Tidd is the Head of School (HoS) at Hampton Junior School. We are ably supported by a dedicated and highly skilled leadership team, talented staff and a strong governing body.</p>
            </div>
            <div className='principleImage'><img  src="https://www.wisconsinbudgetproject.org/wp-content/uploads/2013/08/Teacher-and-student.jpg" alt="principle" /></div>
        </div>

        <div className='teacherContainer'>
            <h1>MAAN   PHULAJHARI  DEVI  SCHOOL TEACHERS</h1>
            <div className='teachers'>
                <div className="imageContainer">
                <img src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/nice-images.jpg" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/nice-images.jpg" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/nice-images.jpg" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/nice-images.jpg" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://hddesktopwallpapers.in/wp-content/uploads/2015/09/nice-images.jpg" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>

            </div>

        </div>

        <div className='schoolImages'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.h6XYOgrR-An_DwWOIWjJbwHaEK?pid=ImgDet&rs=1" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.Cie-dLYF9Vgv9ldFYxXCdQHaEh?pid=ImgDet&rs=1" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.hChybKaU-4ZQSjMYoPmGWQHaEK?w=313&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.k3-ewPL5w5URFKEqSYjswQHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://th.bing.com/th/id/OIP.4LdpndeOSv7S3IT_Z7sOpQHaEK?w=312&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7" alt="pic" /></SwiperSlide>
      </Swiper>
        </div>
       
    </div>
  )
}
