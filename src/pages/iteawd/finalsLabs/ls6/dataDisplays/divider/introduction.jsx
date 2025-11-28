import { Box, Card, Chip, Stack, Divider, Typography } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';

export default function IntroDivider() {
  return (
    <ComponentWrapper title="Divider Introduction">
      <Card variant="outlined" sx={{ maxWidth: 360 }}>
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            sx={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Toothbrush
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              $4.50
            </Typography>
          </Stack>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
            just down the hall.
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Typography gutterBottom variant="body2">
            Select type
          </Typography>
          <Stack direction="row" spacing={1}>
            <Chip color="primary" label="Soft" size="small" />
            <Chip label="Medium" size="small" />
            <Chip label="Hard" size="small" />
          </Stack>
        </Box>
      </Card>
    </ComponentWrapper>
  );
}
