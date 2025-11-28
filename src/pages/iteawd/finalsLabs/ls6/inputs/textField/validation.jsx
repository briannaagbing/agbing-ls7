import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function ValidationTextFields() {
  return (
    <ComponentWrapper title="Text Field Validation">
      <TextFieldContainer
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <StyledTextField
            error
            id="outlined-error"
            label="Error"
            defaultValue="Hello World"
          />
          <StyledTextField
            error
            id="outlined-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
          />
        </Box>
        <Box>
          <StyledTextField
            error
            id="filled-error"
            label="Error"
            defaultValue="Hello World"
            variant="filled"
          />
          <StyledTextField
            error
            id="filled-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="filled"
          />
        </Box>
        <Box>
          <StyledTextField
            error
            id="standard-error"
            label="Error"
            defaultValue="Hello World"
            variant="standard"
          />
          <StyledTextField
            error
            id="standard-error-helper-text"
            label="Error"
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </Box>
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
