import { Box, Typography } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function Checkboxes() {
  return (
    <ComponentWrapper title="Basic Checkboxes">
      <CheckboxContainer>
        <Box display="flex" alignItems="center" gap={1}>
          <StyledCheckbox {...label} defaultChecked />
          <Typography>Default Checked</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <StyledCheckbox {...label} />
          <Typography>Unchecked</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <StyledCheckbox {...label} disabled />
          <Typography>Disabled</Typography>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          <StyledCheckbox {...label} disabled checked />
          <Typography>Disabled Checked</Typography>
        </Box>
      </CheckboxContainer>
    </ComponentWrapper>
  );
}