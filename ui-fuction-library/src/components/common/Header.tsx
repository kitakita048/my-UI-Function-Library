
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import {f} from "../../emotionStyles/function"
const Header = ()=>{
  return(
    <header css={header}>
      <h1 css={title}>UI・Function・Animation Library</h1>
    </header>
  )
}

const title = css({
  fontSize:'2.625rem',
  fontWeight:'700',
  lineHeight:'1.5',
  color:'#1A1A1C',
})

const header = css({
  width:'100%',
  [f.pc()]: {
    padding: f.vwPc(30),
  },
  [f.sp()]: {
    padding: f.vwSp(30),
  },
})

export default Header;