import gradient from 'gradient-string'
import { TITLE_TEXT } from './constant'

const poimandresTheme = {
  blue: '#add7ff',
  cyan: '#89ddff',
  green: '#5de4c7',
  magenta: '#fae4fc',
  red: '#d0679d',
  yellow: '#fffac2',
}

export function renderTitle() {
  const vdcGradient = gradient(Object.values(poimandresTheme))

  console.log(vdcGradient.multiline(TITLE_TEXT))
}
