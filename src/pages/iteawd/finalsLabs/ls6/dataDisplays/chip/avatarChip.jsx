import { Stack, Avatar } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function AvatarChips() {
  return (
    <ComponentWrapper title="Avatar Chips">
      <Stack direction="row" spacing={1}>
        <StyledChip avatar={<Avatar>M</Avatar>} label="Avatar" />
        <StyledChip
          avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
          label="Avatar"
          variant="outlined"
        />
      </Stack>
    </ComponentWrapper>
  );
}
