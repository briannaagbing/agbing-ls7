import { InputAdornment } from '@mui/material';
import { inputBaseClasses } from '@mui/material/InputBase';
import { filledInputClasses } from '@mui/material/FilledInput';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledTextField, TextFieldContainer } from '../../styles/inputsStyles/textFieldStyles';

export default function InputSuffixShrink() {
  return (
    <ComponentWrapper title="Customizing Input Adornments">
      <TextFieldContainer
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <StyledTextField
          id="outlined-suffix-shrink"
          label="Outlined"
          variant="outlined"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    opacity: 0,
                    pointerEvents: 'none',
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                  lbs
                </InputAdornment>
              ),
            },
          }}
        />
        <StyledTextField
          id="filled-suffix-shrink"
          label="Filled"
          variant="filled"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    alignSelf: 'flex-end',
                    opacity: 0,
                    pointerEvents: 'none',
                    [`.${filledInputClasses.root} &`]: {
                      marginBottom: '7.5px',
                    },
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                  days
                </InputAdornment>
              ),
            },
          }}
        />
        <StyledTextField
          id="standard-suffix-shrink"
          label="Standard"
          variant="standard"
          slotProps={{
            htmlInput: {
              sx: { textAlign: 'right' },
            },
            input: {
              endAdornment: (
                <InputAdornment
                  position="end"
                  sx={{
                    alignSelf: 'flex-end',
                    margin: 0,
                    marginBottom: '5px',
                    opacity: 0,
                    pointerEvents: 'none',
                    [`[data-shrink=true] ~ .${inputBaseClasses.root} > &`]: {
                      opacity: 1,
                    },
                  }}
                >
                  @gmail.com
                </InputAdornment>
              ),
            },
          }}
        />
      </TextFieldContainer>
    </ComponentWrapper>
  );
}
