import { Box, Chip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledChip = styled(Chip)(({ theme }) => ({
  fontWeight: 600,
  transition: 'all 0.2s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
  '& .MuiChip-deleteIcon': {
    transition: 'all 0.2s ease',
    '&:hover': {
      color: theme.palette.error.main,
      transform: 'scale(1.2)',
    },
  },
}));

export const ChipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1.5),
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}));
