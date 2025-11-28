import { Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledBadge } from '../../styles/dataDisplaysStyles/badgeStyles';

export default function BadgeMax() {
  return (
    <ComponentWrapper title="Maximum Value Badge">
      <Stack spacing={4} direction="row" sx={{ color: 'action.active' }}>
        <StyledBadge color="secondary" badgeContent={99}>
          <MailIcon />
        </StyledBadge>
        <StyledBadge color="secondary" badgeContent={100}>
          <MailIcon />
        </StyledBadge>
        <StyledBadge color="secondary" badgeContent={1000} max={999}>
          <MailIcon />
        </StyledBadge>
      </Stack>
    </ComponentWrapper>
  );
}
