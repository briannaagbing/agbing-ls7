import { Stack } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function BasicChips() {
  return (
    <ComponentWrapper title="Basic Chips">
      <Stack direction="row" spacing={1}>
        <StyledChip label="Chip Filled" />
        <StyledChip label="Chip Outlined" variant="outlined" />
      </Stack>
    </ComponentWrapper>
  );
}
