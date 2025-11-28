import MailIcon from '@mui/icons-material/Mail';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledBadge, BadgeContainer } from '../../styles/dataDisplaysStyles/badgeStyles';

export default function SimpleBadge() {
  return (
    <ComponentWrapper title="Basic Badge">
      <BadgeContainer>
        <StyledBadge badgeContent={4} color="primary">
          <MailIcon color="action" sx={{ fontSize: 32 }} />
        </StyledBadge>
        <StyledBadge badgeContent={10} color="secondary">
          <MailIcon color="action" sx={{ fontSize: 32 }} />
        </StyledBadge>
        <StyledBadge badgeContent={99} color="error">
          <MailIcon color="action" sx={{ fontSize: 32 }} />
        </StyledBadge>
      </BadgeContainer>
    </ComponentWrapper>
  );
}
