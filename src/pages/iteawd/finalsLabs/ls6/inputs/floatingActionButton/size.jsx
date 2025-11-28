import AddIcon from '@mui/icons-material/Add';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledFab, FabContainer } from '../../styles/inputsStyles/floatingActionButtonStyles';

export default function FloatingActionButtonSize() {
  return (
    <ComponentWrapper title="FAB Sizes">
      <FabContainer>
        <StyledFab size="small" color="secondary" aria-label="add">
          <AddIcon />
        </StyledFab>
        <StyledFab size="medium" color="secondary" aria-label="add">
          <AddIcon />
        </StyledFab>
        <StyledFab color="secondary" aria-label="add">
          <AddIcon />
        </StyledFab>
      </FabContainer>
    </ComponentWrapper>
  );
}
