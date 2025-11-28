import * as React from 'react';

import { Stack } from '@mui/material';
import VolumeUp from '@mui/icons-material/VolumeUp';
import VolumeDown from '@mui/icons-material/VolumeDown';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

export default function ContinuousSlider() {
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ComponentWrapper title="Continuous Slider">
      <SliderContainer sx={{ width: 200 }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center', mb: 1 }}>
          <VolumeDown />
          <StyledSlider aria-label="Volume" value={value} onChange={handleChange} />
          <VolumeUp />
        </Stack>
        <StyledSlider disabled defaultValue={30} aria-label="Disabled slider" />
      </SliderContainer>
    </ComponentWrapper>
  );
}
