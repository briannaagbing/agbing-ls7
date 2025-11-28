import Box from '@mui/material/Box';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function FollowCursorTooltips() {
  return (
    <ComponentWrapper title="Follow Cursor Tooltips">
      <StyledTooltip title="You don't have permission to do this" followCursor>
        <Box sx={{ bgcolor: 'text.disabled', color: 'background.paper', p: 2 }}>
          Disabled Action
        </Box>
      </StyledTooltip>
    </ComponentWrapper>
  );
}
