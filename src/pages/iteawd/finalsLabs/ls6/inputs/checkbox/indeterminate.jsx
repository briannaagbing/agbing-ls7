import * as React from 'react';

import { Box } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledCheckbox, CheckboxContainer } from '../../styles/inputsStyles/checkboxStyles';

export default function IndeterminateCheckbox() {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<StyledCheckbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<StyledCheckbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );

  return (
    <ComponentWrapper title="Indeterminate Checkbox">
      <CheckboxContainer>
        <Box>
          <FormControlLabel
            label="Parent"
            control={
              <StyledCheckbox
                checked={checked[0] && checked[1]}
                indeterminate={checked[0] !== checked[1]}
                onChange={handleChange1}
              />
            }
          />
          {children}
        </Box>
      </CheckboxContainer>
    </ComponentWrapper>
  );
}
