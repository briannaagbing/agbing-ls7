import { Box, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    animation: 'ripple 1.2s infinite ease-in-out',
    fontWeight: 700,
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.1)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

export const BadgeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}));
