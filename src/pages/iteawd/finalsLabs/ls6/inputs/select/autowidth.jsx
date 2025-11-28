import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSelect, SelectContainer } from '../../styles/inputsStyles/selectStyles';

export default function SelectAutoWidth() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ComponentWrapper title="Select Auto Width">
      <SelectContainer>
        <FormControl sx={{ minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">Age</InputLabel>
          <StyledSelect
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={age}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={21}>Twenty one</MenuItem>
            <MenuItem value={22}>Twenty one and a half</MenuItem>
          </StyledSelect>
        </FormControl>
      </SelectContainer>
    </ComponentWrapper>
  );
}
