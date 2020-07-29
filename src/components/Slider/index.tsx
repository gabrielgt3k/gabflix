import React from 'react';
import SlickSlider from 'react-slick';

import { Container } from './styles';

const Slider: React.FC = ({ children }) => {
  return (
    <Container>
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
