import './App.css'
import { CountdownSection } from './modules/components/CountdowSection'
import { Header } from './modules/components/Header'
import { InvitationContent } from './modules/components/InvitationContent'

function App() {

  return (
    <div className='main-container'>
      <Header/>
      <CountdownSection/>
      <InvitationContent/>
    </div>
  )
}

export default App
