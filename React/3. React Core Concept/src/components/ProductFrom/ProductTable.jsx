import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div>
      <p>Total Product: {products.length}</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        {products.map((product) => {
          const { name, quantity, price } = product;
          //   console.log(name, quantity, price);
          return (
            <tbody>
              <tr>
                <td>{name}</td>
                <td>{quantity}</td>
                <td>{price}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default ProductTable;
