import Navbar from './Navbar'
import TicketDashboard from '../../features/tickets/dashboard/TicketDashboard'
import { Grid, GridColumn } from 'semantic-ui-react'
import { SideFilters } from './SideFilters'

function App() {
  return (
    <>
      <Navbar />
      <Grid>
        <GridColumn
          style={{
            height: '100vh',
            background:
              'linear-gradient(135deg,rgb(54, 8, 128),rgb(27, 23, 92))',
          }}
          width='2'
        >
          <SideFilters />
        </GridColumn>
        <GridColumn width='14'>
          <TicketDashboard />
        </GridColumn>
      </Grid>
    </>
  )
}

export default App
