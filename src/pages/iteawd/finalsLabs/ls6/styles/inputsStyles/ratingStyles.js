import { Box, Rating } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconFilled': {
    color: theme.palette.warning.main,
    filter: 'drop-shadow(0 2px 4px rgba(255, 152, 0, 0.3))',
  },
  '& .MuiRating-iconHover': {
    color: theme.palette.warning.dark,
    transform: 'scale(1.1)',
  },
  '& .MuiRating-icon': {
    transition: 'all 0.2s ease',
  },
}));

export const RatingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
}));
