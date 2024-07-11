import logo from './logo.svg';
import { useState } from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Box, AppBar, Drawer, Toolbar, Divider } from '@mui/material';
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import { Analytics } from '@mui/icons-material';
import { Grouped } from './tabs/grouped';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


function App() {
  const icons = [<Analytics/>, <Analytics/>]

  const [selectedTab, setTab] = useState(0);

  const drawerWidth = 240;

  function currentTab(){
      switch(selectedTab){
        case 0:
          return <Grouped/>
        default:
          return <br/>
      }
  }

  return (
    <ThemeProvider theme={darkTheme}>
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          {['Frequency Distribution', 'Interests'].map((text, index) => (
            <ListItem key={text} disablePadding onClick={()=>{}}>
              <ListItemButton>
                <ListItemIcon>
                    {icons[index]}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar/>
        {currentTab()}
      </Box>
    </Box>
    </ThemeProvider>
  );
}

export default App;
