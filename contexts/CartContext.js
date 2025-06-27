// /contexts/CartContext.js

const { createContext } = require("react");

const CartContext = createContext();

export function CartProvider({ children}) {
    const [cart, setCart] = useState([]);

    const addToCart = (course) => {
        
    }
}