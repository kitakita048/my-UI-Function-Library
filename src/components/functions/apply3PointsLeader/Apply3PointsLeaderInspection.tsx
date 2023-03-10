import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../../common/TextInput";
import { Button } from "../../common/Button"

import apply3PointsLeader from  "./apply3PoinstsLeader"
import {codeString} from './codeString';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import {f} from "../../../emotionStyles/function"
import { useState } from "react";

type FormData = {
  freeText: string;
  maxNum: string;
};

const Apply3PointsLeaderInspection: React.FC = () => {
  const methods = useForm<FormData>();
  const [resultText,setResult] = useState<string>('')
  const handleSubmit = methods.handleSubmit((data) => {
    const text = apply3PointsLeader(data.freeText, Number(data.maxNum))
    setResult(text)
  });
  return (
    <FormProvider {...methods}>
      <form>
        <div css={formArea}>
          <TextInput<FormData> 
            name="freeText" 
            placeHolder="自由なテキスト" 
            labelText="text"
            required={false}
          />
          <TextInput<FormData>
            name="maxNum" 
            placeHolder="最大文字数" 
            labelText="maxNum"
            required={false}
          />
        </div>
        <Button title="結果を表示" onClick={handleSubmit}/>
      </form>
      {resultText !== '' &&(
        <div css={resultArea}>
          <span>return</span>
          <p>{resultText}</p>
        </div>
      )}
      <div css={codeArea}>
        <h4 css={codeHdg}>SourceCode</h4>
        <SyntaxHighlighter language='typescript' style={atomOneDarkReasonable}>
          {codeString}
        </SyntaxHighlighter>
      </div>
    </FormProvider>
  );
};

const formArea = css({
  display:'flex',
  [f.pc()]: {
    marginBottom: f.vwPc(24),
    gap:f.vwPc(8),
    alignItems:'center'
  },
  [f.sp()]: {
    marginBottom: f.vwSp(24),
    gap:f.vwSp(8),
    flexDirection:"column"
  },
})

const resultArea = css({
  [f.pc()]: {
    marginTop: f.vwPc(24),
  },
  [f.sp()]: {
    marginTop: f.vwSp(24),
  },
  "span":{
    display:"block",
    fontSize:'0.985rem',
    fontWeight:'500',
    color:'#1A1A1C',
    lineHeight:'1.5',
    [f.pc()]: {
      marginBottom:f.vwPc(8)
    },
    [f.sp()]: {
      marginBottom:f.vwSp(8)
    },
  },
  "p":{
    fontSize:'1.25rem',
    fontWeight:'700',
    lineHeight:'1.5',
    color:'#1A1A1C',
  }
})

const codeArea = css({
  [f.pc()]: {
    marginTop:f.vwPc(24)
  },
  [f.sp()]: {
    marginTop:f.vwSp(24)
  },
  "pre":{
    overflow:"scroll !important"
  },
  "code":{
    lineHeight:"1.5",
    fontSize:"0.85rem"
  }
})

const codeHdg =css({
  fontSize:"1.375rem",
  fontWeight:"700",
  lineHeight:"1.5",
  [f.pc()]: {
    marginBottom:f.vwPc(8)
  },
  [f.sp()]: {
    marginBottom:f.vwSp(8)
  },
})


export default Apply3PointsLeaderInspection;