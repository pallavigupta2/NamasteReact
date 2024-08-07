import {useDispatch, useSelector} from 'react-redux';
import RestrauntList from "./RestrauntList";
import { clearItems } from '../utils/CartSlice';

const Cart=()=>{
    const cartData = useSelector((store)=>store.cart.items);
    console.log('redux123',cartData)
    const dispatch = useDispatch()
    const handleRemoveAll=()=>{
            dispatch(clearItems())
    }
    return(
        <div className="m-5 mx-[100px]">
            <h1 className="text-lg font-bold text-center">Cart</h1>
            <button className='m-1 bg-black px-2 py-1 text-white' onClick={handleRemoveAll}>Remove All</button>
            {
                cartData &&  <div className='mt-2'><RestrauntList items={cartData}/></div>
            }
            
        </div>
    )
}

export default Cart;