import { createContext } from 'react';

export const CartContext = createContext({
  items: [],
  addItemsToCart: () => {},
  // Setting the default value here is optional.
  // But why is setting default value here useful?
  // Because you get better auto completion
});
