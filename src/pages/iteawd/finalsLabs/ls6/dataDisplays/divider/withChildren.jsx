import { styled } from '@mui/material/styles';
import { Chip, Divider } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';

const Root = styled('div')(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  '& > :not(style) ~ :not(style)': {
    marginTop: theme.spacing(2),
  },
}));

export default function DividerText() {
  const content = (
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  );

  return (
    <ComponentWrapper title="Divider With Children">
      <Root>
        {content}
        <Divider>CENTER</Divider>
        {content}
        <Divider textAlign="left">LEFT</Divider>
        {content}
        <Divider textAlign="right">RIGHT</Divider>
        {content}
        <Divider>
          <Chip label="Chip" size="small" />
        </Divider>
        {content}
      </Root>
    </ComponentWrapper>
  );
}
