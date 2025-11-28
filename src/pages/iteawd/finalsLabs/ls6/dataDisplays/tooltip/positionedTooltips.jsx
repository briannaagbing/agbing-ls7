import { Box, Grid, Button } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function PositionedTooltips() {
  return (
    <ComponentWrapper title="Positioned Tooltips">
      <Box sx={{ width: 500 }}>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid>
            <StyledTooltip title="Add" placement="top-start">
              <Button>top-start</Button>
            </StyledTooltip>
            <StyledTooltip title="Add" placement="top">
              <Button>top</Button>
            </StyledTooltip>
            <StyledTooltip title="Add" placement="top-end">
              <Button>top-end</Button>
            </StyledTooltip>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid size={6}>
            <StyledTooltip title="Add" placement="left-start">
              <Button>left-start</Button>
            </StyledTooltip>
            <br />
            <StyledTooltip title="Add" placement="left">
              <Button>left</Button>
            </StyledTooltip>
            <br />
            <StyledTooltip title="Add" placement="left-end">
              <Button>left-end</Button>
            </StyledTooltip>
          </Grid>
          <Grid container direction="column" sx={{ alignItems: 'flex-end' }} size={6}>
            <Grid>
              <StyledTooltip title="Add" placement="right-start">
                <Button>right-start</Button>
              </StyledTooltip>
            </Grid>
            <Grid>
              <StyledTooltip title="Add" placement="right">
                <Button>right</Button>
              </StyledTooltip>
            </Grid>
            <Grid>
              <StyledTooltip title="Add" placement="right-end">
                <Button>right-end</Button>
              </StyledTooltip>
            </Grid>
          </Grid>
        </Grid>
        <Grid container sx={{ justifyContent: 'center' }}>
          <Grid>
            <StyledTooltip title="Add" placement="bottom-start">
              <Button>bottom-start</Button>
            </StyledTooltip>
            <StyledTooltip title="Add" placement="bottom">
              <Button>bottom</Button>
            </StyledTooltip>
            <StyledTooltip title="Add" placement="bottom-end">
              <Button>bottom-end</Button>
            </StyledTooltip>
          </Grid>
        </Grid>
      </Box>
    </ComponentWrapper>
  );
}
