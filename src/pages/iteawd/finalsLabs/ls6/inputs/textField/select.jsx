import { Box, MenuItem } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

export default function SelectTextFields() {
  return (
    <ComponentWrapper title="Select Text Fields">
      <TextFieldContainer
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <Box>
          <StyledTextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
          <StyledTextField
            id="outlined-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            slotProps={{
              select: {
                native: true,
              },
            }}
            helperText="Please select your currency"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledTextField>
        </Box>
        <Box>
          <StyledTextField
            id="filled-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="filled"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
          <StyledTextField
            id="filled-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            slotProps={{
              select: {
                native: true,
              },
            }}
            helperText="Please select your currency"
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledTextField>
        </Box>
        <Box>
          <StyledTextField
            id="standard-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            variant="standard"
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </StyledTextField>
          <StyledTextField
            id="standard-select-currency-native"
            select
            label="Native select"
            defaultValue="EUR"
            slotProps={{
              select: {
                native: true,
              },
            }}
            helperText="Please select your currency"
            variant="standard"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </StyledTextField>
        </Box>
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
