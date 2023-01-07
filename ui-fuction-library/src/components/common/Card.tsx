import {FC, ReactNode, useState } from 'react'
/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react"
import {f} from "../../emotionStyles/function"

type CardProps = {
  title: string;
  description:string;
  children: ReactNode;
}

const Card:React.FC<CardProps> = ({title,description,children}) => 
{
  const [openChildrenFlag,setOpenChildren] = useState<boolean>(false)
  const onOpenChildren = ()=> {
    setOpenChildren(!openChildrenFlag)
  }
  return(
    <div css={cardWrap}>
      <div css={cardInner}>
        <h3 css={cardTitle}>{title}</h3>
        <p css={cardDescription}>{description}</p>
        <button
          css={[cardDemoButton,openChildrenFlag && cardDemoButtonOpen]}
          onClick={onOpenChildren}
        >
          demo
        </button>
        <div css={[cardChildrenWrap, openChildrenFlag && cardChildrenWrapOpen]}>{children}</div>
      </div>
    </div>
  )
}

const cardWrap = css({
  width:'100%',
  borderTop:'1px solid #D8D8DB',
  borderBottom:'1px solid #D8D8DB',
  "&:nth-of-type(1)":{
    borderTop:'1px solid #D8D8DB',
  }
})

const cardInner = css({
  [f.pc()]: {
    padding: f.vwPc(20),
  },
  [f.sp()]: {
    padding: f.vwSp(20),
  },
})

const cardTitle = css({
  fontSize:'1.625rem',
  fontWeight:'600',
  lineHeight:'1.5',
  color:'#1A1A1C',
  [f.pc()]: {
    marginBottom: f.vwPc(10),
  },
  [f.sp()]: {
    marginBottom: f.vwSp(10),
  },
})

const cardDescription = css({
  fontSize:'1rem',
  lineHeight:'1.5',
  color:'#626264',
  [f.pc()]: {
    marginBottom: f.vwPc(30),
  },
  [f.sp()]: {
    marginBottom: f.vwSp(30),
  },
})

const cardDemoButton = css({
  position:'relative',
  borderRadius:'8px',
  fontSize:'1rem',
  paddingLeft:'1.5em',
  lineHeight:'1.5',
  color:'#626264',
  '&::before': {
    content:'""',
    position:'absolute',
    width:'16px',
    height:'1px',
    backgroundColor:'#626264',
    top:'12px',
    left:'0',
  },
  '&::after': {
    content:'""',
    position:'absolute',
    width:'1px',
    height:'16px',
    backgroundColor:'#626264',
    top:'5px',
    left:'8px',
    opacity:'1',
    transition:'opacity 0.2s ease'
  },
})

const cardDemoButtonOpen = css({
  '&::after': {
    opacity:'0',
  }
})

const cardChildrenWrap = css({
  overflow:'hidden',
  maxHeight:'0px',
  padding:'0',
  transition:'max-height 0.2s ease, padding 0.2s ease'
})
const cardChildrenWrapOpen = css({
  maxHeight:'100vh',
  [f.pc()]: {
    padding: `${f.vwPc(30)} 0 0 0`,
  },
  [f.sp()]: {
    padding: `${f.vwPc(30)} 0 0 0`,
  },
})

export default Card