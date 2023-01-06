import React from 'react';
/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react"
import {f} from "./emotionStyles/function"

const App = () => {
  return (
    <div className="App">
      <div css={contentsWrap}>
        hoge
      </div>
      
    </div>
  );
}

const contentsWrap = css({
  width:'100%',
  [f.pc()]: {
    padding: f.vwPc(30),
  },
  [f.sp()]: {
    padding: f.vwSp(30),
  },

})

export default App;
