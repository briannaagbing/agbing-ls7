import * as React from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSelect, SelectContainer } from '../../styles/inputsStyles/selectStyles';

export default function SelectSmall() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <ComponentWrapper title="Small Select">
      <SelectContainer>
        <FormControl sx={{ minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small-label">Age</InputLabel>
          <StyledSelect
            labelId="demo-select-small-label"
            id="demo-select-small"
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
        </FormControl>
      </SelectContainer>
    </ComponentWrapper>
  );
}
