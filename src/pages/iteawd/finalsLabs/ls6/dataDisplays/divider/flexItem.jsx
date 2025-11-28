import { Box, Divider } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';

import { ComponentWrapper } from '../../styles/commonStyles';

export default function FlexDivider() {
  return (
    <ComponentWrapper title="Flex Item Divider">
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1,
          },
        }}
      >
        <FormatBoldIcon />
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatItalicIcon />
      </Box>
    </ComponentWrapper>
  );
}
