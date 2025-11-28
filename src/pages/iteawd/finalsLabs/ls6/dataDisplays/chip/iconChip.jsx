import { Stack } from '@mui/material';
import FaceIcon from '@mui/icons-material/Face';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function IconChips() {
  return (
    <ComponentWrapper title="Icon Chips">
      <Stack direction="row" spacing={1}>
        <StyledChip icon={<FaceIcon />} label="With Icon" />
        <StyledChip icon={<FaceIcon />} label="With Icon" variant="outlined" />
      </Stack>
    </ComponentWrapper>
  );
}
