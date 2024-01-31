import {
  Button,
  Form,
  FormButton,
  FormGroup,
  FormInput,
  FormSelect,
  FormTextArea,
  Modal,
  ModalContent,
} from 'semantic-ui-react'
import { useState } from 'react'
import { User } from '../../../app/models/user'
import { options } from '../../../app/models/enums/options'

interface Props {
  collaborators?: User[]
}

export default function CreateTicket({ collaborators }: Props) {
  const [open, setOpen] = useState(false)

  const collaboratorsDropdown = collaborators?.map((collaborator) => ({
    text: collaborator.name,
    value: collaborator.id,
  }))!

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <Button positive type='submit' content='New Ticket' icon='plus' />
      }
    >
      <ModalContent>
        <Form action='post'>
          <FormGroup widths='equal'>
            <FormInput fluid label='Title' placeholder='Title...' />
            <FormSelect
              fluid
              label='Stage'
              selectedLabel={'Open'}
              options={options}
              placeholder='Open (default)'
            />
            <FormSelect
              fluid
              label='Assign'
              placeholder='Assign this ticket to: '
              options={collaboratorsDropdown}
            />
          </FormGroup>
          <FormTextArea
            rows={10}
            label='Description'
            placeholder='Description...'
          />
          <FormGroup>
            <FormButton secondary>Attach files</FormButton>
            <FormButton primary icon='check'>
              Submit
            </FormButton>
            <FormButton onClick={() => setOpen(false)}>Close</FormButton>
          </FormGroup>
        </Form>
      </ModalContent>
    </Modal>
  )
}
