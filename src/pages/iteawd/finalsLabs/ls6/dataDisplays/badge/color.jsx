import { Stack } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledBadge } from '../../styles/dataDisplaysStyles/badgeStyles';

export default function ColorBadge() {
  return (
    <ComponentWrapper title="Color Badge">
      <Stack spacing={2} direction="row">
        <StyledBadge badgeContent={4} color="secondary">
          <MailIcon color="action" />
        </StyledBadge>
        <StyledBadge badgeContent={4} color="success">
          <MailIcon color="action" />
        </StyledBadge>
      </Stack>
    </ComponentWrapper>
  );
}
