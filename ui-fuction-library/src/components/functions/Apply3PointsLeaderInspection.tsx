import { FormProvider, useForm } from "react-hook-form";
import { TextInput } from "../common/TextInput";

import  apply3PointsLeader from  "./utility/apply3PoinstsLeader"

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import {f} from "../../emotionStyles/function"
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
      <form onSubmit={handleSubmit}>
        <div css={formArea}>
          <TextInput<FormData> 
            name="freeText" 
            placeHolder="自由なテキスト" 
            labelText="text"
            required={true}
          />
          <TextInput<FormData>
            name="maxNum" 
            placeHolder="最大文字数" 
            labelText="num"
            required={true}
          />
          <input type="submit" />
        </div>
      </form>
      {resultText !== '' &&(
        <div>
          <span>結果</span>
          <p>{resultText}</p>
        </div>
      )}
    </FormProvider>
  );
};

const formArea = css({
  display:'flex',
  alignItems:'center',
  [f.pc()]: {
    marginBottom: f.vwPc(12),
    gap:f.vwPc(12)
  },
  [f.sp()]: {
    padding: f.vwSp(12),
    gap:f.vwSp(12)
  },
})

export default Apply3PointsLeaderInspection;