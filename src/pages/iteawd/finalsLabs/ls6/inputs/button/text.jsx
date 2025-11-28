import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function TextButtons() {
  return (
    <ComponentWrapper title="Text Buttons">
      <ButtonContainer>
        <StyledButton>Primary</StyledButton>
        <StyledButton disabled>Disabled</StyledButton>
        <StyledButton href="#text-buttons">Link</StyledButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
