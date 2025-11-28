import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton } from '../../styles/inputsStyles/buttonStyles';
import { StyledButtonGroup, ButtonGroupContainer } from '../../styles/inputsStyles/buttonGroupStyles';

export default function BasicButtonGroup() {
  return (
    <ComponentWrapper title="Basic Button Group">
      <ButtonGroupContainer>
        <StyledButtonGroup variant="contained" aria-label="Basic button group">
          <StyledButton>One</StyledButton>
          <StyledButton>Two</StyledButton>
          <StyledButton>Three</StyledButton>
        </StyledButtonGroup>
      </ButtonGroupContainer>
    </ComponentWrapper>
  );
}
