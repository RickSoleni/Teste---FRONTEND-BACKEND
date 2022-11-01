import React, { ReactElement } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ModalForm from './ModalForm';
import { UserType } from './User';

export interface ModalProps {
    trigger?: React.ReactNode;
    user ?: UserType;
}

function AddModal(props: ModalProps) {
  const [open, setOpen] = React.useState(false)
  const {trigger} = props

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>Add new User</Modal.Header>
      <Modal.Content>
        <ModalForm user={{}} submitButton={() => setOpen(false)}/>
      </Modal.Content>
    </Modal>
  )
}

export default AddModal