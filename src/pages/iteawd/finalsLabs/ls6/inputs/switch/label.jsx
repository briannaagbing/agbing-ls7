import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSwitch, SwitchContainer } from '../../styles/inputsStyles/switchStyles';

export default function SwitchLabels() {
  return (
    <ComponentWrapper title="Switch with Labels">
      <SwitchContainer>
        <FormGroup>
          <FormControlLabel control={<StyledSwitch defaultChecked />} label="Label" />
          <FormControlLabel required control={<StyledSwitch />} label="Required" />
          <FormControlLabel disabled control={<StyledSwitch />} label="Disabled" />
        </FormGroup>
      </SwitchContainer>
    </ComponentWrapper>
  );
}
