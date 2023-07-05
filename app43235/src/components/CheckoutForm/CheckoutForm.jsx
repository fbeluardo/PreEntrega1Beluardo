import { useState } from 'react';

const CheckoutForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send the order details to the server)
    // You can use the name and address values as needed
    // Generate a purchase order ID and handle it accordingly
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Dirección:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button type="submit">Generar orden de compra</button>
    </form>
  );
};

export default CheckoutForm;
