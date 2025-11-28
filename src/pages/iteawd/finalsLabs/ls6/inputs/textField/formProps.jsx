import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function FormPropsTextFields() {
  return (
    <ComponentWrapper title="Text Field Form Properties">
      <TextFieldContainer
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <StyledTextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />
          <StyledTextField
            disabled
            id="outlined-disabled"
            label="Disabled"
            defaultValue="Hello World"
          />
          <StyledTextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <StyledTextField
            id="outlined-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <StyledTextField id="outlined-search" label="Search field" type="search" />
          <StyledTextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
          />
        </Box>
        <Box>
          <StyledTextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Hello World"
            variant="filled"
          />
          <StyledTextField
            disabled
            id="filled-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="filled"
          />
          <StyledTextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <StyledTextField
            id="filled-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="filled"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <StyledTextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
          />
          <StyledTextField
            id="filled-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="filled"
          />
        </Box>
        <Box>
          <StyledTextField
            required
            id="standard-required"
            label="Required"
            defaultValue="Hello World"
            variant="standard"
          />
          <StyledTextField
            disabled
            id="standard-disabled"
            label="Disabled"
            defaultValue="Hello World"
            variant="standard"
          />
          <StyledTextField
            id="standard-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
          />
          <StyledTextField
            id="standard-read-only-input"
            label="Read Only"
            defaultValue="Hello World"
            variant="standard"
            slotProps={{
              input: {
                readOnly: true,
              },
            }}
          />
          <StyledTextField
            id="standard-search"
            label="Search field"
            type="search"
            variant="standard"
          />
          <StyledTextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText="Some important text"
            variant="standard"
          />
        </Box>
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
