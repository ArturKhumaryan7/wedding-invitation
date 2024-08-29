import './App.css'
import { SnackbarProvider } from 'notistack';
import { AcceptInvitationSection } from './modules/components/AcceptInvitationSection'
import { CountdownSection } from './modules/components/CountdowSection'
import { Header } from './modules/components/Header'
import { InvitationContent } from './modules/components/InvitationContent'
import { Project } from './modules/components/Project'
import { MaterialDesignContent } from 'notistack'
import styled from '@emotion/styled'

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#2D7738',
    borderRadius: '12px'
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
    borderRadius: '12px'
  },
}));

function App() {

  return (
    <div className='main-container'>
        <SnackbarProvider 
          autoHideDuration={2000}   
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'center',
          }}
          Components={{
            success: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
          }}
          >      
            <Header/>
            <CountdownSection/>
            <InvitationContent/>
            <Project/>
            <AcceptInvitationSection/>
        </SnackbarProvider>
    </div>
  )
}

export default App
