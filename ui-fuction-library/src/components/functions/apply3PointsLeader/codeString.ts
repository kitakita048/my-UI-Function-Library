export const codeString:string = `/**
  * @param {string} text 文字列
  * @param {number} maxNum 何文字で3点リーダーを追加するか
  * @return {string} 3点リーダー付き文字列
*/
  export default function apply3PointsLeader(text:string, maxNum:number):string{
    const addText = '…'
    if(text.length >= maxNum) 
    return String(text.substring(0, maxNum - 1) + addText)
    else return text
  }`
