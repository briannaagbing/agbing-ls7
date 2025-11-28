import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const StyledTypography = styled(Typography)(({ theme }) => ({
  transition: 'color 0.2s ease',
}));

export const TypographyContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
}));

export const TypographySection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(0, 1, 1, 0),
}));
