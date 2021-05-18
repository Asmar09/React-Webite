import styled from "styled-components";

export const CarouselDataStyle = styled.div`
  .slick-arrow {
    height: 20px;
    width: 20px;
    border-radius: 100px;
  }
  .slick-prev {
    left: -48px !important;
    z-index: 2;
  }
  .slick-next {
    right: 85px !important;
    z-index: 2;
  }
  .slick-next:before {
    background: transparent;
    color: #3ac280;
    font-size: 80%;
  }
  .slick-prev:before {
    background: transparent;
    color: #3ac280;
    font-size: 80%;
  }
  .slick-dots {
    position: absolute;
    top: 900px;
    right: 50%;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: right;
  }
  .slick-dots li {
    margin: 0;
  }
  .slick-dots li button:before {
    font-size: 15px;
  }
  .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #3ac280;
  }

`;
