import { Stack } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function DeletableChips() {
  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <ComponentWrapper title="Deletable Chips">
      <Stack direction="row" spacing={1}>
        <StyledChip label="Deletable" onDelete={handleDelete} />
        <StyledChip label="Deletable" variant="outlined" onDelete={handleDelete} />
      </Stack>
    </ComponentWrapper>
  );
}
