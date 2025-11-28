import TextField from '@mui/material/TextField';

import top100Films from './top100Films';
import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAutocomplete, AutocompleteContainer } from '../../styles/inputsStyles/autocompleteStyles';

export default function ComboBox() {
  return (
    <ComponentWrapper title="Combo Box - Autocomplete">
      <AutocompleteContainer>
        <StyledAutocomplete
          disablePortal
          options={top100Films}
          sx={{ width: '100%', maxWidth: 400 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
      </AutocompleteContainer>
    </ComponentWrapper>
  );
}