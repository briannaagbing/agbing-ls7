import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledFab, FabContainer } from '../../styles/inputsStyles/floatingActionButtonStyles';

export default function FloatingActionButtons() {
  return (
    <ComponentWrapper title="Floating Action Buttons">
      <FabContainer>
        <StyledFab color="primary" aria-label="add">
          <AddIcon />
        </StyledFab>
        <StyledFab color="secondary" aria-label="edit">
          <EditIcon />
        </StyledFab>
        <StyledFab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </StyledFab>
        <StyledFab disabled aria-label="like">
          <FavoriteIcon />
        </StyledFab>
      </FabContainer>
    </ComponentWrapper>
  );
}
