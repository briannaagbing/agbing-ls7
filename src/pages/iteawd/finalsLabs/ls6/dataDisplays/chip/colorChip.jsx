import { Stack } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function ColorChips() {
  return (
    <ComponentWrapper title="Color Chips">
      <Stack spacing={1} sx={{ alignItems: 'center' }}>
        <Stack direction="row" spacing={1}>
          <StyledChip label="primary" color="primary" />
          <StyledChip label="success" color="success" />
        </Stack>
        <Stack direction="row" spacing={1}>
          <StyledChip label="primary" color="primary" variant="outlined" />
          <StyledChip label="success" color="success" variant="outlined" />
        </Stack>
      </Stack>
    </ComponentWrapper>
  );
}
