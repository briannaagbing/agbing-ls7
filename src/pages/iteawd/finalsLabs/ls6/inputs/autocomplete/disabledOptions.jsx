import TextField from '@mui/material/TextField';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAutocomplete, AutocompleteContainer } from '../../styles/inputsStyles/autocompleteStyles';

export default function DisabledOptions() {
  return (
    <ComponentWrapper title="Disabled Options - Autocomplete">
      <AutocompleteContainer>
        <StyledAutocomplete
          options={timeSlots}
          getOptionDisabled={(option) =>
            option === timeSlots[0] || option === timeSlots[2]
          }
          sx={{ width: '100%', maxWidth: 400 }}
          renderInput={(params) => <TextField {...params} label="Disabled options" />}
        />
      </AutocompleteContainer>
    </ComponentWrapper>
  );
}

// One time slot every 30 minutes.
const timeSlots = Array.from(new Array(24 * 2)).map(
  (_, index) =>
    `${index < 20 ? '0' : ''}${Math.floor(index / 2)}:${index % 2 === 0 ? '00' : '30'
    }`,
);
