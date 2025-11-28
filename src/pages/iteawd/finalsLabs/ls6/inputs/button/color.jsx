import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function ColorButtons() {
  return (
    <ComponentWrapper title="Color Buttons">
      <ButtonContainer>
        <StyledButton color="secondary">Secondary</StyledButton>
        <StyledButton variant="contained" color="success">
          Success
        </StyledButton>
        <StyledButton variant="outlined" color="error">
          Error
        </StyledButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
