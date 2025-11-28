import { styled } from '@mui/material/styles';
import Badge, { badgeClasses } from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

import { ComponentWrapper } from '../../styles/commonStyles';
import { ButtonContainer, StyledIconButton } from '../../styles/inputsStyles/buttonStyles';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -12px;
    right: -6px;
  }
`;

export default function IconButtonWithBadge() {
  return (
    <ComponentWrapper title="Icon Button with Badge">
      <ButtonContainer>
        <StyledIconButton>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={2} color="primary" overlap="circular" />
        </StyledIconButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
