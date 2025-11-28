import { styled } from '@mui/material/styles';
import { Box, Paper, Typography } from '@mui/material';

// Common container with header for all components
export const ComponentContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)',
    transform: 'translateY(-2px)',
  },
}));

// Header title for each component
export const ComponentHeader = styled(Typography)(({ theme }) => ({
  fontSize: '1.75rem',
  fontWeight: 700,
  marginBottom: theme.spacing(3),
  color: theme.palette.primary.main,
  borderBottom: `3px solid ${theme.palette.primary.main}`,
  paddingBottom: theme.spacing(1.5),
  letterSpacing: '0.5px',
  textTransform: 'uppercase',
}));

// Content wrapper for component body
export const ContentWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
  paddingTop: theme.spacing(2),
}));

// Section divider
export const SectionDivider = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '2px',
  background: `linear-gradient(90deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
  margin: theme.spacing(3, 0),
  borderRadius: theme.spacing(1),
}));

// Styled wrapper for demo content
export const DemoWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
  backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.02)',
  borderRadius: theme.spacing(1.5),
  border: `1px solid ${theme.palette.divider}`,
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '150px',
}));

// Component wrapper with title prop
export const ComponentWrapper = ({ title, children, ...props }) => (
  <ComponentContainer elevation={0} {...props}>
    <ComponentHeader variant="h4">{title}</ComponentHeader>
    <ContentWrapper>
      <DemoWrapper>{children}</DemoWrapper>
    </ContentWrapper>
  </ComponentContainer>
);
