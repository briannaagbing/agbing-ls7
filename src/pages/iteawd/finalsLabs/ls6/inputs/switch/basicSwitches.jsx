import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSwitch, SwitchContainer } from '../../styles/inputsStyles/switchStyles';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function BasicSwitches() {
  return (
    <ComponentWrapper title="Basic Switches">
      <SwitchContainer>
        <StyledSwitch {...label} defaultChecked />
        <StyledSwitch {...label} />
        <StyledSwitch {...label} disabled defaultChecked />
        <StyledSwitch {...label} disabled />
      </SwitchContainer>
    </ComponentWrapper>
  );
}
