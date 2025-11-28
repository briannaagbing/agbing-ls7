import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function ColorTextFields() {
  return (
    <ComponentWrapper title="Text Field Colors">
      <TextFieldContainer
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField label="Outlined secondary" color="secondary" focused />
        <StyledTextField label="Filled success" variant="filled" color="success" focused />
        <StyledTextField
          label="Standard warning"
          variant="standard"
          color="warning"
          focused
        />
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
