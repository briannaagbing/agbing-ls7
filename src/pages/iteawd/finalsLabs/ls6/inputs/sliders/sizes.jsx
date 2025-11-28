import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

export default function SliderSizes() {
  return (
    <ComponentWrapper title="Slider Sizes">
      <SliderContainer sx={{ width: 300 }}>
        <StyledSlider
          size="small"
          defaultValue={70}
          aria-label="Small"
          valueLabelDisplay="auto"
        />
        <StyledSlider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      </SliderContainer>
    </ComponentWrapper>
  );
}
