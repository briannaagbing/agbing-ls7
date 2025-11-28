import * as React from 'react';

import MuiInput from '@mui/material/Input';
import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';
import VolumeUp from '@mui/icons-material/VolumeUp';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

const Input = styled(MuiInput)`
  width: 42px;
`;

export default function InputSlider() {
  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? 0 : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 100) {
      setValue(100);
    }
  };

  return (
    <ComponentWrapper title="Slider with Input Field">
      <SliderContainer sx={{ width: 250 }}>
        <Typography id="input-slider" gutterBottom>
          Volume
        </Typography>
        <Grid container spacing={2} sx={{ alignItems: 'center' }}>
          <Grid>
            <VolumeUp />
          </Grid>
          <Grid size="grow">
            <StyledSlider
              value={typeof value === 'number' ? value : 0}
              onChange={handleSliderChange}
              aria-labelledby="input-slider"
            />
          </Grid>
          <Grid>
            <Input
              value={value}
              size="small"
              onChange={handleInputChange}
              onBlur={handleBlur}
              inputProps={{
                step: 10,
                min: 0,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }}
            />
          </Grid>
        </Grid>
      </SliderContainer>
    </ComponentWrapper>
  );
}
