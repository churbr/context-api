import Header from './components/Header';
import Shop from './components/Shop';
import Product from './components/Product';
import { DUMMY_PRODUCTS } from './dummy-products.js';
import { CartContextProvider } from './store/shopping-cart-context.jsx';

function App() {
  return (
    <CartContextProvider>
      {/* 
        Always provide the value to the Provider wrapper to avoid error (see below):
        Warning: The `value` prop is required for the `<Context.Provider>`.
        Did you misspell it or forget to pass it?  
      */}
      <Header
      // cart={shoppingCart}
      // onUpdateCartItemQuantity={handleUpdateCartItemQuantity}
      />
      <Shop>
        {DUMMY_PRODUCTS.map((product) => (
          <li key={product.id}>
            <Product
              {...product}
              // onAddToCart={handleAddItemToCart}
            />
          </li>
        ))}
      </Shop>
    </CartContextProvider>
  );
}

export default App;

// import React from 'react';

// export function counterReducer(state, action) {
//     if(action.type === 'INCREMENT') {
//         return {
//             count: state.count+1
//         };
//     }

//     if(action.type === 'DECREMENT') {
//         return {
//             count: state.count-1
//         };
//     }

//     if(action.type === 'RESET') {
//         return {
//             count: 0
//         };
//     }

//     return state;
// }

// function App() {
//     const [state, dispatch] = React.useReducer(counterReducer, {
//         count: 0
//     });

//   return (
//     <div id="app">
//       <h1>The (Final?) Counter</h1>
//       <p id="actions">
//         <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//         <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//         <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
//       </p>
//       <p id="counter">{state.count}</p>
//     </div>
//   );
// }

// export default App;
