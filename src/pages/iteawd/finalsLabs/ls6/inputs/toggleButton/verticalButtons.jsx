import * as React from 'react';

import ViewListIcon from '@mui/icons-material/ViewList';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledToggleButton, StyledToggleButtonGroup } from '../../styles/inputsStyles/toggleButtonStyles';

export default function VerticalToggleButtons() {
  const [view, setView] = React.useState('list');

  const handleChange = (event, nextView) => {
    setView(nextView);
  };

  return (
    <ComponentWrapper title="Vertical Toggle Buttons">
      <StyledToggleButtonGroup
        orientation="vertical"
        value={view}
        exclusive
        onChange={handleChange}
      >
        <StyledToggleButton value="list" aria-label="list">
          <ViewListIcon />
        </StyledToggleButton>
        <StyledToggleButton value="module" aria-label="module">
          <ViewModuleIcon />
        </StyledToggleButton>
        <StyledToggleButton value="quilt" aria-label="quilt">
          <ViewQuiltIcon />
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </ComponentWrapper>
  );
}
