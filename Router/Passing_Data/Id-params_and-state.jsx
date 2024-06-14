// jsx
import { Link } from "react-router-dom";

const product = { id: 1, name: "Product Name", price: 100 };

<Link
  to={{
    pathname: `/product/${product.id}`,
    state: { name: product.name, price: product.price },
  }}
>
  View Product
</Link>;

// jsx
import { useParams, useLocation } from "react-router-dom";

const ProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const { name, price } = location.state || {};

  return (
    <div>
      <h1>Product ID: {id}</h1>
      <h2>Product Name: {name}</h2>
      <h3>Product Price: ${price}</h3>
    </div>
  );
};

Passing Name and Price Directly:

Pros: Simpler and avoids additional logic in the target component.
Cons: May lead to URL length issues if there are many parameters, and it might expose more information than necessary in the URL.
Finding Product by ID on the Target Page:

Pros: Cleaner URLs and potentially more secure as you only pass the ID. Centralizes the data fetching logic.
Cons: Requires the products array to be available on the target page, which might involve additional fetching or context management.
