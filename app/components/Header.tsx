import { AppBar, Toolbar, Button } from "@mui/material";

export default function Header({ finishStudy }: { finishStudy: () => void }) {
  return (
    <AppBar sx={{ backgroundColor: '#F6BEC9' }}>
      <Toolbar>
        <a href="/">
          <img src="/blossom_icon.svg" alt="Blossom Icon" style={{ marginRight: 16, height: 42 }} />
          <span style={{ fontSize: 42 }} >PomodoroTimer</span>
        </a>
        <Button sx={{ margin: '0 0 0 auto', color: '#fff' }} onClick={finishStudy}>勉強を<br />終える</Button>
      </Toolbar>
    </AppBar>
  )
}
