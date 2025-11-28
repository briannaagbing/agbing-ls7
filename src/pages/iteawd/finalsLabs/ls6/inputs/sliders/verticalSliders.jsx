import { Stack } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider } from '../../styles/inputsStyles/sliderStyles';

function getAriaValueText(value) {
  return `${value}°C`;
}

const marks = [
  {
    value: 0,
    label: '0°C',
  },
  {
    value: 20,
    label: '20°C',
  },
  {
    value: 37,
    label: '37°C',
  },
  {
    value: 100,
    label: '100°C',
  },
];

export default function VerticalSlider() {
  return (
    <ComponentWrapper title="Vertical Sliders">
      <Stack sx={{ height: 300 }} spacing={1} direction="row">
        <StyledSlider
          aria-label="Temperature"
          orientation="vertical"
          getAriaValueText={getAriaValueText}
          valueLabelDisplay="auto"
          defaultValue={30}
        />
        <StyledSlider
          aria-label="Temperature"
          orientation="vertical"
          defaultValue={30}
          valueLabelDisplay="auto"
          disabled
        />
        <StyledSlider
          getAriaLabel={() => 'Temperature'}
          orientation="vertical"
          getAriaValueText={getAriaValueText}
          defaultValue={[20, 37]}
          valueLabelDisplay="auto"
          marks={marks}
        />
      </Stack>
    </ComponentWrapper>
  );
}