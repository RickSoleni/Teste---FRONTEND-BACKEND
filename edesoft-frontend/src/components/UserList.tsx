import { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { setUsers } from '../redux/userSlice';
import User from './User'




export default function UserList() {

    const [loading, setLoading] = useState<boolean>(false)
    
    const users = useAppSelector(state => state.users.users)

    const dispatch = useAppDispatch()

    useEffect(() => {
        fetchUsers()
    }, []);

    async function fetchUsers() {
        console.log("teste")
        const response = await fetch('https://fakestoreapi.com/users');
        const data = await response.json()

        console.log(data)
    
        dispatch(setUsers(data))
        setLoading(false)

        console.log(users)
    }


    return (
        <>
        {users.map(user => {return <User key={user.id} user={user} />})}
        </>
        )
    
}