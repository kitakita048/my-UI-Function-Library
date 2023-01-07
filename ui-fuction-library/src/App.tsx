import {useState} from 'react';
/** @jsxImportSource @emotion/react */
import {css} from "@emotion/react"
import {f} from "./emotionStyles/function"
import IndexFunctions from './components/functions/indexFunctions';

const App = () => {
  const [selectCategory,setSelectCategory] = useState<string>("Functions")
  const handleCategoryClick = (item:string) =>{
    setSelectCategory(item)
  }
  const categoryArray: string[] = ["UI","Functions","Animation"]
  const categoryList = categoryArray.map(item => {
    return(
      <li
        key={item}
        onClick={() => handleCategoryClick(item)}
        css={[listItem, selectCategory === item && isActive]}
      >
        {item}
      </li>
    )
  })
  
  return (
    <div className="App">
      <div css={contentsWrap}>
        <ul css={categoryListArea}>
          {categoryList}
        </ul>
        {selectCategory === "Functions" &&(
          <IndexFunctions/>
        )}
        {selectCategory === "UI" &&(
          <p>comming soon</p>
        )}
        {selectCategory === "Animation" &&(
          <p>comming soon</p>
        )}

      </div>
    </div>
  );
}

const contentsWrap = css({
  width:'100%',
  [f.pc()]: {
    padding: `${f.vwPc(16)} ${f.vwPc(32)} ${f.vwPc(32)} ${f.vwPc(32)}`,
  },
  [f.sp()]: {
    padding: `${f.vwSp(16)} ${f.vwSp(32)} ${f.vwSp(32)} ${f.vwSp(32)}`,
  },
})

const categoryListArea = css({
  display:"flex",
  alignItems:"center",
  [f.pc()]: {
    gap: f.vwPc(24),
    marginBottom:f.vwPc(32)
  },
  [f.sp()]: {
    gap: f.vwSp(24),
    marginBottom:f.vwSp(32)
  },
  "li":{
    cursor:"pointer"
  }
})

const listItem = css({
  fontSize:"1.25rem",
  fontWeight:'700',
  lineHeight:'1.5',
  color:"#003EE5",
  textAlign:"center",
  textDecorationLine:'underline',
  '&:hover':{
    color:'#0030B2'
  },
})
const isActive = css({
  color:'#0030B2'
})
export default App;
