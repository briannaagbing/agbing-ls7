import AccountCircle from '@mui/icons-material/AccountCircle';
import {
  Box,
  Input,
  InputLabel,
  FormControl,
  InputAdornment,
} from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function InputWithIcon() {
  return (
    <ComponentWrapper title="Text Field with Icons">
      <TextFieldContainer sx={{ '& > :not(style)': { m: 1 } }}>
        <FormControl variant="standard">
          <InputLabel htmlFor="input-with-icon-adornment">
            With a start adornment
          </InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl>
        <StyledTextField
          id="input-with-icon-textfield"
          label="TextField"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <StyledTextField id="input-with-sx" label="With sx" variant="standard" />
        </Box>
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
