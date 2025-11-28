import { Stack } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatar } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function FallbackAvatars() {
  return (
    <ComponentWrapper title="Fallback Avatars">
      <Stack direction="row" spacing={2}>
        <StyledAvatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        >
          B
        </StyledAvatar>
        <StyledAvatar
          sx={{ bgcolor: deepOrange[500] }}
          alt="Remy Sharp"
          src="/broken-image.jpg"
        />
        <StyledAvatar src="/broken-image.jpg" />
      </Stack>
    </ComponentWrapper>
  );
}
