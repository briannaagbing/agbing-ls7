import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

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

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderLabel() {
  return (
    <ComponentWrapper title="Always Visible Label Slider">
      <SliderContainer sx={{ width: 300 }}>
        <StyledSlider
          aria-label="Always visible"
          defaultValue={80}
          getAriaValueText={valuetext}
          step={10}
          marks={marks}
          valueLabelDisplay="on"
        />
      </SliderContainer>
    </ComponentWrapper>
  );
}
