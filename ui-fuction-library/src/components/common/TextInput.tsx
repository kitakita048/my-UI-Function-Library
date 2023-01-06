import { useFormContext } from "react-hook-form";
import type { Path,FieldValues } from "react-hook-form";

/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import {f} from "../../emotionStyles/function"

type TextInputProps<T> = {
  name: Path<T>;
  placeHolder:string;
  labelText:string;
  required:boolean
};
export const TextInput = <T extends FieldValues = never>({
  name,
  placeHolder,
  labelText,
  required
}: TextInputProps<T>): ReturnType<React.FC> => {
  const { register } = useFormContext();
  return (
    <label>
      <div css={labelArea}>
        <span css={inputLabelText}>{labelText}</span>
        {required && (
          <span css={requiredText}>必須</span>
        )}
      </div>
      <input css={inputArea} type="text" {...register(name)} placeholder={placeHolder} />
    </label>
  )
};

const labelArea = css({
  display:'flex',
  alignItems:'center',
  [f.pc()]: {
    marginBottom: f.vwPc(8),
    gap:f.vwPc(8)
  },
  [f.sp()]: {
    padding: f.vwSp(8),
    gap:f.vwSp(8)
  },
})

const inputLabelText = css({
  fontSize:'0.985rem',
  fontWeight:'500',
  color:'#1A1A1C',
  lineHeight:'1.5',
})

const requiredText = css({
  color:'#EC0000',
  fontWeight:'400',
  fontSize:'0.85rem',
  lineHeight:'1.5'
})

const inputArea = css({
  maxWidth:"300px",
  border:'1px solid #1A1A1C',
  backgroundColor:"#fff",
  borderRadius:'8px',
  fontSize:'1rem',
  lineHeight:'1.5',
  padding:'12px',
  "&::placeholer":{
    color:"#757578"
  },
  "&:focus":{
    border:'1px solid #D18D0F',
  }
})