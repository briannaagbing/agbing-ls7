import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { Box, Divider, dividerClasses } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

import { ComponentWrapper } from '../../styles/commonStyles';

export default function VerticalDividers() {
  return (
    <ComponentWrapper title="Divider Orientation">
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 1,
          bgcolor: 'background.paper',
          color: 'text.secondary',
          '& svg': {
            m: 1,
          },
          [`& .${dividerClasses.root}`]: {
            mx: 0.5,
          },
        }}
      >
        <FormatAlignLeftIcon />
        <FormatAlignCenterIcon />
        <FormatAlignRightIcon />
        <Divider orientation="vertical" flexItem />
        <FormatBoldIcon />
      </Box>
    </ComponentWrapper>
  );
}
