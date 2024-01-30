import { List, Segment } from 'semantic-ui-react'
import { Ticket } from '../../../app/models/ticket'
import { TicketCard } from './TicketCard'
import { useEffect, useState } from 'react'

interface Props {
  tickets: Ticket[]
}

export const TicketList = ({ tickets }: Props) => {
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setLoading(tickets.length > 0 ? false : true)
  }, [tickets])

  return (
    <List>
      {!loading ? (
        tickets.map((ticket) => <TicketCard key={ticket.id} ticket={ticket} />)
      ) : (
        <Segment tertiary>No tickets in this stage!</Segment>
      )}
    </List>
  )
}
