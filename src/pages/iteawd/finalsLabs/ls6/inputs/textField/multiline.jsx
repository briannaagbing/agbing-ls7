import { Box } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function MultilineTextFields() {
  return (
    <ComponentWrapper title="Multiline Text Fields">
      <TextFieldContainer
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <StyledTextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
          />
          <StyledTextField
            id="outlined-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
          />
          <StyledTextField
            id="outlined-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
        </Box>
        <Box>
          <StyledTextField
            id="filled-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="filled"
          />
          <StyledTextField
            id="filled-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="filled"
          />
          <StyledTextField
            id="filled-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="filled"
          />
        </Box>
        <Box>
          <StyledTextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
          />
          <StyledTextField
            id="standard-textarea"
            label="Multiline Placeholder"
            placeholder="Placeholder"
            multiline
            variant="standard"
          />
          <StyledTextField
            id="standard-multiline-static"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
            variant="standard"
          />
        </Box>
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
