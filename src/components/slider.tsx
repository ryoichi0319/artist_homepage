import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectCube } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube'
import 'swiper/css/autoplay'
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
  modules={[Navigation, Pagination, Scrollbar,Autoplay,EffectCube]}
  pagination={{ clickable: true }}
  // autoplay={{ delay: 3000, disableOnInteraction: false }} // 必要に応じて値を調整
  
  slidesPerView={2}
  navigation
  scrollbar={{ draggable: true }}
  effect={'cube'}
  cubeEffect={{
    shadow: true,
    slideShadows: true,
    shadowOffset: 20,
    shadowScale: 0.94,
  }}
  grabCursor= {true}              //追加(カーソルを掴む動作に
  speed= {1500}        
>
      
      {items.map((item) => (
        <SwiperSlide key={item.id} className="slider">
          <img src={item.imageUrl} alt={item.content} width="100%" height="300px"/> {/* 画像を表示 */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
