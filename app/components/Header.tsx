import Image from "next/image";
import { AppBar, Toolbar, Button } from "@mui/material";

export default function Header({ finishStudy }: { finishStudy: () => void }) {
  return (
    <AppBar sx={{ backgroundColor: '#F6BEC9' }}>
      <Toolbar>
        <a href="/">
          <Image height="42" width="42" src="/blossom_icon.svg" alt="Blossom Icon" style={{ marginTop: 5, marginRight: 16 }} />
          <span style={{ fontSize: 42 }} >PomodoroTimer</span>
        </a>
        <Button sx={{ margin: '0 0 0 auto', color: '#fff' }} onClick={finishStudy}>勉強を<br />終える</Button>
      </Toolbar>
    </AppBar>
  )
}
