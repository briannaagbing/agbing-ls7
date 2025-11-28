import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

function valuetext(value) {
  return `${value}°C`;
}

export default function ColorSlider() {
  return (
    <ComponentWrapper title="Color Slider">
      <SliderContainer sx={{ width: 300 }}>
        <StyledSlider
          aria-label="Temperature"
          defaultValue={30}
          getAriaValueText={valuetext}
          color="secondary"
        />
      </SliderContainer>
    </ComponentWrapper>
  );
}
