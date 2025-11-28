import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRadio, RadioContainer } from '../../styles/inputsStyles/radioGroupStyles';

export default function RadioButtonsGroup() {
  return (
    <ComponentWrapper title="Radio Button Group">
      <RadioContainer>
        <FormControl>
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="female"
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
            <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
            <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </RadioContainer>
    </ComponentWrapper>
  );
}
