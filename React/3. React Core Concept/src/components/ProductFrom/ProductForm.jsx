import React, { useState } from "react";

const ProductForm = ({handleProducts}) => {
    const [error, setError] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const price = e.target.price.value;

        // console.log("Submitted: ", name, quantity, price)

        const newProduct = {
            // name: e.target.name.value,
            // quantity: e.target.quantity.value,
            // price: e.target.price.value,
            name, quantity, price
        }

        // console.log(newProduct)
        handleProducts(newProduct)

        if(name.length === 0) {
            return setError("Please Enter The Product Name")
        }
        if(quantity.length === 0) {
            return setError("Please Enter The Product Quantity")
        }
        if(price.length === 0) {
            return setError("Please Enter The Product Price")
        }
        else {
            return setError(" ")
        }
    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name your Product" />
      <br />
      <input type="text" name="quantity" placeholder="Quantity of Your Product"/>
      <br />
      <input type="text" name="price" placeholder="Price of Your Product"/>
      <br />
      <input type="submit" value="Submit" />
      <br />
      <p style={{color: "red"}}>{error}</p>
    </form>
  );
};

export default ProductForm;
