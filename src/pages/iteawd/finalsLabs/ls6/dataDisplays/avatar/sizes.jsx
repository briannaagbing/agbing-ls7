import { Stack } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatar } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function SizeAvatars() {
  return (
    <ComponentWrapper title="Avatar Sizes">
      <Stack direction="row" spacing={2}>
        <StyledAvatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 24, height: 24 }}
        />
        <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <StyledAvatar
          alt="Remy Sharp"
          src="/static/images/avatar/1.jpg"
          sx={{ width: 56, height: 56 }}
        />
      </Stack>
    </ComponentWrapper>
  );
}
