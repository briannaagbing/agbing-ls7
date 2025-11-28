import { styled } from '@mui/material/styles';
import { Box, Button, ButtonGroup } from '@mui/material';

export const StyledButtonGroup = styled(ButtonGroup)(({ theme }) => ({
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  '& .MuiButton-root': {
    fontWeight: 600,
    textTransform: 'none',
    transition: 'all 0.2s ease',
    '&:hover': {
      transform: 'translateY(-1px)',
    },
  },
}));

export const StyledButtonGroupButton = styled(Button)(({ theme }) => ({
  borderRadius: 0,
  padding: theme.spacing(1, 3),
  fontWeight: 600,
  textTransform: 'none',
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
  '&:active': {
    transform: 'translateY(0)',
  },
}));

export const ButtonGroupContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  alignItems: 'center',
}));
