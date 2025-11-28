import { styled } from '@mui/material/styles';
import { Box, Avatar, AvatarGroup } from '@mui/material';

export const StyledAvatar = styled(Avatar)(({ theme }) => ({
  transition: 'all 0.3s ease',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  '&:hover': {
    transform: 'scale(1.1)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  },
}));

export const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  '& .MuiAvatar-root': {
    border: `2px solid ${theme.palette.background.paper}`,
    transition: 'all 0.2s ease',
    '&:hover': {
      zIndex: 1000,
      transform: 'scale(1.2)',
    },
  },
}));

export const AvatarContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
}));
