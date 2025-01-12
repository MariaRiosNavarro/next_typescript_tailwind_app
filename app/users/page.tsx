import React from 'react'


interface User {
    id: number;
    name: string;
}

const UsersPage = async() => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users",
        { cache: 'no-store'} // Daten wechseln häufig. Dynamic Reendering (npm run build -> npm start) statt Static (wichtig für wechselden Komponenten wie new Date()
        // { next: {revalidate: 10} } //Refresh data jeder 10 sekunden, nur in "fetch" nicht in Axios
    )
    const users: User[] = await res.json()

    return (
        <>
            <h1>Users</h1>
            <p>{new Date().toLocaleTimeString()}</p>
            <ul>
                {users.map(user=> <li key={user.id}>{user.name}</li>)}
            </ul>
        </>
  )
}

export default UsersPage