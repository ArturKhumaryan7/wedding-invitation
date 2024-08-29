import './App.css'
import { AcceptInvitationSection } from './modules/components/AcceptInvitationSection'
import { CountdownSection } from './modules/components/CountdowSection'
import { Header } from './modules/components/Header'
import { InvitationContent } from './modules/components/InvitationContent'
import { Project } from './modules/components/Project'

function App() {

  return (
    <div className='main-container'>
      <Header/>
      <CountdownSection/>
      <InvitationContent/>
      <Project/>
      <AcceptInvitationSection/>
    </div>
  )
}

export default App
