import { Box } from '@mui/material';
import Rating from '@mui/material/Rating';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { ComponentWrapper } from '../../styles/commonStyles';
import { RatingContainer } from '../../styles/inputsStyles/ratingStyles';

const StyledRatingLocal = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#ff6d75',
  },
  '& .MuiRating-iconHover': {
    color: '#ff3d47',
  },
});

export default function CustomizedRating() {
  return (
    <ComponentWrapper title="Customized Rating">
      <RatingContainer>
        <Box display="flex" flexDirection="column" gap={2} width="100%">
          <Box>
            <Typography component="legend">Custom icon and color</Typography>
            <StyledRatingLocal
              name="customized-color"
              defaultValue={2}
              getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
              precision={0.5}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
          </Box>
          <Box>
            <Typography component="legend">10 stars</Typography>
            <Rating name="customized-10" defaultValue={2} max={10} />
          </Box>
        </Box>
      </RatingContainer>
    </ComponentWrapper>
  );
}
