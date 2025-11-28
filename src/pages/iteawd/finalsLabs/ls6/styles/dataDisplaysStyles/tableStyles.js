import { styled } from '@mui/material/styles';
import { Box, Table, TableRow, TableCell, TableContainer } from '@mui/material';

export const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  maxHeight: 600,
  '&::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
  },
  '&::-webkit-scrollbar-track': {
    background: theme.palette.background.default,
  },
  '&::-webkit-scrollbar-thumb': {
    background: theme.palette.primary.main,
    borderRadius: '5px',
  },
}));

export const StyledTable = styled(Table)(({ theme }) => ({
  minWidth: 650,
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '0.95rem',
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export const TableWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  overflow: 'auto',
}));
