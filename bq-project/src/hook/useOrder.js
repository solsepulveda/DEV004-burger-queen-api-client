import { useContext } from 'react';
import { OrderContext } from '../context/order.jsx';

export const useOrder = () => {
  const order = useContext(OrderContext)

  if (order === undefined){
    throw new Error('useOrder must be used within a OrderProvider')
  }

  return order
}

