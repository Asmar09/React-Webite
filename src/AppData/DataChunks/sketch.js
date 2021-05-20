import React from 'react';
import sketch1Img from '../../assets/sketch1.png';
import sketch2Img from '../../assets/sketch2.png';


const Sketch = () => {
    return (
        <div className="sketch-widget">
            <h3 class="widget-title sub mt-1" style={{marginLeft: "40%"}}><a href="https://support.matterport.com/hc/en-us/articles/360001452428-Matterport-TrueSketch-and-TrueSketch-PLUS-for-Xactimate" target="_blank" rel="noreferrer">TruePlan [SKX]</a></h3>
            <section className="sketch-container">
           <img src={sketch1Img} alt="" loading="lazy" />
           <img src={sketch2Img} alt="" loading="lazy"/>

            </section>
            
        </div>
    )
}

export default Sketch
