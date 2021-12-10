import React, {FunctionComponent} from 'react'

type Props = {
  TestProp: string
}

const Test: FunctionComponent<Props> = ({TestProp}) => (
  <div>
    <h1>Message from lib component: {TestProp}</h1>
  </div>
)

export default Test;
