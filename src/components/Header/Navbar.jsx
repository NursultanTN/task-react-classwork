import React from "react";

const Navbar = users => {
  // console.log(users);
  return (
    <div>
      <div id="navbar">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ marginLeft: "30px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/0/0a/UEFA_Champions_League_logo.svg/1200px-UEFA_Champions_League_logo.svg.png"
              alt=""
              width={"100px"}
            />
          </h2>
          <div>
            <ul style={{ display: "flex", listStyle: "none" }}>
              <li>link</li>
              <li style={{ marginLeft: "30px" }}>link</li>
              <li style={{ marginLeft: "30px" }}>link</li>
              <li style={{ marginLeft: "30px" }}>link</li>
              <li style={{ marginLeft: "30px", marginRight: "30px" }}>link</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
