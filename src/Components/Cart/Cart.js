import React, { useContext } from 'react'
import { CartContext } from '../Context/Context'

const Cart = () => {
    const GlobalState = useContext(CartContext);
    const state = GlobalState.state;
    const dispatch = GlobalState.dispatch;
    return (
        <div>
            {
                state.map((item, index) => {
                    return <div className="card">
                        <img src={item.image} width={200} />
                    </div>
                })
            }
        </div>
    )
}

export default Cart