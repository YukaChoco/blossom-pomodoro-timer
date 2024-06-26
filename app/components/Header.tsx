import { AppBar, Toolbar, Typography, Button } from "@mui/material";

export default function Header() {
  return (
    <AppBar sx={{backgroundColor: '#F6BEC9' }}>
      <Toolbar>
      <img src="/blossom_icon.svg" alt="Blossom Icon" style={{ marginRight: 16, height: 42 }} />
        <span style={{fontSize: 42}}>PomodoroTimer</span>
        <Button sx={{margin:  '0 0 0 auto', color: '#fff'}}>勉強を<br />終える</Button>
      </Toolbar>
    </AppBar>
  )
}
