import * as React from 'react';

import AddIcon from '@mui/icons-material/Add';
import MailIcon from '@mui/icons-material/Mail';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Button, Switch, ButtonGroup, FormControlLabel } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledBadge } from '../../styles/dataDisplaysStyles/badgeStyles';

export default function BadgeVisibility() {
  const [count, setCount] = React.useState(1);
  const [invisible, setInvisible] = React.useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <ComponentWrapper title="Badge Visibility">
      <Box
        sx={{
          color: 'action.active',
          display: 'flex',
          flexDirection: 'column',
          '& > *': {
            marginBottom: 2,
          },
          '& .MuiBadge-root': {
            marginRight: 4,
          },
        }}
      >
        <div>
          <StyledBadge color="secondary" badgeContent={count}>
            <MailIcon />
          </StyledBadge>
          <ButtonGroup>
            <Button
              aria-label="reduce"
              onClick={() => {
                setCount(Math.max(count - 1, 0));
              }}
            >
              <RemoveIcon fontSize="small" />
            </Button>
            <Button
              aria-label="increase"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <AddIcon fontSize="small" />
            </Button>
          </ButtonGroup>
        </div>
        <div>
          <StyledBadge color="secondary" variant="dot" invisible={invisible}>
            <MailIcon />
          </StyledBadge>
          <FormControlLabel
            sx={{ color: 'text.primary' }}
            control={<Switch checked={!invisible} onChange={handleBadgeVisibility} />}
            label="Show Badge"
          />
        </div>
      </Box>
    </ComponentWrapper>
  );
}
