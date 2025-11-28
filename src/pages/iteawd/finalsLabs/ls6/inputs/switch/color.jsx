import Switch from '@mui/material/Switch';
import { pink } from '@mui/material/colors';
import { alpha, styled } from '@mui/material/styles';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledSwitch, SwitchContainer } from '../../styles/inputsStyles/switchStyles';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const label = { inputProps: { 'aria-label': 'Color switch demo' } };

export default function ColorSwitches() {
  return (
    <ComponentWrapper title="Switch Colors">
      <SwitchContainer>
        <StyledSwitch {...label} defaultChecked />
        <StyledSwitch {...label} defaultChecked color="secondary" />
        <StyledSwitch {...label} defaultChecked color="warning" />
        <StyledSwitch {...label} defaultChecked color="default" />
        <PinkSwitch {...label} defaultChecked />
      </SwitchContainer>
    </ComponentWrapper>
  );
}
