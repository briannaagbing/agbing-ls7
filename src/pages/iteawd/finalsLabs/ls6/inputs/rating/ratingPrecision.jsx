import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRating, RatingContainer } from '../../styles/inputsStyles/ratingStyles';

export default function HalfRating() {
  return (
    <ComponentWrapper title="Rating Precision">
      <RatingContainer>
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledRating name="half-rating" defaultValue={2.5} precision={0.5} />
          <StyledRating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
        </Box>
      </RatingContainer>
    </ComponentWrapper>
  );
}
