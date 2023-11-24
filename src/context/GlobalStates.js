import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transactions: []
}



export const GlobalContext = createContext(initialState);


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState); 
    function deleteTransaction(id) {
        dispatch({
            type: 'Delete_All',
            payload: id
        });
    }
    function addTransaction(transaction) {
        dispatch({
            type: 'Add_All',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={ {
       transactions: state.transactions,
       deleteTransaction,
       addTransaction
    }}>
    {children}
    </GlobalContext.Provider>);
}
