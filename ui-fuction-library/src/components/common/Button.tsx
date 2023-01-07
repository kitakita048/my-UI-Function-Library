import {FC, ReactNode, useState } from 'react'

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"

type ButtonProps = {
  title:string,
  onClick:()=> void;
}

export const Button:React.FC<ButtonProps> = ({title,onClick}) =>{
  return(
    <button 
      type="submit" 
      css={submitButton}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

const submitButton = css({
  fontSize:"1rem",
  fontWeight:'700',
  lineHeight:'1.5',
  color:"#003EE5",
  textAlign:"center",
  textDecorationLine:'underline',
  '&:hover':{
    color:'#0030B2'
  }
})

export default Button