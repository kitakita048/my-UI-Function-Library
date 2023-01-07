import React, { lazy, Suspense } from 'react'

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
            labelText="num"
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
    marginBottom: f.vwPc(12),
    gap:f.vwPc(12),
    alignItems:'center'
  },
  [f.sp()]: {
    marginBottom: f.vwSp(24),
    gap:f.vwSp(12),
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
      marginBottom:f.vwPc(12)
    },
    [f.sp()]: {
      marginBottom:f.vwSp(12)
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
  }
})



export default Apply3PointsLeaderInspection;