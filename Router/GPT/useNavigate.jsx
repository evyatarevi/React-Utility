// The useNavigate hook
// in React Router returns a function that you can use to programmatically navigate between routes.
// This function allows you to change the current URL, similar to how a user would navigate by clicking on a Link component,
// but it gives you more control to navigate in response to events or conditions within your components.

import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); //When you call useNavigate, it returns a function (navigate) that you can use to change the current location.

  const handleClick = () => {
    // Navigate to the "/about" route
    navigate("/about");
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={handleClick}>Go to About</button>
    </div>
  );
};

export default Home;

// The function returned by useNavigate can be called with different types of arguments to perform various navigation actions:
navigate("/about");

navigate("/about", { state: { from: "home" } }); //Navigates to the /about route and passes additional state information.

navigate("/about", { replace: true }); //Navigates to the /about route and replaces the current entry in the history stack instead of adding a new one.

navigate(-1); // Go back
navigate(1); // Go forward`
