import { Stack } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function ClickableChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  return (
    <ComponentWrapper title="Clickable Chips">
      <Stack direction="row" spacing={1}>
        <StyledChip label="Clickable" onClick={handleClick} />
        <StyledChip label="Clickable" variant="outlined" onClick={handleClick} />
      </Stack>
    </ComponentWrapper>
  );
}
