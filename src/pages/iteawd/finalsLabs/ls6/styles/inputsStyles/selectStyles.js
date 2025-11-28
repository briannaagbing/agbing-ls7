import { styled } from '@mui/material/styles';
import { Box, Select, FormControl } from '@mui/material';

export const StyledSelect = styled(Select)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.main,
    },
  },
  '&.Mui-focused': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderWidth: '2px',
    },
  },
}));

export const StyledFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: 200,
  '& .MuiInputLabel-root': {
    fontWeight: 500,
  },
}));

export const SelectContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: 400,
}));
