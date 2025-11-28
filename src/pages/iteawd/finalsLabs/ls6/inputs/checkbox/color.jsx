import { pink } from '@mui/material/colors';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function ColorCheckboxes() {
  return (
    <ComponentWrapper title="Checkbox Colors">
      <CheckboxContainer>
        <StyledCheckbox {...label} defaultChecked />
        <StyledCheckbox {...label} defaultChecked color="secondary" />
        <StyledCheckbox {...label} defaultChecked color="success" />
        <StyledCheckbox {...label} defaultChecked color="default" />
        <StyledCheckbox
          {...label}
          defaultChecked
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </CheckboxContainer>
    </ComponentWrapper>
  );
}
