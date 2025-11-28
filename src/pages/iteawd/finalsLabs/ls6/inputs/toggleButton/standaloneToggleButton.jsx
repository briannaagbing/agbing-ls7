import * as React from 'react';

import CheckIcon from '@mui/icons-material/Check';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledToggleButton } from '../../styles/inputsStyles/toggleButtonStyles';

export default function StandaloneToggleButton() {
  const [selected, setSelected] = React.useState(false);

  return (
    <ComponentWrapper title="Standalone Toggle Button">
      <StyledToggleButton
        value="check"
        selected={selected}
        onChange={() => setSelected((prevSelected) => !prevSelected)}
      >
        <CheckIcon />
      </StyledToggleButton>
    </ComponentWrapper>
  );
}
