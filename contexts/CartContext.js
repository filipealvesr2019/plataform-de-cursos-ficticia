// /contexts/CartContext.js

const { createContext } = require("react");

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        setCart((prev) => [...prev, course])
    }

    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((course) => course._id !== id));
    }

    const clearCart = () => setCart([]);
    
    const total = cart.reduce((sum, course) => sum + course.price, 0);

    return (
        <CartContext.Provider 
        value={{ cart, addToCart, removeFromCart, clearCart, total}}
        >
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    return useContext(CartContext);
}