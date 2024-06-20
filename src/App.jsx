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
