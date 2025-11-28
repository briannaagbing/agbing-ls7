import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton } from '../../styles/inputsStyles/buttonStyles';
import { StyledButtonGroup, ButtonGroupContainer } from '../../styles/inputsStyles/buttonGroupStyles';

const buttons = [
  <StyledButton key="one">One</StyledButton>,
  <StyledButton key="two">Two</StyledButton>,
  <StyledButton key="three">Three</StyledButton>,
];

export default function GroupOrientation() {
  return (
    <ComponentWrapper title="Vertical Button Group">
      <ButtonGroupContainer>
        <Box display="flex" gap={2} flexWrap="wrap">
          <StyledButtonGroup orientation="vertical" aria-label="Vertical button group">
            {buttons}
          </StyledButtonGroup>
          <StyledButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="contained"
          >
            {buttons}
          </StyledButtonGroup>
          <StyledButtonGroup
            orientation="vertical"
            aria-label="Vertical button group"
            variant="text"
          >
            {buttons}
          </StyledButtonGroup>
        </Box>
      </ButtonGroupContainer>
    </ComponentWrapper>
  );
}
