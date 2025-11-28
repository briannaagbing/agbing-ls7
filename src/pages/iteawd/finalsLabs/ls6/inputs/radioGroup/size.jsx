import * as React from 'react';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledRadio, RadioContainer } from '../../styles/inputsStyles/radioGroupStyles';

export default function SizeRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    inputProps: { 'aria-label': item },
  });

  return (
    <ComponentWrapper title="Radio Button Sizes">
      <RadioContainer>
        <StyledRadio {...controlProps('a')} size="small" />
        <StyledRadio {...controlProps('b')} />
        <StyledRadio
          {...controlProps('c')}
          sx={{
            '& .MuiSvgIcon-root': {
              fontSize: 28,
            },
          }}
        />
      </RadioContainer>
    </ComponentWrapper>
  );
}
