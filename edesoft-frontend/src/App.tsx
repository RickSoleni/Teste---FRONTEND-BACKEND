import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import Users from './components/Users';
import toast, {Toaster} from 'react-hot-toast'
import {Header, Icon, Button, Container} from 'semantic-ui-react'; 


interface UserProps {
  users: User[]
}

interface Name {
  firstName: string
  lastName: string
}

interface User {
  name: Name
  email: string
  username: string
  phone: string
}
// {users}: UserProps
// {users.map(user => {
//   return (
//     <tr>
//     <td>{user.name}</td>
//     <td>{user.email}</td>
//     <td>{user.username}</td>
//     <td>{user.phone}</td>
//     </tr>
//   )
// })}


function App() {
  return (
    <div>
      <div><Toaster/></div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>Users</Header.Content>
    </Header>
      <Container textAlign='center' style={{paddingBottom: '20px'}}>
      <Button animated='vertical' size='large' style={{padding: "10px 35px 10px 35px"}}>
        <Button.Content hidden> New User </Button.Content>
        <Button.Content visible>
          <Icon name='add user' />
        </Button.Content>
      </Button>
      </Container>
      <Users></Users>
    </div>
  );
}

export default App;
