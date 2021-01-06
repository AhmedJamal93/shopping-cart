import React from 'react';
import PropTypes from 'prop-types';
import './CartPage.css';
import Item from './Item';

function CartPage({ items, onAddOne, onRemoveOne }){
    return(
        <ul className="CartPage-items">
            {items.map(item =>
                <li key={item.id} className="CartPage-item">
                    <Item item={item}>
                        <div className="CartItem-controls">
                            <button
                                className="CartItem-removeOne"
                                onClick={() => onRemoveOne(item)}
                            >
                                &ndash;
                            </button>
                            <span className="CarItem-count">{item.count}</span>
                            <button
                                className="CartItem-addOne"
                                onClick={() => onAddOne(item)}
                            >
                                +
                            </button>
                        </div>
                    </Item>
                </li>
            )}
        </ul>
    )
}
CartPage.propTypes = {
    items: PropTypes.array.isRequired
}

export default CartPage;
