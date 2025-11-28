import { styled } from '@mui/material/styles';
import { Box, Checkbox, FormControlLabel } from '@mui/material';

export const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
  '&.Mui-checked': {
    animation: 'pulse 0.3s ease',
  },
  '@keyframes pulse': {
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

export const CheckboxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1.5),
}));

export const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  margin: 0,
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
