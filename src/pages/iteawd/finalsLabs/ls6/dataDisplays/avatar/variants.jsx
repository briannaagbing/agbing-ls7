import { Stack } from '@mui/material';
import { green, deepOrange } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatar } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function VariantAvatars() {
  return (
    <ComponentWrapper title="Avatar Variants">
      <Stack direction="row" spacing={2}>
        <StyledAvatar sx={{ bgcolor: deepOrange[500] }} variant="square">
          N
        </StyledAvatar>
        <StyledAvatar sx={{ bgcolor: green[500] }} variant="rounded">
          <AssignmentIcon />
        </StyledAvatar>
      </Stack>
    </ComponentWrapper>
  );
}
