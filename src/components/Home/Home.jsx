import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay, Navigation } from "swiper";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Home.css';


export const Home = () => {
  return (
    <div className='homeContainer'>

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

        modules={[Parallax, Pagination, Autoplay]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://cdn-images-1.medium.com/max/1000/1*_rPxyMGuFg2V5nPPey834w.jpeg)",
            "opacity": "0.5"
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            माँ फूलझरी देवी स्कूल
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            नैनी लार रोड देवरिया
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Our School is established by <i>Smt. Saraswati Devi</i> in the year 2007.
              It is a secondry school along with primary school. Anil Yadav is the Principle of our school.
              Our faculty is providing there best of knowledge to our students.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            माँ फूलझरी देवी स्कूल
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            नैनी लार रोड देवरिया
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Our School is established by <i>Smt. Saraswati Devi</i> in the year 2007.
              It is a secondry school along with primary school. Anil Yadav is the Principle of our school.
              Our faculty is providing there best of knowledge to our students.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            माँ फूलझरी देवी स्कूल
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            नैनी लार रोड देवरिया
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Our School is established by <i>Smt. Saraswati Devi</i> in the year 2007.
              It is a secondry school along with primary school. Anil Yadav is the Principle of our school.
              Our faculty is providing there best of knowledge to our students.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className='principle'>
        <div className='principleDetails'>
          <h1>About Principle of Our School</h1>
          <p>Welcome to Hampton Junior School (HJS) which is part of the Hampton Primary Partnership (HPP) with Hampton Infant School. This partnership enables the two schools to closely work together to provide a consistently high standard of education and a coherent approach to the education of all our children. HPP has a single governing body but both schools retain their individual identities and Ofsted ratings.  We have a shared vision, to be a partnership which all children have the opportunity to reach excellence and we work hard to achieve this.

            </p>
        </div>
        <div className='principleImage'><img src="https://cdn-images-1.medium.com/max/1000/1*iWEDscGCgG--gVy_fYXcZQ.jpeg" alt="principle" /></div>
      </div>

      <div className='teacherContainer'>
        <h1>MAAN   PHULAJHARI  DEVI  SCHOOL TEACHERS</h1>
        <div className='teachers'>
        <div className='divTeacher'>
        <div className="imageContainer">
            <img src="https://cdn-images-1.medium.com/max/1000/1*_laI9Hhip7JVLTIYXMxIog.jpeg" alt='img' />
            
          </div>
        <div class="caption text">
              Vivek Sir (BSc)
              Math Teacher</div>
        </div>
          
          <div className='divTeacher'>
            <div className="imageContainer">
              <img src="https://cdn-images-1.medium.com/max/1000/1*8wBSfO3nmLe_SQDKrnBKjQ.jpeg" alt='img' />
            </div>
            <div class="caption text">Deatails of teacher</div>
          </div>


          <div className='divTeacher'>
            <div className="imageContainer">
              <img src="https://cdn-images-1.medium.com/max/1000/1*1DUuv7XpPUJ9wBculp0srg.jpeg" alt='img' />

            </div>
            <div class="caption text">Deatails of teacher</div>
          </div>

          <div className='divTeacher'>
            <div className="imageContainer">
              <img src="https://cdn-images-1.medium.com/max/1000/1*kRjTE9Q9lQ_P9_X3OH0_HA.jpeg" alt='img' />

            </div>
            <div class="caption text">Deatails of teacher</div>
          </div>

          <div className='divTeacher'>
            <div className="imageContainer">
              <img src="https://cdn-images-1.medium.com/max/1000/1*iWEDscGCgG--gVy_fYXcZQ.jpeg" alt='img' />

            </div>
            <div class="caption text">Deatails of teacher</div>
          </div>


        </div>

      </div>

      <div className='schoolImages'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          <SwiperSlide><img src="https://cdn-images-1.medium.com/max/1000/1*HyOAmuzJUJaxuXgfne_XjQ.jpeg" alt="pic" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn-images-1.medium.com/max/1000/1*E2zOraxviagNNIDBPR61Fw.jpeg" alt="pic" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn-images-1.medium.com/max/1000/1*_rPxyMGuFg2V5nPPey834w.jpeg" alt="pic" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn-images-1.medium.com/max/1000/1*HyOAmuzJUJaxuXgfne_XjQ.jpeg" alt="pic" /></SwiperSlide>
          <SwiperSlide><img src="https://cdn-images-1.medium.com/max/1000/1*E2zOraxviagNNIDBPR61Fw.jpeg" alt="pic" /></SwiperSlide>

        </Swiper>
      </div>

    </div>
  )
}
