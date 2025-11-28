import * as React from 'react';

import { pink } from '@mui/material/colors';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRadio, RadioContainer } from '../../styles/inputsStyles/radioGroupStyles';

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <ComponentWrapper title="Radio Button Colors">
      <RadioContainer>
        <StyledRadio {...controlProps('a')} />
        <StyledRadio {...controlProps('b')} color="secondary" />
        <StyledRadio {...controlProps('c')} color="success" />
        <StyledRadio {...controlProps('d')} color="default" />
        <StyledRadio
          {...controlProps('e')}
          sx={{
            color: pink[800],
            '&.Mui-checked': {
              color: pink[600],
            },
          }}
        />
      </RadioContainer>
    </ComponentWrapper>
  );
}
