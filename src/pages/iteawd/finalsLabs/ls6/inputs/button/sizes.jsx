import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function ButtonSizes() {
  return (
    <ComponentWrapper title="Button Sizes">
      <ButtonContainer>
        <Box display="flex" flexDirection="column" gap={2} width="100%">
          <Box display="flex" gap={2} flexWrap="wrap">
            <StyledButton size="small">Small</StyledButton>
            <StyledButton size="medium">Medium</StyledButton>
            <StyledButton size="large">Large</StyledButton>
          </Box>
          <Box display="flex" gap={2} flexWrap="wrap">
            <StyledButton variant="outlined" size="small">
              Small
            </StyledButton>
            <StyledButton variant="outlined" size="medium">
              Medium
            </StyledButton>
            <StyledButton variant="outlined" size="large">
              Large
            </StyledButton>
          </Box>
          <Box display="flex" gap={2} flexWrap="wrap">
            <StyledButton variant="contained" size="small">
              Small
            </StyledButton>
            <StyledButton variant="contained" size="medium">
              Medium
            </StyledButton>
            <StyledButton variant="contained" size="large">
              Large
            </StyledButton>
          </Box>
        </Box>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
