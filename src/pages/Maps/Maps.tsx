import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Controller, Pagination, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/thumbs';
import * as S from "./Maps.style";

import {
  Pagination as ThumbsPagination,
} from "swiper/modules";

SwiperCore.use([Controller, Pagination, ThumbsPagination]);

const Maps = () => {
  const [data, setData] = useState<any[]>([]);
  const [swiper, setSwiper] = useState<any>(0);
  

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/maps")
      .then((res:any) => setData(res?.data?.data))
  }, []);

  const filteredData = data.filter(e => {
    return e.tacticalDescription !== null;
  })

  const mainSwiperParams = {
    modules: [Controller, Pagination, Scrollbar],
    slidesPerView: 1,
    spaceBetween: 50,
    grabCursor: true,
    draggable: true,
    loop: false,
    style: {
      "--swiper-pagination-color": "#FFF",
      "--swiper-pagination-bullet-inactive-color": "#999999",
      "--swiper-pagination-bullet-inactive-opacity": "1",
      "--swiper-pagination-bullet-size": "16px",
      "--swiper-pagination-bullet-horizontal-gap": "6px",
      "--swiper-pagination-bullet-shape": "square",
      "--swiper-scrollbar-border-radius": "10px",
      "--swiper-scrollbar-top": "auto",
      "--swiper-scrollbar-bottom": "4px",
      "--swiper-scrollbar-left": "auto",
      "--swiper-scrollbar-right": "4px",
      "--swiper-scrollbar-sides-offset": "1%",
      "--swiper-scrollbar-bg-color": "rgb(0, 0, 0)1)",
      "--swiper-scrollbar-drag-bg-color": "#f84655",
      "--swiper-scrollbar-size": "4px"
    }
  };

  return (
    <S.MapsContainer>
      <S.MapsWrapper>
        <Swiper scrollbar={{ draggable: true, dragSize: 24 }} onSlideChange={(swiper: any) =>setSwiper(swiper.realIndex)} {...mainSwiperParams}>
          {filteredData?.map((item: any) => (
            <SwiperSlide key={item.uuid}>
              <img width="100%" height="100%" style={{ marginTop: "-10px" }} src={item?.splash} alt={item?.name} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div style={{display: "flex", width: "100%", justifyContent: "flex-end"}}>
          <S.MapsInfo>
          <h2>
            {filteredData?.[swiper]?.displayName}
          </h2>
          <span>
            {filteredData?.[swiper]?.narrativeDescription}
          </span>
        </S.MapsInfo>
        </div>
        
      </S.MapsWrapper>
    </S.MapsContainer>
  );
};

export default Maps;
