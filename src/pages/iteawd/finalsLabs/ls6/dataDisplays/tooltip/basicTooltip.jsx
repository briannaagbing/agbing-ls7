import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip } from '../../styles/dataDisplaysStyles/tooltipStyles';

export default function BasicTooltip() {
  return (
    <ComponentWrapper title="Basic Tooltip">
      <StyledTooltip title="Delete">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </StyledTooltip>
    </ComponentWrapper>
  );
}
