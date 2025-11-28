// ===== INPUTS COMPONENTS =====

// AUTOCOMPLETE - All 8 components
export const autocompleteTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAutocomplete, AutocompleteContainer } from '../../styles/inputsStyles/autocompleteStyles';
import TextField from '@mui/material/TextField';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <AutocompleteContainer>
        <StyledAutocomplete
          // Your autocomplete props
          renderInput={(params) => <TextField {...params} label="Label" />}
        />
      </AutocompleteContainer>
    </ComponentWrapper>
  );
}`;

// BUTTON - All 10 components
export const buttonTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <ButtonContainer>
        <StyledButton variant="contained">Button 1</StyledButton>
        <StyledButton variant="outlined">Button 2</StyledButton>
        <StyledButton variant="text">Button 3</StyledButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}`;

// BUTTON GROUP - All 5 components  
export const buttonGroupTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButtonGroup, ButtonGroupContainer } from '../../styles/inputsStyles/buttonGroupStyles';
import Button from '@mui/material/Button';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <ButtonGroupContainer>
        <StyledButtonGroup variant="contained">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </StyledButtonGroup>
      </ButtonGroupContainer>
    </ComponentWrapper>
  );
}`;

// CHECKBOX - All 9 components
export const checkboxTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer, StyledFormControlLabel } from '../../styles/inputsStyles/checkboxStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <CheckboxContainer>
        <StyledFormControlLabel 
          control={<StyledCheckbox defaultChecked />} 
          label="Option 1" 
        />
        <StyledFormControlLabel 
          control={<StyledCheckbox />} 
          label="Option 2" 
        />
      </CheckboxContainer>
    </ComponentWrapper>
  );
}`;

// FAB - All 3 components
export const fabTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledFab, FabContainer } from '../../styles/inputsStyles/floatingActionButtonStyles';
import AddIcon from '@mui/icons-material/Add';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <FabContainer>
        <StyledFab color="primary">
          <AddIcon />
        </StyledFab>
        <StyledFab color="secondary">
          <AddIcon />
        </StyledFab>
      </FabContainer>
    </ComponentWrapper>
  );
}`;

// RADIO GROUP - All 7 components
export const radioGroupTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRadio, StyledRadioGroup, StyledRadioLabel, RadioContainer } from '../../styles/inputsStyles/radioGroupStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <RadioContainer>
        <StyledRadioGroup defaultValue="option1">
          <StyledRadioLabel 
            value="option1" 
            control={<StyledRadio />} 
            label="Option 1" 
          />
          <StyledRadioLabel 
            value="option2" 
            control={<StyledRadio />} 
            label="Option 2" 
          />
        </StyledRadioGroup>
      </RadioContainer>
    </ComponentWrapper>
  );
}`;

// RATING - All 6 components
export const ratingTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRating, RatingContainer } from '../../styles/inputsStyles/ratingStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <RatingContainer>
        <StyledRating name="rating" defaultValue={2.5} precision={0.5} />
      </RatingContainer>
    </ComponentWrapper>
  );
}`;

// SELECT - All 5 components
export const selectTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSelect, StyledFormControl, SelectContainer } from '../../styles/inputsStyles/selectStyles';
import { MenuItem, InputLabel } from '@mui/material';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <SelectContainer>
        <StyledFormControl fullWidth>
          <InputLabel>Select Option</InputLabel>
          <StyledSelect defaultValue="">
            <MenuItem value={10}>Option 1</MenuItem>
            <MenuItem value={20}>Option 2</MenuItem>
            <MenuItem value={30}>Option 3</MenuItem>
          </StyledSelect>
        </StyledFormControl>
      </SelectContainer>
    </ComponentWrapper>
  );
}`;

// SLIDER - All 14 components
export const sliderTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSlider, SliderContainer } from '../../styles/inputsStyles/sliderStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <SliderContainer>
        <StyledSlider
          defaultValue={30}
          aria-label="Default"
          valueLabelDisplay="auto"
        />
      </SliderContainer>
    </ComponentWrapper>
  );
}`;

// SWITCH - All 6 components
export const switchTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSwitch, SwitchContainer, StyledSwitchLabel } from '../../styles/inputsStyles/switchStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <SwitchContainer>
        <StyledSwitchLabel 
          control={<StyledSwitch defaultChecked />} 
          label="Option 1" 
        />
        <StyledSwitchLabel 
          control={<StyledSwitch />} 
          label="Option 2" 
        />
      </SwitchContainer>
    </ComponentWrapper>
  );
}`;

// TEXT FIELD - All 11 components
export const textFieldTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <TextFieldContainer>
        <StyledTextField label="Field 1" variant="outlined" />
        <StyledTextField label="Field 2" variant="filled" />
        <StyledTextField label="Field 3" variant="standard" />
      </TextFieldContainer>
    </ComponentWrapper>
  );
}`;

// TRANSFER LIST - All 2 components
export const transferListTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { TransferListContainer, StyledList, ButtonContainer } from '../../styles/inputsStyles/transferListStyles';
import { ListItem, ListItemText, Button } from '@mui/material';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <TransferListContainer>
        <StyledList>
          <ListItem>
            <ListItemText primary="Item 1" />
          </ListItem>
        </StyledList>
        <ButtonContainer>
          <Button>›</Button>
          <Button>‹</Button>
        </ButtonContainer>
        <StyledList>
          <ListItem>
            <ListItemText primary="Item 2" />
          </ListItem>
        </StyledList>
      </TransferListContainer>
    </ComponentWrapper>
  );
}`;

// TOGGLE BUTTON - All 8 components
export const toggleButtonTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledToggleButton, StyledToggleButtonGroup, ToggleButtonContainer } from '../../styles/inputsStyles/toggleButtonStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <ToggleButtonContainer>
        <StyledToggleButtonGroup exclusive value="left">
          <StyledToggleButton value="left">Left</StyledToggleButton>
          <StyledToggleButton value="center">Center</StyledToggleButton>
          <StyledToggleButton value="right">Right</StyledToggleButton>
        </StyledToggleButtonGroup>
      </ToggleButtonContainer>
    </ComponentWrapper>
  );
}`;

// ===== DATA DISPLAYS COMPONENTS =====

// AVATAR - All 10 components
export const avatarTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatar, AvatarContainer } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <AvatarContainer>
        <StyledAvatar alt="User 1" src="/static/images/avatar/1.jpg" />
        <StyledAvatar alt="User 2" src="/static/images/avatar/2.jpg" />
        <StyledAvatar alt="User 3">U3</StyledAvatar>
      </AvatarContainer>
    </ComponentWrapper>
  );
}`;

// BADGE - All 6 components
export const badgeTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledBadge, BadgeContainer } from '../../styles/dataDisplaysStyles/badgeStyles';
import MailIcon from '@mui/icons-material/Mail';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <BadgeContainer>
        <StyledBadge badgeContent={4} color="primary">
          <MailIcon sx={{ fontSize: 32 }} />
        </StyledBadge>
        <StyledBadge badgeContent={10} color="secondary">
          <MailIcon sx={{ fontSize: 32 }} />
        </StyledBadge>
      </BadgeContainer>
    </ComponentWrapper>
  );
}`;

// CHIP - All 10 components
export const chipTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledChip, ChipContainer } from '../../styles/dataDisplaysStyles/chipStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <ChipContainer>
        <StyledChip label="Chip 1" />
        <StyledChip label="Chip 2" color="primary" />
        <StyledChip label="Chip 3" color="secondary" />
        <StyledChip label="Deletable" onDelete={() => {}} />
      </ChipContainer>
    </ComponentWrapper>
  );
}`;

// DIVIDER - All 7 components
export const dividerTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledDivider, DividerContainer } from '../../styles/dataDisplaysStyles/dividerStyles';
import { Typography } from '@mui/material';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <DividerContainer>
        <Typography>Content Above</Typography>
        <StyledDivider />
        <Typography>Content Below</Typography>
      </DividerContainer>
    </ComponentWrapper>
  );
}`;

// TABLE - All 3 components
export const tableTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { 
  StyledTableContainer, 
  StyledTable, 
  StyledTableCell, 
  StyledTableRow,
  TableWrapper 
} from '../../styles/dataDisplaysStyles/tableStyles';
import { TableHead, TableBody } from '@mui/material';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <TableWrapper>
        <StyledTableContainer>
          <StyledTable>
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>Column 1</StyledTableCell>
                <StyledTableCell>Column 2</StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRow>
                <StyledTableCell>Data 1</StyledTableCell>
                <StyledTableCell>Data 2</StyledTableCell>
              </StyledTableRow>
            </TableBody>
          </StyledTable>
        </StyledTableContainer>
      </TableWrapper>
    </ComponentWrapper>
  );
}`;

// TOOLTIP - All 10 components
export const tooltipTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTooltip, TooltipContainer, TooltipDemo } from '../../styles/dataDisplaysStyles/tooltipStyles';
import { Button } from '@mui/material';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <TooltipContainer>
        <StyledTooltip title="Tooltip Text" arrow>
          <Button>Hover Me</Button>
        </StyledTooltip>
        <StyledTooltip title="Another Tooltip" arrow placement="top">
          <Button>Top Tooltip</Button>
        </StyledTooltip>
      </TooltipContainer>
    </ComponentWrapper>
  );
}`;

// TYPOGRAPHY - All 1 component
export const typographyTemplate = `import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTypography, TypographyContainer, TypographySection } from '../../styles/dataDisplaysStyles/typographyStyles';

export default function ComponentName() {
  return (
    <ComponentWrapper title="Component Title">
      <TypographyContainer>
        <TypographySection>
          <StyledTypography variant="h1">Heading 1</StyledTypography>
          <StyledTypography variant="h2">Heading 2</StyledTypography>
          <StyledTypography variant="body1">Body text goes here</StyledTypography>
        </TypographySection>
      </TypographyContainer>
    </ComponentWrapper>
  );
}`;

export const componentCounts = {
  inputs: {
    autocomplete: 8,
    button: 10,
    buttonGroup: 5,
    checkbox: 9,
    floatingActionButton: 3,
    radioGroup: 7,
    rating: 6,
    select: 5,
    slider: 14,
    switch: 6,
    textField: 11,
    transferList: 2,
    toggleButton: 8,
  },
  dataDisplays: {
    avatar: 10,
    badge: 6,
    chip: 10,
    divider: 7,
    table: 3,
    tooltip: 10,
    typography: 1,
  }
};

console.log('Total Input Components:', Object.values(componentCounts.inputs).reduce((a, b) => a + b, 0));
console.log('Total DataDisplay Components:', Object.values(componentCounts.dataDisplays).reduce((a, b) => a + b, 0));
