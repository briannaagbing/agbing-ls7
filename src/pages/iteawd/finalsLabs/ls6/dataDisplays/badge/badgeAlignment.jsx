import * as React from 'react';

import { Avatar } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledBadge } from '../../styles/dataDisplaysStyles/badgeStyles';

export default function BadgeWithAvatar() {
  return (
    <ComponentWrapper title="Badge Alignment">
      <StyledBadge
        color="secondary"
        overlap="circular"
        badgeContent={4}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <Avatar alt="Brianna Agbing" src="/static/images/avatar/1.jpg" />
      </StyledBadge>
    </ComponentWrapper>
  );
}
