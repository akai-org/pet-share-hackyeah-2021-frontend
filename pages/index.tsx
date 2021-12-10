import type { NextPage } from 'next'
import Test from '@components/test';

const Home: NextPage = () => {
  return (
    <Test TestProp='Test Message' />
  )
}

export default Home
