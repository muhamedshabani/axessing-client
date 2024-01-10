import Navbar from './Navbar'
import TicketDashboard from '../../features/tickets/dashboard/TicketDashboard'
import { Grid, GridColumn } from 'semantic-ui-react'

function App() {
  return (
    <>
      <Navbar />
      <Grid style={{ marginTop: '3em' }}>
        <GridColumn width='2'>Test</GridColumn>
        <GridColumn width='14'>
          <TicketDashboard />
        </GridColumn>
      </Grid>
    </>
  )
}

export default App
