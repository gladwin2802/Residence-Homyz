
import React from 'react';
import { Swiper, SwiperSlide,useSwiper} from 'swiper/react';
import 'swiper/css';
import './Residencies.css';
import data from '../../utils/slider.json';
const Residencies = () => {
  return (
    <section className='r-wrapper'>
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className='orangeText'>Best Choices</span>
          <span className='primaryText'>Popular residencies</span>
        </div>
        <Swiper
      
      spaceBetween={50}
      slidesPerView={3}
      >
           <SliderButtons/>
        
      {data.map((card,i)=>(
          <SwiperSlide key={i}>
             <div className='r-card'>
              <img src={card.image} alt='img-1'></img>
              <span className='secondaryText r-price'>
                  <span style={{color:"orange"}}>$</span><span>{card.price}</span>
                </span>
                <span className='primaryText'>{card.name}</span>
                <span className='secondarytext'>{card.detail}</span>
             </div>
          </SwiperSlide>
      ))}     
    </Swiper>
      </div>
    </section>
  );
}
export default Residencies;
const SliderButtons=()=>{
    const swiper=useSwiper();
    return(
      <div className="flexCenter r-button">
        <button onClick={()=>swiper.slidePrev()}>&lt;</button>
        <button onClick={()=>swiper.slideNext()}>&gt;</button>
      </div>
    )
}

