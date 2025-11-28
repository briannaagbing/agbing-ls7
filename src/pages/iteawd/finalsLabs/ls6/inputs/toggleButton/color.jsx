import * as React from 'react';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledToggleButton, StyledToggleButtonGroup } from '../../styles/inputsStyles/toggleButtonStyles';

export default function ColorToggleButton() {
  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ComponentWrapper title="Color Toggle Button">
      <StyledToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
      >
        <StyledToggleButton value="web">Web</StyledToggleButton>
        <StyledToggleButton value="android">Android</StyledToggleButton>
        <StyledToggleButton value="ios">iOS</StyledToggleButton>
      </StyledToggleButtonGroup>
    </ComponentWrapper>
  );
}
