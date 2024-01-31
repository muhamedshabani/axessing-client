import { useState } from 'react'
import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
  Form,
  FormGroup,
  FormButton,
  FormTextArea,
  FormSelect,
  FormInput,
} from 'semantic-ui-react'
import { Ticket } from '../../../app/models/ticket'
import { options } from '../../../app/models/enums/options'

interface Props {
  ticket: Ticket
}

export default function TicketDetails({ ticket }: Props) {
  const [open, setOpen] = useState(false)
  const [editMode, setEditMode] = useState(false)

  const toEuropeanDateTime = (fulldate: string) => {
    let date = fulldate.split('T')[0].split('-').join('.')
    let reversed = date.slice(8, 10) + date.slice(4, 8) + date.slice(0, 4)
    let time = fulldate.split('T')[1].slice(0, 5)
    return reversed + ' at ' + time
  }

  return (
    <Modal
      onClose={() => {
        setOpen(false)
        setEditMode(false)
      }}
      onOpen={() => {
        setOpen(true)
        setEditMode(false)
      }}
      open={open}
      trigger={<Button>Open ticket</Button>}
    >
      {!editMode ? (
        <>
          <ModalHeader>{ticket?.title}</ModalHeader>
          <ModalContent image>
            <Image
              size='medium'
              src='https://react.semantic-ui.com/images/avatar/large/rachel.png'
              wrapped
            />
            <ModalDescription>
              <Header as='h2'>
                Created: {toEuropeanDateTime(ticket?.createdDate)}
              </Header>
              <p>{ticket?.description}</p>
            </ModalDescription>
          </ModalContent>
        </>
      ) : (
        <>
          <ModalHeader>Editing ticket</ModalHeader>
          <Form style={{ margin: '1em' }} action='post'>
            <FormGroup widths='equal'>
              <FormInput fluid label='Title' placeholder='Title...' />
              <FormSelect
                fluid
                label='Stage'
                selectedLabel={ticket.stage.toString()}
                options={options}
              />
            </FormGroup>
            <FormTextArea
              rows={10}
              value={ticket.description}
              label='Description'
              placeholder='Description...'
            />
            <FormGroup>
              <FormButton secondary>Attach files</FormButton>
              <FormButton primary icon='check'>
                Save
              </FormButton>
              <FormButton secondary onClick={() => setEditMode(false)}>
                Close
              </FormButton>
            </FormGroup>
          </Form>
        </>
      )}
      {!editMode && (
        <ModalActions>
          <Button color='orange' onClick={() => setEditMode(true)}>
            Edit
          </Button>
          <Button color='black' onClick={() => setOpen(false)}>
            Close
          </Button>
        </ModalActions>
      )}
    </Modal>
  )
}
