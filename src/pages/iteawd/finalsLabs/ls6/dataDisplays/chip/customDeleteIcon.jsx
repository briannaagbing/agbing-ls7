import { Stack } from '@mui/material';
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function CustomDeleteIconChips() {
  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  return (
    <ComponentWrapper title="Custom Delete Icon Chips">
      <Stack direction="row" spacing={1}>
        <StyledChip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DoneIcon />}
        />
        <StyledChip
          label="Custom delete icon"
          onClick={handleClick}
          onDelete={handleDelete}
          deleteIcon={<DeleteIcon />}
          variant="outlined"
        />
      </Stack>
    </ComponentWrapper>
  );
}
