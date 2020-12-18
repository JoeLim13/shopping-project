import React, { useState } from 'react';
import ProductData from '../ProductData'
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FilteredItems from '../components/FilteredItems'

const ProductsPage = () => {
    const productsdata = ProductData()

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const [amount, setAmount] = useState(0)

    const [cartItems, setCartItems] = useState([])




    return (
        <>
            <h1>Products Page</h1>
            <FilteredItems />
            <div className="d-flex flex-wrap">
                {productsdata.map(eachproduct => {
                    return (
                        <Card style={{ width: "25vw", margin: "10px" }}>
                            <CardBody>
                                <CardTitle tag="h5">{eachproduct.productName}</CardTitle>
                            </CardBody>
                            <img width="30%" src={eachproduct.productImage} alt="Product" />
                            <CardBody>
                                <CardText>{eachproduct.description}</CardText>
                                <CardText>Price: {eachproduct.price}</CardText>
                                <CardText>Stock Available: {eachproduct.amount - amount}</CardText>
                            </CardBody>
                            <Button color="danger" onClick={toggle}>Add To Cart</Button>
                            <Modal isOpen={modal} toggle={toggle}>
                                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                                <ModalBody>
                                    <Card>
                                        <CardBody style={{ margin: 'auto', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                                            <img width="30%" src={eachproduct.productImage} alt="Product" />
                                            <div className="d-flex align-items-center">
                                                <Button className="btn btn-info" onClick={() => {
                                                    setAmount(amount + 1)
                                                }}>+</Button>
                                                <div style={{ border: 'solid black 1px', padding: '10px', width: '50px', textAlign: 'center' }}>{amount}</div>
                                                <Button className="btn btn-info" onClick={() => {
                                                    setAmount(amount - 1)
                                                }}>-</Button>
                                            </div>
                                            <h2>Total Price: {eachproduct.price}</h2>
                                        </CardBody>
                                    </Card>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="primary" onClick={toggle}>Add to Cart</Button>{' '}
                                    <Button color="secondary" onClick={toggle} onClick={(e) => {
                                        e.preventDefault()
                                        setAmount(0)
                                    }}>Cancel</Button>
                                </ModalFooter>
                            </Modal>
                        </Card>
                    )
                })}
            </div>
    )
        </>
    )
}

export default ProductsPage;