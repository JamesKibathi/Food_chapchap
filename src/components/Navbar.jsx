import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  return (
    <div>
        {/**left side */}
      <div>
        <div>
          <AiOutlineMenu size={30} />
        </div>
        <h1>
          Food <span>Chapchap</span>
        </h1>
        <div>
            <p>Delivery</p>
            <p>Pickup</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
