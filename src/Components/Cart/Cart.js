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
                    return (
                        <div className="card">
                            <img src={item.image} width={100} />
                            <div className="desc">
                                <h4>{item.title}</h4>
                                <h5>{item.price}</h5>
                                <p>{item.description}</p>
                            </div>
                            <h1 onClick={() => dispatch({ type: 'REMOVE', paylode: item })}>X</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cart