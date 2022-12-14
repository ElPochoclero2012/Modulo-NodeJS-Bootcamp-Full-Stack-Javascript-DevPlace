import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

//Acá haría las Cards en un Carousel de todos los juegos


function Products() {

  const [arrayProducts, setarrayProducts] = useState([])

  useEffect(() => {


    
    fetch('http://localhost:5050/product')
          .then(res => res.json())
          .then(data => data.data)
          .then((resp) => {
            setarrayProducts(resp)
          })
 
  }, [])
  

        return (
          <> 

      <Swiper
        slidesPerView={6}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        <section className="Cards">
          
        {arrayProducts.map((e,index) => {
          return(
            <SwiperSlide>
              <Product element={e} index={index}/>
            </SwiperSlide>
          )

        })
          
        }


        </section>
      </Swiper>
    
          </>
        );

        
};

export default Products