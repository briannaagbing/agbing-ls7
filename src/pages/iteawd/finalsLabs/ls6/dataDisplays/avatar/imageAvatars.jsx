import { ComponentWrapper } from '../../styles/commonStyles';
import { StyledAvatar, AvatarContainer } from '../../styles/dataDisplaysStyles/avatarStyles';

export default function ImageAvatars() {
  return (
    <ComponentWrapper title="Image Avatars">
      <AvatarContainer>
        <StyledAvatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <StyledAvatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <StyledAvatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </AvatarContainer>
    </ComponentWrapper>
  );
}
