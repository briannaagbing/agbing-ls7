import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function BasicTextFields() {
  return (
    <ComponentWrapper title="Basic Text Fields">
      <TextFieldContainer
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField id="outlined-basic" label="Outlined" variant="outlined" />
        <StyledTextField id="filled-basic" label="Filled" variant="filled" />
        <StyledTextField id="standard-basic" label="Standard" variant="standard" />
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
