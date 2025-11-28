import Button from '@mui/material/Button';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function DelayTooltips() {
  return (
    <ComponentWrapper title="Showing and Hiding Tooltips">
      <StyledTooltip title="Add" enterDelay={500} leaveDelay={200}>
        <Button>[500ms, 200ms]</Button>
      </StyledTooltip>
    </ComponentWrapper>
  );
}
