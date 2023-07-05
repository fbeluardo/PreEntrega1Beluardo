import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase/firebaseConfig';

const ItemDetail = () => {
  const [product, setProduct] = useState(null);
  const { itemId } = useParams();

  useEffect(() => {
    const productRef = doc(db, 'productos', itemId);

    getDoc(productRef)
      .then((querySnapshot) => {
        const campos = querySnapshot.data();
        const productAdapted = { id: querySnapshot.id, ...campos };
        setProduct(productAdapted);
      });
  }, [itemId]);

  if (!product) {
    return <h1>Cargando...</h1>;
  }

  return (
    <div className="item-detail">
      <img src={product.imagen} alt={product.nombre} />
      <p>${product.precio}</p>
      <h1>{product.nombre}</h1>
      <p>{product.descripcion}</p>
      {/* Add any other details you want to display */}
    </div>
  );
};

export default ItemDetail;
