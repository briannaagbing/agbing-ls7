import * as React from 'react';

import { Stack } from '@mui/material';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledToggleButton, StyledToggleButtonGroup } from '../../styles/inputsStyles/toggleButtonStyles';

export default function ToggleButtonSizes() {
  const [alignment, setAlignment] = React.useState('left');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const children = [
    <StyledToggleButton value="left" key="left">
      <FormatAlignLeftIcon />
    </StyledToggleButton>,
    <StyledToggleButton value="center" key="center">
      <FormatAlignCenterIcon />
    </StyledToggleButton>,
    <StyledToggleButton value="right" key="right">
      <FormatAlignRightIcon />
    </StyledToggleButton>,
    <StyledToggleButton value="justify" key="justify">
      <FormatAlignJustifyIcon />
    </StyledToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <ComponentWrapper title="Toggle Button Sizes">
      <Stack spacing={2} sx={{ alignItems: 'center' }}>
        <StyledToggleButtonGroup size="small" {...control} aria-label="Small sizes">
          {children}
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup {...control} aria-label="Medium sizes">
          {children}
        </StyledToggleButtonGroup>
        <StyledToggleButtonGroup size="large" {...control} aria-label="Large sizes">
          {children}
        </StyledToggleButtonGroup>
      </Stack>
    </ComponentWrapper>
  );
}
