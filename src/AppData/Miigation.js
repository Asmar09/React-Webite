import React from 'react';
import leftImage from '../assets/sketch1.png';
import rightImage from '../assets/sketch2.png';
import ReactCompareImage from 'react-compare-image';

const Miigation = () => {
    return (
     <div>
         <div className="container">
         <div className="mpartial_section">
             <div className="title left">
                 <div className="row">
                     <div className="col-md-6 col-sm-12"><h1 className="section_title_text">GROUND-TRUTH DATA EVERYONE TRUSTS</h1></div>
                     <div className="col-md-6 col-sm-12">
                         <p className="section_title_description">mpartial relieves you of the burden of manually sketching and hammering in all the mundane and repetitive line items. Your productivity will skyrocket as you finally have the time to thoughtfully adjust/estimate in the way you always knew you could, but never had the time. Our computer vision powered deliverables are designed to do ~80% of the heavy lifting for you, the remainder is where you, the human get to show these machines why organic life forms are still relevant in claims. #RaceWithTheMachines</p></div></div></div>
                         <ReactCompareImage leftImage={leftImage} leftImageLabel="Post-Mitigration" rightImage={rightImage} rightImageLabel="Pre-Mitigration" sliderLineColor="#3ac280" hover/>;
                                         </div>
                                         </div>
                             <div className="try_now_btn"><a href="/order"><button className="btn">Try Today</button></a></div>
                             </div>
    )
}

export default Miigation
