import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function BasicButtons() {
  return (
    <ComponentWrapper title="Basic Buttons">
      <ButtonContainer>
        <StyledButton variant="text">Text</StyledButton>
        <StyledButton variant="contained">Contained</StyledButton>
        <StyledButton variant="outlined">Outlined</StyledButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}