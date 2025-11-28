import { Box } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledBadge } from '../../styles/dataDisplaysStyles/badgeStyles';

export default function DotBadge() {
  return (
    <ComponentWrapper title="Dot Badge">
      <Box sx={{ color: 'action.active' }}>
        <StyledBadge color="secondary" variant="dot">
          <MailIcon />
        </StyledBadge>
      </Box>
    </ComponentWrapper>
  );
}
