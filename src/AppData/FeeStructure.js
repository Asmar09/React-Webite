import React from "react";
import Slider from '@material-ui/core/Slider';


const FeeStructure = () => {
    const marks = [
        {
          value: 0,
          label: '$0',
        },
        {
          value: 25,
          label: '$250,000',
        },
        {
            value: 50,
            label: '$500,000',
          },
        {
          value: 75,
          label: '$750,000',
        },
        {
          value: 100,
          label: '$1M',
        },
      ];
      
      function valuetext(value) {
        return `${value}`;
      }
  return (
    <div>
      <div className="mpartial_section css-1jnmlvi-WaterFall">
        <div className="container">
          <div className="title center">
            <div className="row">
              <div className="col">
                <h2 className="section_title_text">Waterfall Fee Structure</h2>
              </div>
            </div>
          </div>
          <Slider
        defaultValue={25}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider-always"
        step={10}
        marks={marks}
        valueLabelDisplay="on"
      />
          <p className="section_title_description css-ulgnwk-WaterFall">
            Drag the slider around based on what you think it will cost to
            repair the property. <br />
            Move forward based on the estimated fee structure below.
          </p>
          <div className="partial_fee_btn">
            <i className="info_popup">i</i>
            <label>7.22%</label>
            <span>mpartial Fee</span>
          </div>
          <p className="waterfall_info_text">[$750 Minimum]</p>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
