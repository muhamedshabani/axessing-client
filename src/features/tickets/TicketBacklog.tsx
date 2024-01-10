import React, { useState } from 'react'
import { Ticket } from '../../app/models/ticket'
import { List } from 'semantic-ui-react'
import axios from 'axios'

export const TicketBacklog = () => {
  const [tickets, setTickets] = useState<Ticket[]>()
  const [loading, setLoading] = useState(true)

  axios
    .get('http://localhost:5000/api/ticket?workspaceid=1&backlog=true')
    .then((response) => {
      setTickets(response.data)
      setLoading(false)
    })

  return (
    <div>
      <List>
        {!loading &&
          tickets?.map((ticket) => (
            <List.Item>
              {ticket.stage}: {ticket.title}
            </List.Item>
          ))}
      </List>
    </div>
  )
}
