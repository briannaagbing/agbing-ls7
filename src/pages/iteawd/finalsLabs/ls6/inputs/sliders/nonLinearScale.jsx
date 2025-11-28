import * as React from 'react';

import { Typography } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

function valueLabelFormat(value) {
  const units = ['KB', 'MB', 'GB', 'TB'];

  let unitIndex = 0;
  let scaledValue = value;

  while (scaledValue >= 1024 && unitIndex < units.length - 1) {
    unitIndex += 1;
    scaledValue /= 1024;
  }

  return `${scaledValue} ${units[unitIndex]}`;
}

function calculateValue(value) {
  return 2 ** value;
}

export default function NonLinearSlider() {
  const [value, setValue] = React.useState(10);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ComponentWrapper title="Non-Linear Scale Slider">
      <SliderContainer sx={{ width: 250 }}>
        <Typography id="non-linear-slider" gutterBottom>
          Storage: {valueLabelFormat(calculateValue(value))}
        </Typography>
        <StyledSlider
          value={value}
          min={5}
          step={1}
          max={30}
          scale={calculateValue}
          getAriaValueText={valueLabelFormat}
          valueLabelFormat={valueLabelFormat}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="non-linear-slider"
        />
      </SliderContainer>
    </ComponentWrapper>
  );
}
