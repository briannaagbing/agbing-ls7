import * as React from 'react';

import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRating, RatingContainer } from '../../styles/inputsStyles/ratingStyles';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function HoverRating() {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <ComponentWrapper title="Hover Feedback Rating">
      <RatingContainer>
        <Box display="flex" alignItems="center" gap={2}>
          <StyledRating
            name="hover-feedback"
            value={value}
            precision={0.5}
            getLabelText={getLabelText}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            onChangeActive={(event, newHover) => {
              setHover(newHover);
            }}
            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            <Box>{labels[hover !== -1 ? hover : value]}</Box>
          )}
        </Box>
      </RatingContainer>
    </ComponentWrapper>
  );
}
