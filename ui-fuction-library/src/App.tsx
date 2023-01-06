import React from 'react';
/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react"
import {f} from "./emotionStyles/function"
import Card from './components/common/Card';

const App = () => {
  return (
    <div className="App">
      <div css={contentsWrap}>
        <Card
          title='apply3PointsLeader(text:string, num:number)'
          description='文字列に対して、決められた文字数で3点リーダーを付与する。'
        />
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
