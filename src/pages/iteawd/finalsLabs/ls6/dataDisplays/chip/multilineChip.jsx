import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip } from '../../styles/dataDisplaysStyles/chipStyles';

export default function MultilineChips() {
  return (
    <ComponentWrapper title="Multiline Chips">
      <Box sx={{ width: 100 }}>
        <StyledChip
          sx={{
            height: 'auto',
            '& .MuiChip-label': {
              display: 'block',
              whiteSpace: 'normal',
            },
          }}
          label="This is a chip that has multiple lines."
        />
      </Box>
    </ComponentWrapper>
  );
}
