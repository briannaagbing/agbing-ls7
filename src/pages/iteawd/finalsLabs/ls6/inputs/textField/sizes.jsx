import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function TextFieldSizes() {
  return (
    <ComponentWrapper title="Text Field Sizes">
      <TextFieldContainer
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <StyledTextField
            label="Size"
            id="outlined-size-small"
            defaultValue="Small"
            size="small"
          />
          <StyledTextField label="Size" id="outlined-size-normal" defaultValue="Normal" />
        </Box>
        <Box>
          <StyledTextField
            label="Size"
            id="filled-size-small"
            defaultValue="Small"
            variant="filled"
            size="small"
          />
          <StyledTextField
            label="Size"
            id="filled-size-normal"
            defaultValue="Normal"
            variant="filled"
          />
        </Box>
        <Box>
          <StyledTextField
            label="Size"
            id="standard-size-small"
            defaultValue="Small"
            size="small"
            variant="standard"
          />
          <StyledTextField
            label="Size"
            id="standard-size-normal"
            defaultValue="Normal"
            variant="standard"
          />
        </Box>
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
