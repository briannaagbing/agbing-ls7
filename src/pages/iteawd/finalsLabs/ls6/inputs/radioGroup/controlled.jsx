import * as React from 'react';

import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRadio, RadioContainer } from '../../styles/inputsStyles/radioGroupStyles';

export default function ControlledRadioButtonsGroup() {
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <ComponentWrapper title="Controlled Radio Group">
      <RadioContainer>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
            <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
          </RadioGroup>
        </FormControl>
      </RadioContainer>
    </ComponentWrapper>
  );
}
