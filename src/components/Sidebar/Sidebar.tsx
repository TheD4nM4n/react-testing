import { useState } from 'react';
import {
  Drawer,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Typography,
  ListItemIcon,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Accessibility from '@mui/icons-material/Accessibility';

export default function MyDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const drawerList = (
    <List>
  
      <ListItem key="home" disablePadding>
          <ListItemIcon>
            <Accessibility />
          </ListItemIcon>
          <ListItemButton component="a" href="/">
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      <ListItem key="dan" disablePadding>
        <ListItemIcon>
          <Accessibility />
        </ListItemIcon>
        <ListItemButton component="a" href='/dan'>
          <ListItemText primary="Dan's Page" />
        </ListItemButton>
      </ListItem>
      <ListItem key="justin" disablePadding>
        <ListItemIcon>
          <Accessibility />
        </ListItemIcon>
        <ListItemButton component="a" href='/justin'>
          <ListItemText primary="Justin's Page" />
        </ListItemButton>
      </ListItem>
    </List>
  );

  return (
    <div style={{ width: '100vx', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <IconButton edge='start' aria-label='menu' onClick={toggleDrawer(true)} sx={{ mr: 2, marginInlineStart: '3px', }}>
        <MenuIcon fontSize='large'/>
      </IconButton>
      <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>The Playground</Typography>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {drawerList}
      </Drawer>
    </div>
  );
}
