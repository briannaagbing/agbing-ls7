import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

export default function CheckboxLabels() {
  return (
    <ComponentWrapper title="Checkbox with Labels">
      <CheckboxContainer>
        <FormGroup>
          <FormControlLabel control={<StyledCheckbox defaultChecked />} label="Label" />
          <FormControlLabel required control={<StyledCheckbox />} label="Required" />
          <FormControlLabel disabled control={<StyledCheckbox />} label="Disabled" />
        </FormGroup>
      </CheckboxContainer>
    </ComponentWrapper>
  );
}
