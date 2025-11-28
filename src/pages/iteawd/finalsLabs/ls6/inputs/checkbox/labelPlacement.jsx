import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

export default function FormControlLabelPosition() {
  return (
    <ComponentWrapper title="Label Placement - Checkbox">
      <CheckboxContainer>
        <FormControl component="fieldset">
          <FormLabel component="legend">Label placement</FormLabel>
          <FormGroup aria-label="position" row>
            <FormControlLabel
              value="bottom"
              control={<StyledCheckbox />}
              label="Bottom"
              labelPlacement="bottom"
            />
            <FormControlLabel
              value="end"
              control={<StyledCheckbox />}
              label="End"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </CheckboxContainer>
    </ComponentWrapper>
  );
}
