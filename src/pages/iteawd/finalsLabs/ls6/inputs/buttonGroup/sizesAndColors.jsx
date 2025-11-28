import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton } from '../../styles/inputsStyles/buttonStyles';
import { StyledButtonGroup, ButtonGroupContainer } from '../../styles/inputsStyles/buttonGroupStyles';

const buttons = [
  <StyledButton key="one">One</StyledButton>,
  <StyledButton key="two">Two</StyledButton>,
  <StyledButton key="three">Three</StyledButton>,
];

export default function GroupSizesColors() {
  return (
    <ComponentWrapper title="Sizes and Colors - Button Group">
      <ButtonGroupContainer>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} width="100%">
          <StyledButtonGroup size="small" aria-label="Small button group">
            {buttons}
          </StyledButtonGroup>
          <StyledButtonGroup color="secondary" aria-label="Medium-sized button group">
            {buttons}
          </StyledButtonGroup>
          <StyledButtonGroup size="large" aria-label="Large button group">
            {buttons}
          </StyledButtonGroup>
        </Box>
      </ButtonGroupContainer>
    </ComponentWrapper>
  );
}
