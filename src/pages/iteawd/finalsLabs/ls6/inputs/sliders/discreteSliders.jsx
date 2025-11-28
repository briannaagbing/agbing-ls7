import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <ComponentWrapper title="Discrete Slider">
      <SliderContainer sx={{ width: 300 }}>
        <StyledSlider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          valueLabelDisplay="auto"
          shiftStep={30}
          step={10}
          marks
          min={10}
          max={110}
        />
        <StyledSlider defaultValue={30} step={10} marks min={10} max={110} disabled />
      </SliderContainer>
    </ComponentWrapper>
  );
}
