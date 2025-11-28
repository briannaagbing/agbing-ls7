import * as React from 'react';

import { Box, Typography } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

const MAX = 100;
const MIN = 0;
const marks = [
  {
    value: MIN,
    label: '',
  },
  {
    value: MAX,
    label: '',
  },
];

export default function CustomMarks() {
  const [val, setVal] = React.useState(MIN);
  const handleChange = (_, newValue) => {
    setVal(newValue);
  };

  return (
    <ComponentWrapper title="Marks Placement Slider">
      <SliderContainer sx={{ width: 250 }}>
        <StyledSlider
          marks={marks}
          step={10}
          value={val}
          valueLabelDisplay="auto"
          min={MIN}
          max={MAX}
          onChange={handleChange}
        />
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="body2"
            onClick={() => setVal(MIN)}
            sx={{ cursor: 'pointer' }}
          >
            {MIN} min
          </Typography>
          <Typography
            variant="body2"
            onClick={() => setVal(MAX)}
            sx={{ cursor: 'pointer' }}
          >
            {MAX} max
          </Typography>
        </Box>
      </SliderContainer>
    </ComponentWrapper>
  );
}
