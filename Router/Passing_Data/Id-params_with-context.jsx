/*
Considerations:

Data Availability: If the products array is readily available in your application state or can be fetched efficiently,
    finding the product by ID on the target page might be more maintainable.

Performance: Passing data directly via state can be slightly more performant as it avoids the need to search through the products 
    array on the target page.

Security and Clean URLs: Using the product ID in the URL keeps the URL clean and avoids exposing unnecessary information.
    Ultimately, the choice depends on the architecture and data flow of your application. If you have a centralized store
    (e.g., using React Context, Redux, etc.), finding the product by ID might be preferable. If you're dealing with a small, 
    static dataset and want simplicity, passing data via state is straightforward and effective.
*/

//jsx
import { Link } from 'react-router-dom';

const product = { id: 1, name: 'Product Name', price: 100 };

<Link to={`/product/${product.id}`}>
  View Product
</Link>

// jsx
import { useParams } from 'react-router-dom';

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>Product ID: {product.id}</h1>
      <h2>Product Name: {product.name}</h2>
      <h3>Product Price: ${product.price}</h3>
    </div>
  );
};
