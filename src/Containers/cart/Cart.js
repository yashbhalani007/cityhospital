
import React from 'react';
import Button from '../../components/UI/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

function Cart(props) {

    const dispatch = useDispatch()
    const m1 = useSelector((state) => state.medicines)

    const c1 = useSelector((state) => state.cart)

    let cartitems = c1.cart.map((v) => {
        let medicinceData = m1.medichines.find((m) => m.id === v.id);

        let fData = { ...medicinceData, ...v };

        return fData
    })

    const handleInc = (id) => {

    }

    const handleDec = (id) => {

    }

    return (
        <>

            <div className="card">
                <div className="row">
                    <div className="col-md-8 cart">
                        <div className="title">
                            <h4><b>Shopping Cart</b></h4><br></br>


                            <div className="row">
                                <div className="col">Item</div>
                                <div className="col align-self-center text-right text-muted">Qty</div>
                                <div className="col align-self-center text-right text-muted">Price</div>
                            </div>
                        </div>

                        {
                            cartitems.map((c) => {
                                return (
                                    <div className="row border-top border-bottom">
                                        <div className="row main align-items-center">
                                            <div className="col">
                                                <div className="row text-muted">Shirt</div>
                                                <div className="row">Cotton T-shirt</div>
                                            </div>
                                            <div className="col counter">
                                                <button className="btn btn-link px-2" onClick={() => handleDec(c.id)}>
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <input id="form1" name="quantity" type="text" className="form-control form-control-sm " />
                                                <button className="btn btn-link px-2" onClick={() => handleInc(c.id)}>
                                                    <i className="fas fa-plus" />
                                                </button>
                                            </div>
                                            <div className="col">
                                                € 44.00 <span className="close">
                                                    <button className="btn btn-link px-2">
                                                        <i class="bi bi-trash"></i>
                                                    </button></span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }


                        <div className="back-to-shop"><a href="#">←</a><span className="text-muted">Back to shop</span></div>
                    </div>
                    <div className="col-md-4 summary">
                        <div><h5><b>Summary</b></h5></div>
                        <hr />
                        <div className="row">
                            <div className="col" style={{ paddingLeft: 0 }}>ITEMS 3</div>
                            <div className="col text-right">€ 132.00</div>
                        </div>

                        <div className="row" style={{ borderTop: '1px solid rgba(0,0,0,.1)', padding: '2vh 0' }}>
                            <div className="col">TOTAL PRICE</div>
                            <div className="col text-right">€ 137.00</div>
                        </div>
                        <Button>Checkout</Button>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Cart;