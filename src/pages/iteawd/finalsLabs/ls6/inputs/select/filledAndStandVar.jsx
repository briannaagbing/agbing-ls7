import * as React from 'react';

import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSelect, SelectContainer } from '../../styles/inputsStyles/selectStyles';

export default function SelectVariants() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ComponentWrapper title="Select Variants">
      <SelectContainer>
        <Box display="flex" gap={2} flexWrap="wrap">
          <FormControl variant="standard" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
            <StyledSelect
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={age}
              onChange={handleChange}
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </StyledSelect>
          </FormControl>
          <FormControl variant="filled" sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-filled-label">Age</InputLabel>
            <StyledSelect
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={age}
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
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
