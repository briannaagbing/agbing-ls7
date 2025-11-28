import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function FullWidthTextField() {
  return (
    <ComponentWrapper title="Full Width Text Field">
      <TextFieldContainer sx={{ width: 500, maxWidth: '100%' }}>
        <StyledTextField fullWidth label="fullWidth" id="fullWidth" />
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
