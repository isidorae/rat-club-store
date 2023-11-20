import { createContext } from 'react'

const OrderContext = createContext()

const OrderProvider = ({children}) => {
   
    
const data = {}

    return(
        <OrderContext.Provider value={data}>
            {children}
        </OrderContext.Provider>
    )
}