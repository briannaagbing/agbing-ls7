import { Fab, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledFab = styled(Fab)(({ theme }) => ({
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'scale(1.1) rotate(5deg)',
    boxShadow: '0 6px 16px rgba(0, 0, 0, 0.2)',
  },
  '&:active': {
    transform: 'scale(0.95)',
  },
}));

export const FabContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}));
