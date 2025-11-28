import { styled } from '@mui/material/styles';
import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material';

export const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.2s ease',
  '&.Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  '& .MuiToggleButton-root': {
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:first-of-type)': {
      marginLeft: 0,
      borderLeft: `1px solid ${theme.palette.divider}`,
    },
  },
}));

export const ToggleButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  alignItems: 'center',
}));
