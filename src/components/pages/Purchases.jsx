import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getFavoritesThunk } from "../../store/slices/favorites.slice";


const Favorites = () => {
    const dispatch = useDispatch();
    const favorites = useSelector(state => state.favorite)

    useEffect(() => {
        dispatch(getFavoritesThunk());
    }, []);

    return (
        <div>
            <h1>Purchase</h1>

            {
                favorites.map(purchase => (
                    <li key={purchase.id}>
                        {purchase.cart.products.map(product => (
                            <li>
                                <Link to={`/products/${product.id}`}>
                                <h3><b>Product: </b>{product.title}</h3>
                                <h3><b>Price: </b>${product.price}</h3>
                                <h3><b>Purchase Date: </b>{product.createdAt}</h3>
                                </Link>
                            </li>
                        ))}
                    </li>
                ))
            }

        </div>
    );
};

export default Favorites;
