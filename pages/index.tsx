import { useAppContext } from '@context/AppContext'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const { user } = useAppContext();
    
  return (
    <div>
      <h1>{ user ? "true" : "false" }</h1>
    </div>
  )
}
