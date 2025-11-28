import * as React from 'react';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledToggleButton, StyledToggleButtonGroup } from '../../styles/inputsStyles/toggleButtonStyles';

export default function ToggleButtonsMultiple() {
  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <ComponentWrapper title="Multiple Selection">
      <StyledToggleButtonGroup
        value={formats}
        onChange={handleFormat}
        aria-label="text formatting"
      >
        <StyledToggleButton value="bold" aria-label="bold">
          <FormatBoldIcon />
        </StyledToggleButton>
        <StyledToggleButton value="italic" aria-label="italic">
          <FormatItalicIcon />
        </StyledToggleButton>
        <StyledToggleButton value="underlined" aria-label="underlined">
          <FormatUnderlinedIcon />
        </StyledToggleButton>
        <StyledToggleButton value="color" aria-label="color" disabled>
          <FormatColorFillIcon />
          <ArrowDropDownIcon />
        </StyledToggleButton>
      </StyledToggleButtonGroup>
    </ComponentWrapper>
  );
}
