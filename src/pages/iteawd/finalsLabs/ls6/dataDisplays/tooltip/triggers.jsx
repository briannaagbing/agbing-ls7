import * as React from 'react';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function TriggersTooltips() {
  const [open, setOpen] = React.useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };

  return (
    <ComponentWrapper title="Tooltip Triggers">
      <Grid container spacing={2} sx={{ justifyContent: 'center' }}>
        <Grid item>
          <StyledTooltip disableFocusListener title="Add">
            <Button>Hover or touch</Button>
          </StyledTooltip>
        </Grid>
        <Grid item>
          <StyledTooltip disableHoverListener title="Add">
            <Button>Focus or touch</Button>
          </StyledTooltip>
        </Grid>
        <Grid item>
          <StyledTooltip disableFocusListener disableTouchListener title="Add">
            <Button>Hover</Button>
          </StyledTooltip>
        </Grid>
        <Grid item>
          <ClickAwayListener onClickAway={handleTooltipClose}>
            <div>
              <StyledTooltip
                onClose={handleTooltipClose}
                open={open}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="Add"
                slotProps={{
                  popper: {
                    disablePortal: true,
                  },
                }}
              >
                <Button onClick={handleTooltipOpen}>Click</Button>
              </StyledTooltip>
            </div>
          </ClickAwayListener>
        </Grid>
      </Grid>
    </ComponentWrapper>
  );
}
