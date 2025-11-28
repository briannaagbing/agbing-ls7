import * as React from 'react';

import { Box } from '@mui/material';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { gilad, jason, antoine } = state;
  const error = [gilad, jason, antoine].filter((v) => v).length !== 2;

  return (
    <ComponentWrapper title="Checkbox Form Group">
      <CheckboxContainer>
        <Box display="flex" gap={3} flexWrap="wrap">
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Assign responsibility</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <StyledCheckbox checked={gilad} onChange={handleChange} name="gilad" />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <StyledCheckbox checked={jason} onChange={handleChange} name="jason" />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <StyledCheckbox checked={antoine} onChange={handleChange} name="antoine" />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>Be careful</FormHelperText>
          </FormControl>
          <FormControl
            required
            error={error}
            component="fieldset"
            variant="standard"
          >
            <FormLabel component="legend">Pick two</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <StyledCheckbox checked={gilad} onChange={handleChange} name="gilad" />
                }
                label="Gilad Gray"
              />
              <FormControlLabel
                control={
                  <StyledCheckbox checked={jason} onChange={handleChange} name="jason" />
                }
                label="Jason Killian"
              />
              <FormControlLabel
                control={
                  <StyledCheckbox checked={antoine} onChange={handleChange} name="antoine" />
                }
                label="Antoine Llorca"
              />
            </FormGroup>
            <FormHelperText>You can display an error</FormHelperText>
          </FormControl>
        </Box>
      </CheckboxContainer>
    </ComponentWrapper>
  );
}
