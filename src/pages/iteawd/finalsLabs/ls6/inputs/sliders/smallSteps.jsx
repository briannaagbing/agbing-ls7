import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSliderSteps() {
  return (
    <ComponentWrapper title="Small Steps Slider">
      <SliderContainer sx={{ width: 300 }}>
        <StyledSlider
          aria-label="Small steps"
          defaultValue={0.00000005}
          getAriaValueText={valuetext}
          step={0.00000001}
          marks
          min={-0.00000005}
          max={0.0000001}
          valueLabelDisplay="auto"
        />
      </SliderContainer>
    </ComponentWrapper>
  );
}
