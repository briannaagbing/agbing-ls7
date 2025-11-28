import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton } from '../../styles/inputsStyles/buttonStyles';
import { StyledButtonGroup, ButtonGroupContainer } from '../../styles/inputsStyles/buttonGroupStyles';

export default function VariantButtonGroup() {
  return (
    <ComponentWrapper title="Button Group Variants">
      <ButtonGroupContainer>
        <Box display="flex" flexDirection="column" alignItems="center" gap={2} width="100%">
          <StyledButtonGroup variant="outlined" aria-label="Basic button group">
            <StyledButton>One</StyledButton>
            <StyledButton>Two</StyledButton>
            <StyledButton>Three</StyledButton>
          </StyledButtonGroup>
          <StyledButtonGroup variant="text" aria-label="Basic button group">
            <StyledButton>One</StyledButton>
            <StyledButton>Two</StyledButton>
            <StyledButton>Three</StyledButton>
          </StyledButtonGroup>
        </Box>
      </ButtonGroupContainer>
    </ComponentWrapper>
  );
}
