import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function OutlinedButtons() {
  return (
    <ComponentWrapper title="Outlined Buttons">
      <ButtonContainer>
        <StyledButton variant="outlined">Primary</StyledButton>
        <StyledButton variant="outlined" disabled>
          Disabled
        </StyledButton>
        <StyledButton variant="outlined" href="#outlined-buttons">
          Link
        </StyledButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
