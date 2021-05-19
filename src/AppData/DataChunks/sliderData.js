import React from 'react';
import {CarouselData} from '../../component/carousel/CarouselData';
import exampleImage1 from '../../assets/exampleImage1.jpeg';
import exampleImage2 from '../../assets/exampleImage2.jpeg';
import exampleImage3 from '../../assets/exampleImage3.jpeg';
import exampleImage4 from '../../assets/exampleImage4.jpeg';
import exampleImage5 from '../../assets/exampleImage5.jpeg';
import exampleImage6 from '../../assets/exampleImage6.jpeg';



const SliderData = () => {
    return (   
 <>

 <div className="deliver-slider">
        <h3 className="widget-title sub mt-1">Immaculate. Impartial. [ESX]</h3>
        <div className="carousel slide">
         <CarouselData>
         <div className="carousel-inner">
             <div className="carousel-item">
        <img src={exampleImage1} alt="" style={{marginLeft: "50px"}}/>
        </div>
             </div>
             <div className="carousel-item">
        <img src={exampleImage2} alt="" style={{marginLeft: "50px"}}/>
             </div>
             <div className="carousel-item">
        <img src={exampleImage3} alt="" style={{marginLeft: "50px"}} />
             </div>
             <div className="carousel-item">
        <img src={exampleImage4} alt="" style={{marginLeft: "50px"}}/>
             </div>
             <div className="carousel-item">
        <img src={exampleImage5} alt="" style={{marginLeft: "50px"}}/>
             </div>
             <div className="carousel-item">
        <img src={exampleImage6} alt="" style={{marginLeft: "50px"}}/>
             </div>
         </CarouselData>
        
        </div>
        </div> 

        </>
    )
}

export default SliderData


