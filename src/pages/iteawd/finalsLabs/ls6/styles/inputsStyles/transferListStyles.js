import { Box, List } from '@mui/material';
import { styled } from '@mui/material/styles';

export const TransferListContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
}));

export const StyledList = styled(List)(({ theme }) => ({
  width: 250,
  height: 300,
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.spacing(1),
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.default,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: '4px',
  },
}));

export const TransferListButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1),
  alignItems: 'center',
  justifyContent: 'center',
}));
