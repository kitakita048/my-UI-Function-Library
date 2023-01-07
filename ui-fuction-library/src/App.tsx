import React from 'react';
/** @jsxImportSource @emotion/react */

import {css} from "@emotion/react"
import {f} from "./emotionStyles/function"
import Card from './components/common/Card';
import Apply3PointsLeaderInspection from './components/functions/Apply3PointsLeaderInspection';

const App = () => {
  return (
    <div className="App">
      <div css={contentsWrap}>
        <Card
          title='apply3PointsLeader(text:string, maxNum:number)'
          description='文字列に対して、設定した文字数から3点リーダーを付与する。'
        >
          <Apply3PointsLeaderInspection/>
        </Card>
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
