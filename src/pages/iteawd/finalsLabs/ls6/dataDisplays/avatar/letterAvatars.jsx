import { Stack } from '@mui/material';
import { deepOrange, deepPurple } from '@mui/material/colors';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatar } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function LetterAvatars() {
  return (
    <ComponentWrapper title="Letter Avatars">
      <Stack direction="row" spacing={2}>
        <StyledAvatar>H</StyledAvatar>
        <StyledAvatar sx={{ bgcolor: deepOrange[500] }}>N</StyledAvatar>
        <StyledAvatar sx={{ bgcolor: deepPurple[500] }}>OP</StyledAvatar>
      </Stack>
    </ComponentWrapper>
  );
}
