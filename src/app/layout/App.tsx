import Navbar from './Navbar'
import TicketDashboard from '../../features/tickets/dashboard/TicketDashboard'
import { Grid, GridColumn } from 'semantic-ui-react'

function App() {
  return (
    <>
      <Navbar />
      <Grid style={{ marginTop: '3em' }}>
        <GridColumn
          style={{
            height: '90vh',
            background:
              'linear-gradient(135deg,rgb(54, 8, 128),rgb(27, 23, 92))',
          }}
          width='2'
        ></GridColumn>
        <GridColumn width='14'>
          <TicketDashboard />
        </GridColumn>
      </Grid>
    </>
  )
}

export default App
