import React from 'react'

const UserContext = React.createContext();
// context will give provider

export default UserContext;

// here all the components will be able to access the 
{/* <UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
</UserContext> */}