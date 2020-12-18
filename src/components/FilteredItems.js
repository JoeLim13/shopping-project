import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';

const FilteredItems = () => {
    return (
        <FormGroup>
            <Label for="exampleSelect"><strong>Filtered by: </strong></Label>
            <Input type="select" name="select" id="exampleSelect">
                <option>Tags</option>
                <option>Seller</option>
                <option>Price Greater than 1000</option>
                <option>Price Less than 1000</option>
            </Input>
        </FormGroup>
    )
}

export default FilteredItems;