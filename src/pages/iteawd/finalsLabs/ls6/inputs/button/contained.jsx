import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function ContainedButtons() {
  return (
    <ComponentWrapper title="Contained Buttons">
      <ButtonContainer>
        <StyledButton variant="contained">Contained</StyledButton>
        <StyledButton variant="contained" disabled>
          Disabled
        </StyledButton>
        <StyledButton variant="contained" href="#contained-buttons">
          Link
        </StyledButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}