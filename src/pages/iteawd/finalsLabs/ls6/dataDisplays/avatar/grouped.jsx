import { Avatar } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatarGroup } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function GroupAvatars() {
  return (
    <ComponentWrapper title="Grouped Avatars">
      <StyledAvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </StyledAvatarGroup>
    </ComponentWrapper>
  );
}
