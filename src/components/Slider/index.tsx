/* eslint-disable react/prop-types */
import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './styles';

interface ArrowProps {
  color: string;
}

const Slider: React.FC<ArrowProps> = ({ children, color }) => {
  return (
    <Container color={color}>
      <SlickSlider
        {...{
          dots: true,
          infinite: true,
          speed: 300,
          centerMode: false,
          variableWidth: true,
          adaptiveHeight: true,
        }}
      >
        {children}
      </SlickSlider>
    </Container>
  );
};

export default Slider;
