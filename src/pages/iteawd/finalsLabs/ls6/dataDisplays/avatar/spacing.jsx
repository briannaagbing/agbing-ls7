import { Stack, Avatar } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatarGroup } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function Spacing() {
  return (
    <ComponentWrapper title="Avatar Spacing">
      <Stack spacing={4}>
        <StyledAvatarGroup spacing="medium">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </StyledAvatarGroup>
        <StyledAvatarGroup spacing="small">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </StyledAvatarGroup>
        <StyledAvatarGroup spacing={24}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </StyledAvatarGroup>
      </Stack>
    </ComponentWrapper>
  );
}
