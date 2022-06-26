import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Autoplay,Navigation } from "swiper";
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
        
        modules={[Parallax, Pagination,Autoplay]}
        className="mySwiper"
      >
                <div
          slot="container-start"
          className="parallax-bg"
          style={{
            "background-image":
              "url(https://cdn-images-1.medium.com/max/1000/1*_rPxyMGuFg2V5nPPey834w.jpeg)",
          "opacity":"0.5"
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

It is a great privilege to be part of the Executive Leadership Team at HPP, this team includes myself, Ms Helen Lockey and the Heads of both schools. Mr Patrick Tidd is the Head of School (HoS) at Hampton Junior School. We are ably supported by a dedicated and highly skilled leadership team, talented staff and a strong governing body.</p>
            </div>
            <div className='principleImage'><img  src="https://lh3.googleusercontent.com/mPT_Xvyene7C5_QLlNXeexG8Gp-MK3gijOLxVdVxztmxcQW-3rmcCz0vXofrmkBrE4lssuyuz4qEBUr0B1ualTf8Tilcr6MT4uDKGqo7ojaL5kCxg6-rwyH5MFsMgU5Q6lvlBeA2flU-VYgz1TA_1H_sGrBFzUn0xRApZ_qQ89YquQaePYR6jk2SWLFWVQ1xJ7th5D7BkQ1M8ikHUJAPPVepotC9xTvMvTXSQjDx3fgzciiH5-hVjz3fAVibqfRHYxICM-oZQ6_SUyDUUER6YTGarEezOZoHZz-XnMtKPA-XP87mgeXcda_vPn1AM7xNLtpDs8bM4AUbBMZ3oWxWlpWDnJe_QKgUwbkFfGOb-SZ4XEHUoxYL5EMTV7J1KzJxILxTMZsUoSIMmYp1kKuZVSphJtIOQpa3_S9XuX1wSIXtWrFP0td-CZBDTgxGSaxTy2C-j__sZmP4koxFRhIjLAqyJyeykUiICjDGrv8e3MAHJVj_1HRbFkweaQq00ftTb9NVA7-ryGftBbC8gQqlvC_Mst5ykkBSVZn8TsGgxy5TmyiEP4xHrlWumP0tQGXo2gx_AutHV5D5kU59BxlzhEUs9TY45OEtDpNRbgD11zQxEWXECubejOtTOF9QcWVTPDL3IV-ngF8PoHTsgajBSv-QCtLUwjDPD6O6LbOu9UYWZH3fNrKjeLtLJhjNHsE1Kqbq9zP6XsfLpQhK_0C0b5nGNCMAQph6ix-NbU4viDb0xWlQvbuG-HWl3ts=w108-h145-no?authuser=0" alt="principle" /></div>
        </div>

        <div className='teacherContainer'>
            <h1>MAAN   PHULAJHARI  DEVI  SCHOOL TEACHERS</h1>
            <div className='teachers'>
                <div className="imageContainer">
                <img src="https://lh3.googleusercontent.com/cD0ZVKBz1ASiroRmeNPK2e-nGbCUZbdkkupKO79irTtA1vVSm6262-HyKnRFz7qBEPWhnMCuk1kNdwQD_zgVav3OXU6U6EddetxdgGZJ60Mhs85jcmMglCuNscyQx50ZCJlMY9T1SJmQfJ8Duhj0rm0De0QR7K7dIy2K2vL7aqOP1uelHdZW46s2AqgPtkMRRzpdFSqhLgObF--vFGvC0fXk55xn07YxL-yJ8nJsdJJJKbl8qTTWfwne1j92LeeNi8Xk_hVgpQ5DE0Tg2ZNHhFAMabwIXNEsvNJeYexnB5EX5Y-iecvfK-jM8hN4ElUE0QCXycqdGdjbx4WigUT58h-mCmETA6-tDbwgVoGuJKvwf0Fm4ChwWojfAI_BGVce_jmb9UNfG8IoFpUldQSVUuoZhx0c0m5alUkSMuq-gntFkvJ-ROXBx9jUN3FrwTG2Qx6PvpBI0vxzL90xbNpbpyRkxHKdXnSlFxVtuVyRXtdfEZI2jCjPoaXaUWJRDyFXV8eiyVTCyXb2AeNlomcgDBr7OQolyCxEz5dKzuQXkNlAES1n8VlG2icU_tO1vwqLSjYuHFpqRGFdNMbOo5K9xVff8CnuZvEbFVtFSXkgO7TjxsZ6pWkdYTssM6WVs1YP9zkDpfXPJsdqHAZsgh_NU_HJR93ieuFGPbNSQT69bmt4btlDaKlJVmYqH1tuXF8LepFuL5lpVGp27NHaFt94VnxrKfj_p1DAkPmrXfHi62LLpggo8ZoBQ5pgIUg=w334-h404-no?authuser=0" alt='img'/>
                <div class="caption text">
                  Vivek Sir (BSc)
                       Math Teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://lh3.googleusercontent.com/De8HXnu8X3tx8s0Qq3Ces7d2-q-0cHGFjki3R2Qehj1i8e8zZ_jTeiVcxT8LVl0h4SZ92AZGBpjVOzJiEgSscJG3Z6PvkFTiBJDWZI8DR2ZK4O-YpWw2OFLb5UXRwCRkY5ytGN-HeB64UwoeW3GD5f8ziun98mYfsQ1tlGaMh3irQvP2_1XQxibKwey0ryeJYBqfD5hrG-ygycCAzDRrQu2iJWYiKN8z61zFXZJrv8qxkXQPpVtNvGE8QH6qEjo57KCSUd5bfnewjXiX2EBM5GAKWIrRInLUxkTZ3UJN6I8Ow9qSxmiDu9GpTEG8NY0dHIeX3Z0JijYwxtK4seVafwmTNbgy8iWsGjkxPcJ6eHkBfKXU4xoA-p17_php5P1nCJuHdXqvyyj1cOdEg2ZhGzTiNUoTzb4YmQQKmRvsI8HixufaqOxhqrrjLJhXruxD1SGEfaVVMFZOfiBQgjfnU6LT9hD-SdsgOwCKXT9ROerCPbj-49dRs1Ik5v4070b3VKkOtcWSLobZy_8OUYsuSTHGfMCxBlSHy93NgPCCZpD-tDwUNroBAkuldlFY_RPQr0SNgiwbEiFjLgbANSKeHz9NkwjmLbzjKqLoZX1Sc9tTukTBzusGzmxV874UivY-TqKSsPYJnMpLA45BA_iAUkBipH0PX-Y4fSw6mcJcXpicRtTnfm2dajmHnG6BSH5sk_H-pcF3S661S9H3aBF6EQeoiSjHVDoLN0eyXUHyhHN-T2GGYj3w_Q1Zgi4=w208-h252-no?authuser=0" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://lh3.googleusercontent.com/KbZ7xoY0GOTsUOV-B5Kc-C8dRqD38WwGQ7rhyza3zflVxzoHzeXZNfbRfWli_QVEvMY9KmzKcSVwbBaNNVUsfbdcvgfejpeZoL5GlSCJJ8JRIY85AHaIZKrRSKHIhiN2UbSEoxgxE5acNxPVzFug3v19OMP3xa9T43SnLKr0jrvT0g7nBb78C_Enn772ybZn7-dNmmgF9fF2wClC9dYC6t6kAD_xb10HKfANsTEuFciKwfOZeWZK9guqr4IcKnB8Yj36GGyvB9SCjlcHg1fdddynO0fMIIGIZV9m3HKn7T5sEYlyK4r6Oo4JKikQ_02TlfYwC2NyAOHVmreiMoHBFFTevP35dJxnCLUvDRqpmZZboVte1cuX7IO1g_cK_FU-4qzv-zQn1cLUo7w_w3Uo8yzE4B1tsIhPdAouORrMuQHQibIjdsjzb8syWsAwfObPNC3VL3bJXM9fBT848VsYC-OTDKAHRtDwa-wM6mcxHedvOwJ1dt3-05oBscdUoxNVnArQPaDGLXWCKoAQ_PPxsjR6AMhuRZVeRlGQG1yNZ54blE8iL1oe9__aB-yBZNr9nSMu-X3YeDgWkryo56lv4VgTnBvq1aM6KQ5tymwXlmUscvZ6T3UxnMbprQM0c5a-bY-klqecCgsIWD3N4aOC1QSXfRQu2RJ-oCbc3HXsJtrIM6JSSyuL0MnKKxFDH0KrIzz-7gHJN88l_Bz1J6RO6QLUKO00QyWacn3N7O2r7oH1WyGp8rGrDbdybUo=w390-h365-no?authuser=0" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://lh3.googleusercontent.com/LkBZaUIN1lt8Jc30FvMLMljSWgSIFh6FB0hvWJV5-GwNWf3GvEcsfkcHYNKlQ4DJaB7ElkKr0D59TtDzul9RlJ2AFFeWXFgKMIaAO_enSFTnoEC2uyxUJSYb86NA8eKiO_8JDW7jk9n9Ei2exi3jO4a2WJ77taGJ9_Wob8WV6g2BD3AxOyXXqqjsn_LMp6OompPcqOX22ei-nrBvBJhfIewlE-T8FvMQF5ArooWu-yqhPwV18DHsulx8renDaNH9y9z8LD_ephx9fO-hNNc4Z_g7bCSoiTfvOF3wr3sMlkxMHS2bhYHK0QQgnLjjkuFzxeLvf7FEzfoFVnN3Vp9wAqvok4OxdEnoDlfyj9fdZnsmFtSVg9a78W-KYLqeJALtsr6p009q3u9ZsvZdXddZppSYWUMmKsvaqfBcjbyEO9qwGuWn4fhf9cqFh15S6twnM37Lw3Cp2-BOoY8B2UiLZXLR5v19f-a83Ca9mA29s3kxMC1hYpTaHHqnPGGTSnao-fqiQnhDKXAQSRpaPlYUNW4OkP0w-zdGonrrQAL5tj3k-GUu-0MNMDxy-1Z6GVrp4EeeVMKLcLSIAExpGYtldOAu0FAQCm3peoYW2FVvqNQmplyR-ZR9LYkhGR4ksGyyXa8nhcdTk8tQigow-n2bOheeJ3XWZvDpzGyxQO4h6Jw4DcE9yJJTU3CHeqYeI8H3_grRS-fJmEbVp5FznDQ-SGK4j69Yd-LcmXb63-jt1_-wHO0hscUvRSm1mkI=w278-h286-no?authuser=0" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>
                <div className="imageContainer">
                <img src="https://lh3.googleusercontent.com/mPT_Xvyene7C5_QLlNXeexG8Gp-MK3gijOLxVdVxztmxcQW-3rmcCz0vXofrmkBrE4lssuyuz4qEBUr0B1ualTf8Tilcr6MT4uDKGqo7ojaL5kCxg6-rwyH5MFsMgU5Q6lvlBeA2flU-VYgz1TA_1H_sGrBFzUn0xRApZ_qQ89YquQaePYR6jk2SWLFWVQ1xJ7th5D7BkQ1M8ikHUJAPPVepotC9xTvMvTXSQjDx3fgzciiH5-hVjz3fAVibqfRHYxICM-oZQ6_SUyDUUER6YTGarEezOZoHZz-XnMtKPA-XP87mgeXcda_vPn1AM7xNLtpDs8bM4AUbBMZ3oWxWlpWDnJe_QKgUwbkFfGOb-SZ4XEHUoxYL5EMTV7J1KzJxILxTMZsUoSIMmYp1kKuZVSphJtIOQpa3_S9XuX1wSIXtWrFP0td-CZBDTgxGSaxTy2C-j__sZmP4koxFRhIjLAqyJyeykUiICjDGrv8e3MAHJVj_1HRbFkweaQq00ftTb9NVA7-ryGftBbC8gQqlvC_Mst5ykkBSVZn8TsGgxy5TmyiEP4xHrlWumP0tQGXo2gx_AutHV5D5kU59BxlzhEUs9TY45OEtDpNRbgD11zQxEWXECubejOtTOF9QcWVTPDL3IV-ngF8PoHTsgajBSv-QCtLUwjDPD6O6LbOu9UYWZH3fNrKjeLtLJhjNHsE1Kqbq9zP6XsfLpQhK_0C0b5nGNCMAQph6ix-NbU4viDb0xWlQvbuG-HWl3ts=w108-h145-no?authuser=0" alt='img'/>
                <div class="caption text">Deatails of teacher</div>
                </div>

            </div>

        </div>

        <div className='schoolImages'>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src="https://lh3.googleusercontent.com/Jgj-ePZ11NEITR17dAsm-B8tcT48HO5XvU0E6Nl7aO1OYpcEYmJZG_SlMM5l-i4f89WMFwzr5mP4kgH7ylw6GzFy-8EFI3G-DmoLkaJct6kXEW9q8E2nt_UhIm2136PLR-uxiPRPHu4VYrtA3YEeuOFDulzPCzLmrUuDAJGBEPdFqDIrYzPyH47iHtpGJhuqbyjrdXhKv-uza9z4BO5EvqVkFCTRmokUD8HuGfMItEoCp0MEDC1q6U-RySc1C0yJjXwITTOR78FVTmadj0QXAnB4VgaDc-Zsp6HMpDlD89XZB881sXOlf1jtJP5csqYF0SXiUgeMOJ8hyXdUofA4KYt54uJ0s_IV2gjW3Nqh_eZt8Z6F_h2kRPIvjzq_TnUEcQY8EN67syaHuTsNS1W_-zekXswYOE_PA4jUtiWu871ohPJ5n2B9fy_qGrxyyCclseU2mmNHFpsctjYB2EgndeOIOL2UUtKjX8gsIrOQE8HTxvPiDTh09FuBqMAIcv-2wDJdnyaktS_-bIxLOCDGWoY5ZHchZUTwCKNjPGD4cArDr_q3S06AIxz7oE9C-nKBGjf4W5n9PmMDoZLmBqFZpzNTAkX1Z-8ofjr7FuHdFFiQZjHQIXllBBMdh5E4BKNgBMcoT-v9e21r1y-P4ODiM9pU6zRHE-epuote5MQf9RommvPbwqi-os1ZNi84J7ET_hZUY1K6vlGK1s9lpaerqatCk9JU5R0RMDmcYQk11e-2auPjZh9DBI3hMFI=w1224-h727-no?authuser=0" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://images.edexlive.com/uploads/user/imagelibrary/2020/8/20/original/IMG-20200820-WA0014.jpg" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://lh3.googleusercontent.com/lfgteIlfugAKgm1vaqYMnAn5jtYRgNcpLgu8cA79bhywCEHZX0K1FOJh9PFDTQo3xdM-wb5jVFpzjI6CWXmA7-lvysc3RrXiJzKZvta8gKjgZN93zze79fiK0cEz-bTtZDDqJiR8U9YNOQ7Cm9_tWf1sKnoGj6R-3oYPYt5tecmmGWyRD7LYR8OkGEjyNKRhBW6fTNmYXXtFHowtceb1NebSCbO3u7OohsPIx4CZh_OTti2HiHWjOgTuVEkIWJ0Ro48l8tPHmGScqK9afoaMUXbeMJvAhD4aZKymL0hJe_PJQzLllEu56dsbw0JmvMYUTw-5v51BVNYxI3RIQzK_Ov_-eBLBYL9-nwkVmevo-L2euxkPoLP1_YdOBinjdx5m2lMR8lAvW4-DbTFT6yAKXwbCoRI2ef7HxXoY9sZ-nOIrsXkNdNm1oxP8CH1dE0f4z22JmjRR17ThJaKTGM-jAWEeUodnyAlvTWYNO_iKpkKReJuhugzCaiQy_FUxoFIBKVXHPMovbwCQGZM6dWfR-u-rmd9QQiAt1Ox3pbQCfNXTQAFC5g9Nh8jub0w6SimvAZ7AGaxc4NxIrVY7gRpPkbE6UsqExUSXuiCzuhPL0UfVYCz0WPD_BIvF_KYCWVy7fyHVeATkGZZae6DrPhFfplYHOIivEPuisztID5vXyjpsyZfsfeBu5339zs7DRPIYCdZwjTdSS24Nj0ep__n1SBSl9pVrF6B3XPoMY5f2vvEKR1QMCcrVHiRc298=w1280-h605-no?authuser=0" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://lh3.googleusercontent.com/Jgj-ePZ11NEITR17dAsm-B8tcT48HO5XvU0E6Nl7aO1OYpcEYmJZG_SlMM5l-i4f89WMFwzr5mP4kgH7ylw6GzFy-8EFI3G-DmoLkaJct6kXEW9q8E2nt_UhIm2136PLR-uxiPRPHu4VYrtA3YEeuOFDulzPCzLmrUuDAJGBEPdFqDIrYzPyH47iHtpGJhuqbyjrdXhKv-uza9z4BO5EvqVkFCTRmokUD8HuGfMItEoCp0MEDC1q6U-RySc1C0yJjXwITTOR78FVTmadj0QXAnB4VgaDc-Zsp6HMpDlD89XZB881sXOlf1jtJP5csqYF0SXiUgeMOJ8hyXdUofA4KYt54uJ0s_IV2gjW3Nqh_eZt8Z6F_h2kRPIvjzq_TnUEcQY8EN67syaHuTsNS1W_-zekXswYOE_PA4jUtiWu871ohPJ5n2B9fy_qGrxyyCclseU2mmNHFpsctjYB2EgndeOIOL2UUtKjX8gsIrOQE8HTxvPiDTh09FuBqMAIcv-2wDJdnyaktS_-bIxLOCDGWoY5ZHchZUTwCKNjPGD4cArDr_q3S06AIxz7oE9C-nKBGjf4W5n9PmMDoZLmBqFZpzNTAkX1Z-8ofjr7FuHdFFiQZjHQIXllBBMdh5E4BKNgBMcoT-v9e21r1y-P4ODiM9pU6zRHE-epuote5MQf9RommvPbwqi-os1ZNi84J7ET_hZUY1K6vlGK1s9lpaerqatCk9JU5R0RMDmcYQk11e-2auPjZh9DBI3hMFI=w1224-h727-no?authuser=0" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://lh3.googleusercontent.com/DVOKqc6RobgB46vv8ugviROVlnT46M_wjbzvLIJiWoWdY2yoWnr4o_yzibI8o2tWaB400y6cYFt8dXCSl2pQXP05H1Hjoo2zsCEkvkcEOx3odkDUeTkZS78CSg6-TEJHZJYtUFyfqRete6wzBiQFSqq8nYsxAUQgstMQlL7bzCztmJOyIMfnTe4bcm_R6_OBeQRoxC1Kcq1IErzpo4iCQUs6Orl2LzkZEv8433CZZEM-VmUNwsrtasERKaFHg_AeMPliODQZVlrJArpOQybEWgZzT1vMxbKuJdqYhgk59rI7hfr1kPbCQA_F1sKh8rOP05ge51bEe_swqqaIUpLqauDZh4FmWxiPPUbJZzJaD5rsqMnfv7UsjwLlJmGcVMEJhaKc-gFrDXuyx9DtOjIHtkGKj911-oIMxuF3MHI2MzC3CQZO6MbKJ5XvdOBwaMng0XKzllGJqon_76OK06yemEhYIGIBo9m4cmruN43Yuk5QpY6KLdzKV2sF9JjkbJ4Um-4yNPotKPtNJbJwgKqE81UqxyPws303h92nigmwKJw1EqIdDD5J2k-kJ14Bzg4u_ulRtWt_U2BOzY6hxVJs5jAdt5WS-Jox60nuwVJBVqkWI0NUopnSs5Re7iAtHdHROn4z7-T5Q_10gCXJV8rWbECNjc_J5Rc1zHme25XMwFoP1QrQzJqshfQgN3IKTXrTMv1P2kVtA4ojUWbpvrsW3xIWQg2WJqYx0K47xCXzs_TvmmY3ajH7gDT5B1A=w1280-h602-no?authuser=0" alt="pic" /></SwiperSlide>
        <SwiperSlide><img src="https://s-media-cache-ak0.pinimg.com/736x/4f/87/9b/4f879bf2424a2645fbae22c26e7e096c.jpg" alt="pic" /></SwiperSlide>
      </Swiper>
        </div>
       
    </div>
  )
}
