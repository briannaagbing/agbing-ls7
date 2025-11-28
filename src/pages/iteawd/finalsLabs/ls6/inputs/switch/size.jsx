import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSwitch, SwitchContainer } from '../../styles/inputsStyles/switchStyles';

const label = { inputProps: { 'aria-label': 'Size switch demo' } };

export default function SwitchesSize() {
  return (
    <ComponentWrapper title="Switch Sizes">
      <SwitchContainer>
        <StyledSwitch {...label} defaultChecked size="small" />
        <StyledSwitch {...label} defaultChecked />
      </SwitchContainer>
    </ComponentWrapper>
  );
}
