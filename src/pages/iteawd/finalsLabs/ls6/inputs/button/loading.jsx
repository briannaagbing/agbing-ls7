import * as React from 'react';

import Tooltip from '@mui/material/Tooltip';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ComponentWrapper } from '../../styles/commonStyles';
import { ButtonContainer, StyledIconButton } from '../../styles/inputsStyles/buttonStyles';

export default function LoadingIconButton() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  return (
    <ComponentWrapper title="Loading Button">
      <ButtonContainer>
        <Tooltip title="Click to see loading">
          <StyledIconButton onClick={() => setLoading(true)} loading={loading}>
            <ShoppingCartIcon />
          </StyledIconButton>
        </Tooltip>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
