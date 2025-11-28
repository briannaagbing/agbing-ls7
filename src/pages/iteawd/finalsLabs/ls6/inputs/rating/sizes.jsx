import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRating, RatingContainer } from '../../styles/inputsStyles/ratingStyles';

export default function RatingSize() {
  return (
    <ComponentWrapper title="Rating Sizes">
      <RatingContainer>
        <Box display="flex" flexDirection="column" gap={2}>
          <StyledRating name="size-small" defaultValue={2} size="small" />
          <StyledRating name="size-medium" defaultValue={2} />
          <StyledRating name="size-large" defaultValue={2} size="large" />
        </Box>
      </RatingContainer>
    </ComponentWrapper>
  );
}
