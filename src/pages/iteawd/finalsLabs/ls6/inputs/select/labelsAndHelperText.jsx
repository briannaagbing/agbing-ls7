import * as React from 'react';

import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSelect, SelectContainer } from '../../styles/inputsStyles/selectStyles';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ComponentWrapper title="Select Labels and Helper Text">
      <SelectContainer>
        <Box display="flex" gap={2} flexWrap="wrap">
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
            <StyledSelect
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </StyledSelect>
            <FormHelperText>With label + helper text</FormHelperText>
          </FormControl>
          <FormControl sx={{ minWidth: 120 }}>
            <StyledSelect
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </StyledSelect>
            <FormHelperText>Without label</FormHelperText>
          </FormControl>
        </Box>
      </SelectContainer>
    </ComponentWrapper>
  );
}
