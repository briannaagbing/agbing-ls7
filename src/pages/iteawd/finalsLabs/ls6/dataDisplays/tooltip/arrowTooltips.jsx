import Button from '@mui/material/Button';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function ArrowTooltips() {
  return (
    <ComponentWrapper title="Arrow Tooltips">
      <StyledTooltip title="Add" arrow>
        <Button>Arrow</Button>
      </StyledTooltip>
    </ComponentWrapper>
  );
}
