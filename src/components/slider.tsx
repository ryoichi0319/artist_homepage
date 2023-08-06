import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './slider.css'



type SlideItem = {
  id: number;
  content: string;
  imageUrl: string; // 画像のURLを追加
};

type SliderProps = {
  items: SlideItem[];
};

const Slider: React.FC<SliderProps> = ({ items }) => {
  return (
    <Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    pagination={{ clickable: true }}
    spaceBetween={50}
    slidesPerView={1}
    navigation
    scrollbar={{ draggable: true }}
    >
      
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <img src={item.imageUrl} alt={item.content} width="100%" height={500}/> {/* 画像を表示 */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
