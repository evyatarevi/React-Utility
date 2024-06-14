// jsx
import { Link } from "react-router-dom";
import queryString from "query-string";

const userId = 123;
const query = queryString.stringify({ id: userId });

<Link to={`/user?${query}`}>Go to User</Link>;

// jsx
import { useLocation } from "react-router-dom";
import queryString from "query-string";

const UserPage = () => {
  const location = useLocation();
  const { id } = queryString.parse(location.search);
  return <div>User ID: {id}</div>;
};
