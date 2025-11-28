import Fade from '@mui/material/Fade';
import Zoom from '@mui/material/Zoom';
import Button from '@mui/material/Button';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip, TooltipContainer } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function TransitionsTooltips() {
  return (
    <ComponentWrapper title="Tooltip Transitions">
      <TooltipContainer>
        <StyledTooltip title="Add">
          <Button>Grow</Button>
        </StyledTooltip>
        <StyledTooltip
          title="Add"
          slots={{
            transition: Fade,
          }}
          slotProps={{
            transition: { timeout: 600 },
          }}
        >
          <Button>Fade</Button>
        </StyledTooltip>
        <StyledTooltip
          title="Add"
          slots={{
            transition: Zoom,
          }}
        >
          <Button>Zoom</Button>
        </StyledTooltip>
      </TooltipContainer>
    </ComponentWrapper>
  );
}
