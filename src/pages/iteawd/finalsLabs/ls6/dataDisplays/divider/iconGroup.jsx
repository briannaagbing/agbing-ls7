import FormatBoldIcon from '@mui/icons-material/FormatBold';
import { Card, Divider, dividerClasses } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';

import { ComponentWrapper } from '../../styles/commonStyles';

export default function VerticalDividerMiddle() {
  return (
    <ComponentWrapper title="Icon Group Divider">
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
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
        <Divider orientation="vertical" variant="middle" flexItem />
        <FormatBoldIcon />
      </Card>
    </ComponentWrapper>
  );
}
