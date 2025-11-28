import { Box, Slider } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledSlider = styled(Slider)(({ theme }) => ({
  '& .MuiSlider-thumb': {
    transition: 'all 0.2s ease',
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0 0 0 8px ${theme.palette.primary.main}33`,
    },
    '&.Mui-active': {
      boxShadow: `0 0 0 14px ${theme.palette.primary.main}33`,
    },
  },
  '& .MuiSlider-track': {
    height: 6,
    borderRadius: 3,
  },
  '& .MuiSlider-rail': {
    height: 6,
    borderRadius: 3,
    opacity: 0.3,
  },
  '& .MuiSlider-mark': {
    backgroundColor: theme.palette.background.paper,
    height: 12,
    width: 2,
  },
  '& .MuiSlider-markActive': {
    backgroundColor: 'currentColor',
  },
}));

export const SliderContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: 400,
  padding: theme.spacing(2),
}));
