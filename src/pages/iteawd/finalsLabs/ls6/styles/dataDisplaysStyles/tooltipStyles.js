import { Box, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledTooltip = styled(Tooltip)(({ theme }) => ({
  '& .MuiTooltip-tooltip': {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    fontSize: '0.875rem',
    fontWeight: 500,
    padding: theme.spacing(1.5, 2),
    borderRadius: theme.spacing(1),
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  '& .MuiTooltip-arrow': {
    color: theme.palette.grey[900],
  },
}));

export const TooltipContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const TooltipDemo = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.default,
  borderRadius: theme.spacing(1),
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));
