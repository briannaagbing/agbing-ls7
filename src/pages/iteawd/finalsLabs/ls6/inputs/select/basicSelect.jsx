import * as React from 'react';

import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSelect, SelectContainer } from '../../styles/inputsStyles/selectStyles';

export default function BasicSelect() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ComponentWrapper title="Basic Select">
      <SelectContainer>
        <Box sx={{ minWidth: 120, maxWidth: 300, width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <StyledSelect
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </StyledSelect>
          </FormControl>
        </Box>
      </SelectContainer>
    </ComponentWrapper>
  );
}
