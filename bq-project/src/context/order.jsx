import { createContext, useState } from "react";

export const OrderContext = createContext()

export function OrderProvider({ children }) {
  const [order, setOrder] = useState([])

  const addToOrder = product => {
    const productInOrderIndex = order.findIndex(item => item.id === product.id)
    if (productInOrderIndex >= 0) {
      const newOrder = structuredClone(order)
      newOrder[productInOrderIndex].quantity += 1
      return setOrder(newOrder)
    }

    setOrder(prevState => ([
      ...prevState,
      { 
        ...product,
        quantity: 1
      }
    ]))
  }

  

  const clearOrder = () => {
    setOrder([])
  }

  return (
    <OrderContext.Provider value={{
      order,
      addToOrder,
      clearOrder
    }}>
      {children}
    </OrderContext.Provider>    
  )
}