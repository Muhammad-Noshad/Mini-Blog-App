import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return ( 
    <div className="not-found">
      <p> X </p>
      <h1> Error 404 </h1>
      <h2>Sorry</h2>
      <p>The page cannot be found</p>
      <Link to='/'> Back to homepage...</Link>
    </div>
  );
}
 
export default NotFound;