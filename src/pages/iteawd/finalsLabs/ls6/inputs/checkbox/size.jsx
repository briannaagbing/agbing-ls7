import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

const label = { slotProps: { input: { 'aria-label': 'Checkbox demo' } } };

export default function SizeCheckboxes() {
  return (
    <ComponentWrapper title="Checkbox Sizes">
      <CheckboxContainer>
        <StyledCheckbox {...label} defaultChecked size="small" />
        <StyledCheckbox {...label} defaultChecked />
        <StyledCheckbox
          {...label}
          defaultChecked
          sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
        />
      </CheckboxContainer>
    </ComponentWrapper>
  );
}
