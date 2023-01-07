import Card from '../common/Card';
import Apply3PointsLeaderInspection from './apply3PointsLeader/Apply3PointsLeaderInspection';

const IndexFunctions = () =>{
  return (
    <Card
      title='apply3PointsLeader(text:string, maxNum:number)'
      description='文字列に対して、設定した最大文字数から3点リーダーを付与する。'
    >
      <Apply3PointsLeaderInspection/>
    </Card>
  )
}

export default IndexFunctions