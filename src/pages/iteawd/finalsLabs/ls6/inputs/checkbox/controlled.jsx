import * as React from 'react';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

export default function ControlledCheckbox() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <ComponentWrapper title="Controlled Checkbox">
      <CheckboxContainer>
        <StyledCheckbox
          checked={checked}
          onChange={handleChange}
          slotProps={{
            input: { 'aria-label': 'controlled' },
          }}
        />
      </CheckboxContainer>
    </ComponentWrapper>
  );
}