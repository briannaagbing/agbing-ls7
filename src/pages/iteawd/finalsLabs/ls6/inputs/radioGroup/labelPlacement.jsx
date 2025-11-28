import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRadio, RadioContainer } from '../../styles/inputsStyles/radioGroupStyles';

export default function FormControlLabelPlacement() {
  return (
    <ComponentWrapper title="Label Placement - Radio Group">
      <RadioContainer>
        <FormControl>
          <FormLabel id="demo-form-control-label-placement">Label placement</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-form-control-label-placement"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="bottom"
              control={<StyledRadio />}
              label="Bottom"
              labelPlacement="bottom"
            />
            <FormControlLabel value="end" control={<StyledRadio />} label="End" />
          </RadioGroup>
        </FormControl>
      </RadioContainer>
    </ComponentWrapper>
  );
}
