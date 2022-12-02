import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { cartSliceThunk, checkOutCartThunk} from '../store/slices/cart.slice';



const cartSidebar = ({ show, handleClose }) => {

    const dispatch = useDispatch()
    const cartSide = useSelector(state => state.cart)

    useEffect(() => {
        dispatch(cartSliceThunk())
    }, [])
    
    return (
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title className='fa-brands fa-opencart fa-2xl'></Offcanvas.Title>
            </Offcanvas.Header>
               
            <Offcanvas.Body >
              {cartSide.map((cart) => (
                
                <div  key={cart.id}>{cart.title} </div>
              ))} 
              <Button onClick={() => dispatch (checkOutCartThunk())}>Checkout</Button>
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default cartSidebar; 