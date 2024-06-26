import Image from "next/image";
import { AppBar, Toolbar, Button } from "@mui/material";
import { Mode } from "../types/mode";

export default function Header({ finishStudy, mode }: { finishStudy: () => void, mode: Mode }) {
  return (
    <AppBar sx={{ backgroundColor: '#F6BEC9' }}>
      <Toolbar>
        <a href="/">
          <Image height="42" width="42" src="/blossom_icon.svg" alt="Blossom Icon" style={{ marginTop: 5, marginRight: 16 }} />
          <span style={{ fontSize: 42 }} >PomodoroTimer</span>
        </a>
        {(mode === Mode.Studying || mode === Mode.Breaking) && (
          // 勉強中
          <Button sx={{ margin: '0 0 0 auto', color: '#fff' }} onClick={finishStudy}>勉強を<br />終える</Button>
        )}
        {(mode === Mode.Finished) && (
          // 勉強中
          <Button sx={{ margin: '0 0 0 auto', color: '#fff' }} onClick={()=> window.location.reload()}>勉強を<br />始める</Button>
        )}

      </Toolbar>
    </AppBar>
  )
}
