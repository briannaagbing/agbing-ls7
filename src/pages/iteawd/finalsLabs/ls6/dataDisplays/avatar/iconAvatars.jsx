import { Stack } from '@mui/material';
import { pink, green } from '@mui/material/colors';
import FolderIcon from '@mui/icons-material/Folder';
import PageviewIcon from '@mui/icons-material/Pageview';
import AssignmentIcon from '@mui/icons-material/Assignment';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatar } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function IconAvatars() {
  return (
    <ComponentWrapper title="Icon Avatars">
      <Stack direction="row" spacing={2}>
        <StyledAvatar>
          <FolderIcon />
        </StyledAvatar>
        <StyledAvatar sx={{ bgcolor: pink[500] }}>
          <PageviewIcon />
        </StyledAvatar>
        <StyledAvatar sx={{ bgcolor: green[500] }}>
          <AssignmentIcon />
        </StyledAvatar>
      </Stack>
    </ComponentWrapper>
  );
}
