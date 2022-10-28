import SneakerSliderWrapper from './SneakerSliderWrapper.css';
import { useParams } from 'react-router-dom';
import { data } from '@/data';
import Card from './component/Card';
import { Autoplay, Navigation, Pagination} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import "swiper/css/pagination";
import "swiper/css/navigation";

function SneakerSlider() {
  
  const { id } = useParams()

  let brand = ''
  data.sneakers.find(item => item?.id === Number(id) 
    ? brand = item.brand_name 
    : undefined
  )

  let listSameTypeSneakers: any = []
  data.sneakers.map(i => {
    if (i.brand_name === brand) {
      listSameTypeSneakers.push({...i})
    }
  })
  
  return (
    <SneakerSliderWrapper>
      <article>
        <h2>Others</h2>
        <Swiper
        className='swiper--zIndex'
        loop={true}
        centeredSlides={true}
        navigation={true}
        loopFillGroupWithBlank={true}
        modules={[Pagination, Autoplay, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        slidesPerView={3}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          "@0.50": {
            slidesPerView: 1.25,
            spaceBetween: 25,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          "@1.25": {
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "@1.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        >
          {
            listSameTypeSneakers.map((i: any) => {
              return (
                <SwiperSlide key={i.id}>
                  <Card item={i}/>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </article>
    </SneakerSliderWrapper>
  )
}
export default SneakerSlider