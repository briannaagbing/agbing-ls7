import * as React from 'react';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSwitch, SwitchContainer } from '../../styles/inputsStyles/switchStyles';

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <ComponentWrapper title="Controlled Switch">
      <SwitchContainer>
        <StyledSwitch
          checked={checked}
          onChange={handleChange}
          slotProps={{ input: { 'aria-label': 'controlled' } }}
        />
      </SwitchContainer>
    </ComponentWrapper>
  );
}
