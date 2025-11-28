import * as React from 'react';

import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRating, RatingContainer } from '../../styles/inputsStyles/ratingStyles';

export default function BasicRating() {
  const [value, setValue] = React.useState(2);

  return (
    <ComponentWrapper title="Basic Rating">
      <RatingContainer>
        <Box display="flex" flexDirection="column" gap={2} width="100%">
          <Box>
            <Typography component="legend">Controlled</Typography>
            <StyledRating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
          </Box>
          <Box>
            <Typography component="legend">Uncontrolled</Typography>
            <StyledRating
              name="simple-uncontrolled"
              onChange={(event, newValue) => {
                console.log(newValue);
              }}
              defaultValue={2}
            />
          </Box>
          <Box>
            <Typography component="legend">Read only</Typography>
            <StyledRating name="read-only" value={value} readOnly />
          </Box>
          <Box>
            <Typography component="legend">Disabled</Typography>
            <StyledRating name="disabled" value={value} disabled />
          </Box>
          <Box>
            <Typography component="legend">No rating given</Typography>
            <StyledRating name="no-value" value={null} />
          </Box>
        </Box>
      </RatingContainer>
    </ComponentWrapper>
  );
}
