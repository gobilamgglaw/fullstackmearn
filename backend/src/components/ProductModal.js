import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

//redux

import { connect } from 'react-redux';
import { addProduct } from '../actions/productActions';

class ProductModal extends Component {
    state = {
        modal: false,
        name: ''
    };

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    onSubmit = e => {
        e.preventDefault();

        const newProduct = {
            name: this.state.name
        }

        // add product via addproduct action
        this.props.addProduct(newProduct);

        // close the modal
        this.toggle();
    }

    render () {
        return(
            <div>
                <Button
                color="success"
                style={{marginBottom: '2rem'}}
                onClick={this.toggle}>
                    Add Product
                </Button>

                <Modal
                isOpen={ this.state.modal}
                toggle={ this.toggle}>
                <ModalHeader toggle={ this.toggle}>
                    Add to Shopping List
                </ModalHeader>
                <ModalBody>
                    <Form onSubmit={ this.onSubmit }>
                        <FormGroup>
                            <Label for="product">Product</Label>
                            <Input type="text" 
                            name="name" 
                            id="product" 
                            placeholder="Add Shopping Product" 
                            onChange={this.onChange}/>
                            <Button 
                            color="primary"
                            style={{marginTop: '2rem'}}
                            block>
                            Add Product
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>

                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product
});
export default connect(mapStateToProps, { addProduct}) (ProductModal);