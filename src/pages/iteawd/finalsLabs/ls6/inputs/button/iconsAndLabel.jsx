import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';

import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledButton, ButtonContainer } from '../../styles/inputsStyles/buttonStyles';

export default function IconLabelButtons() {
  return (
    <ComponentWrapper title="Icons and Labels - Buttons">
      <ButtonContainer>
        <StyledButton variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </StyledButton>
        <StyledButton variant="contained" endIcon={<SendIcon />}>
          Send
        </StyledButton>
      </ButtonContainer>
    </ComponentWrapper>
  );
}
