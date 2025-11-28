import Button from '@mui/material/Button';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function DisabledTooltips() {
  return (
    <ComponentWrapper title="Disabled Elements Tooltips">
      <StyledTooltip title="You don't have permission to do this">
        <span>
          <Button disabled>A Disabled Button</Button>
        </span>
      </StyledTooltip>
    </ComponentWrapper>
  );
}
