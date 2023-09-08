import React, { createContext, useContext, useReducer } from 'react'

// Créez le contexte
const SessionContext = createContext()

// Créez le réducteur
const sessionReducer = (state, action) => {
    switch (action.type) {
    case 'INIT_USER':
        return { ...state, initUser: action.payload }
    case 'LOGIN':
        return { ...state, user: action.payload }
    case 'LOGOUT':
        return { ...state, user: null }
    default:
        return state
    }
}

// Créez le fournisseur de contexte
// const SessionProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(sessionReducer, { user: null })

//     return (
//         <SessionContext.Provider value={{ state, dispatch }}>
//             {children}
//         </SessionContext.Provider>
//     )
// }

const SessionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(sessionReducer, { user: null, initUser: null }) // Ajoutez initUser

    return (
        <SessionContext.Provider value={{ state, dispatch }}>
            {children}
        </SessionContext.Provider>
    )
}

// Créez un hook personnalisé pour accéder au contexte
const useSession = () => {
    const context = useContext(SessionContext)
    if (!context) {
        throw new Error('useSession doit être utilisé dans un SessionProvider')
    }
    return context
}

export { SessionProvider, useSession }
