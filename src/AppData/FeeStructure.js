import React from "react";
import Slider from '@material-ui/core/Slider';
import { withStyles} from '@material-ui/core/styles';

const FeeStructure = () => {

  const PrettoSlider = withStyles({
    root: {
      color: '#52af77',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
      color: '#0a5169'
    },
    rail: {
      height: 10,
      borderRadius: 4,
    },
  })(Slider);

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
      
  return (
    <div id="Fee-Structure">
      <div className="mpartial_section css-1jnmlvi-WaterFall">
        <div className="container">
          <div className="title center">
            <div className="row">
              <div className="col">
                <h2 className="section_title_text">Waterfall Fee Structure</h2>
              </div>
            </div>
          </div>
       <PrettoSlider valueLabelDisplay="on" aria-label="pretto slider" defaultValue={20} 
        marks={marks}
        />
          <p className="section_title_description css-ulgnwk-WaterFall">
            Drag the slider around based on what you think it will cost to
            repair the property. <br />
            Move forward based on the estimated fee structure below.
          </p>
          <div className="partial_fee_btn">
            <i className="info_popup">i</i>
            <label>6.40%</label>
            <span>mpartial Fee</span>
          </div>
          <p className="waterfall_info_text">[$750 Minimum]</p>
        </div>
      </div>
    </div>
  );
};

export default FeeStructure;
