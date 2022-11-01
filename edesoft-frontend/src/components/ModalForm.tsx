import { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useAppDispatch, useAppSelector } from '../redux/hooks'
import {setUsers} from '../redux/userSlice'
import { useForm } from 'react-hook-form';


export default function ModalForm(props: any) {

    const users = useAppSelector(state => state.users.users)
    const dispatch = useAppDispatch()
    const [user, setUser] = useState(props.user)
    const { register, handleSubmit, formState: { errors } } = useForm();

    async function onSubmit(data: any) {
        console.log(data)
        let userObj = {name: {firstname: data.firstname, lastname: data.lastname}, email: data.email, phone: data.phone, username: data.username,}
        let usersClone = [...users]
        let userClone = {...user}
        const usrIndex = usersClone.findIndex((user) => user.id === userClone.id);
        if (usrIndex === -1) {
            
            let response = await fetch('https://fakestoreapi.com/users',{
                method:"POST",
                body:JSON.stringify(userObj)
            })
            await response.json()
            const [lastUser] = users.slice(-1)
            let newUser = {...userObj, id: lastUser.id + 1}
            usersClone = [newUser, ...users]
            dispatch(setUsers(usersClone))
        
        } else {

        let response = await fetch(`https://fakestoreapi.com/users/${user?.id}`,{
            method:"PUT",
            body:JSON.stringify(userObj)
            })
        await response.json()

        usersClone[usrIndex] = {...userClone, ...userObj}
        dispatch(setUsers(usersClone))
        }
    props.submitButton()
    }

    return(
        <Form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="firstname">First name</label>
                <input
                id='firstname'
                placeholder='First name'
                {...register("firstname", {})}
                defaultValue={user?.name?.firstname}
                />
                <label htmlFor="lastname">Last name</label>
                <input
                id='lastname'
                placeholder='Last name'
                defaultValue={user?.name?.lastname}
                {...register("lastname", {})}

                />
            <label htmlFor="email">Email</label>
            <input id='email'  {...(register("email", {}))} defaultValue={user?.email}/>
            <label htmlFor="phone">Phone</label>
            <input id='phone' {...register("phone", {})} defaultValue={user?.phone}/>
            <label htmlFor="username">Username</label>            
            <input id='username' {...register("username", {})} defaultValue={user?.username}/>
            <div style={{marginTop: '10px', textAlign: 'right'}}>
            <Button
          content="Submit"
          labelPosition='right'
          icon='checkmark'
          positive
            />
            <Button color='black' onClick={() => props.submitButton()}>

            Cancel
            </Button>
            </div>
        </Form>
)
    }