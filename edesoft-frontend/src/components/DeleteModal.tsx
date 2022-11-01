import React from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { setUsers } from '../redux/userSlice';
import {ModalProps} from './AddModal';

function DeleteModal(props: ModalProps) {
  const [open, setOpen] = React.useState(false)
  const {trigger, user} = props
  const users = useAppSelector(state => state.users.users)
  const dispatch = useAppDispatch()

  

  async function handleDelete() {

    let usersClone = [...users]
    const newUsers = usersClone.filter((_user) => {
      return _user.id !== user?.id;
    });
    
    let response = await fetch(`https://fakestoreapi.com/users/${user?.id}`,{
      method:"DELETE"
    })
    await response.json()
    dispatch(setUsers(newUsers))
    setOpen(false)
  }

  return (
    <Modal
      closeIcon
      open={open}
      trigger={trigger}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
    >
      <Header icon='remove user' content='Remove User' />
      <Modal.Content>
        <p>
          Are you sure you want to delete user?
        </p>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={() => setOpen(false)}>
          <Icon name='remove' /> No
        </Button>
        <Button color='green' onClick={() => handleDelete()}>
          <Icon name='checkmark' /> Yes
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default DeleteModal