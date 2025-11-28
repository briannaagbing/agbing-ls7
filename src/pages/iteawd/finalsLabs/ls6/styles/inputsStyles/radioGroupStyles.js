import { styled } from '@mui/material/styles';
import { Box, Radio, RadioGroup, FormControlLabel } from '@mui/material';

export const StyledRadio = styled(Radio)(({ theme }) => ({
  '&.Mui-checked': {
    animation: 'radioScale 0.3s ease',
  },
  '@keyframes radioScale': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(1.2)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
}));

export const StyledRadioGroup = styled(RadioGroup)(({ theme }) => ({
  gap: theme.spacing(1),
}));

export const RadioContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const StyledRadioLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  transition: 'all 0.2s ease',
  border: `1px solid transparent`,
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
    borderColor: theme.palette.primary.main,
  },
}));
