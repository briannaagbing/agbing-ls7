import { List, Divider, ListItem, ListItemText } from '@mui/material';

import { ComponentWrapper } from '../../styles/commonStyles';

const style = {
  p: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
};

export default function ListDividers() {
  return (
    <ComponentWrapper title="Use With A List">
      <List sx={style} aria-label="mailbox folders">
        <ListItem>
          <ListItemText primary="Inbox" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Drafts" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Trash" />
        </ListItem>
        <Divider component="li" />
        <ListItem>
          <ListItemText primary="Spam" />
        </ListItem>
      </List>
    </ComponentWrapper>
  );
}
