import * as React from 'react';

import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledToggleButton, StyledToggleButtonGroup } from '../../styles/inputsStyles/toggleButtonStyles';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <ComponentWrapper title="Exclusive Selection">
      <StyledToggleButtonGroup
        value={alignment}
        exclusive
        onChange={handleAlignment}
        aria-label="text alignment"
      >
        <StyledToggleButton value="left" aria-label="left aligned">
          <FormatAlignLeftIcon />
        </StyledToggleButton>
        <StyledToggleButton value="center" aria-label="centered">
          <FormatAlignCenterIcon />
        </StyledToggleButton>
        <StyledToggleButton value="right" aria-label="right aligned">
          <FormatAlignRightIcon />
        </StyledToggleButton>
        <StyledToggleButton value="justify" aria-label="justified" disabled>
          <FormatAlignJustifyIcon />
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </ComponentWrapper>
  );
}
