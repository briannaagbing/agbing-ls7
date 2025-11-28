import { Box, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDivider = styled(Divider)(({ theme }) => ({
  borderWidth: '1.5px',
  borderColor: theme.palette.divider,
  '&.MuiDivider-withChildren': {
    '&::before, &::after': {
      borderColor: theme.palette.primary.main,
      borderWidth: '2px',
    },
  },
}));

export const DividerContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export const DividerContent = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
}));
