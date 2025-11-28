import { styled } from '@mui/material/styles';
import { Box, Autocomplete } from '@mui/material';

export const StyledAutocomplete = styled(Autocomplete)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: theme.spacing(1),
    transition: 'all 0.3s ease',
    '&:hover': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
    '&.Mui-focused': {
      '& .MuiOutlinedInput-notchedOutline': {
        borderWidth: '2px',
        borderColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiAutocomplete-tag': {
    borderRadius: theme.spacing(0.5),
    backgroundColor: theme.palette.primary.lighter,
    '& .MuiChip-deleteIcon': {
      color: theme.palette.primary.dark,
      '&:hover': {
        color: theme.palette.error.main,
      },
    },
  },
}));

export const AutocompleteContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  maxWidth: 600,
}));
