import Button from '@mui/material/Button';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function TooltipOffset() {
  return (
    <ComponentWrapper title="Distance From Anchor">
      <StyledTooltip
        title="Add"
        slotProps={{
          popper: {
            modifiers: [
              {
                name: 'offset',
                options: {
                  offset: [0, -14],
                },
              },
            ],
          },
        }}
      >
        <Button>Offset</Button>
      </StyledTooltip>
    </ComponentWrapper>
  );
}
