import React from 'react'
import UserContext from './UserContext'
import PropTypes from 'prop-types'

function UserContextProvider({children}) {
    
    const [user,setUser] = React.useState(null);

    return (
        <>
            <UserContext.Provider value={{user,setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

UserContextProvider.propTypes = {
    children : PropTypes.object
}

export default UserContextProvider