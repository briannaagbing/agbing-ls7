import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRadio, RadioContainer } from '../../styles/inputsStyles/radioGroupStyles';

export default function RowRadioButtonsGroup() {
  return (
    <ComponentWrapper title="Row Radio Group">
      <RadioContainer>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="female" control={<StyledRadio />} label="Female" />
            <FormControlLabel value="male" control={<StyledRadio />} label="Male" />
            <FormControlLabel value="other" control={<StyledRadio />} label="Other" />
            <FormControlLabel
              value="disabled"
              disabled
              control={<StyledRadio />}
              label="other"
            />
          </RadioGroup>
        </FormControl>
      </RadioContainer>
    </ComponentWrapper>
  );
}
