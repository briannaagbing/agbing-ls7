import { Stack } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function SizesChips() {
  return (
    <ComponentWrapper title="Chip Sizes">
      <Stack direction="row" spacing={1}>
        <StyledChip label="Small" size="small" />
        <StyledChip label="Small" size="small" variant="outlined" />
      </Stack>
    </ComponentWrapper>
  );
}
