import AlarmIcon from '@mui/icons-material/Alarm';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

import { ComponentWrapper } from '../../styles/commonStyles';
import { ButtonContainer, StyledIconButton } from '../../styles/inputsStyles/buttonStyles';

export default function IconButtons() {
  return (
    <ComponentWrapper title="Icon Buttons">
      <ButtonContainer>
        <StyledIconButton aria-label="delete">
          <DeleteIcon />
        </StyledIconButton>
        <StyledIconButton aria-label="delete" disabled color="primary">
          <DeleteIcon />
        </StyledIconButton>
        <StyledIconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </StyledIconButton>
        <StyledIconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon />
        </StyledIconButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
