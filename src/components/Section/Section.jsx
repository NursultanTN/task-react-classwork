import React from "react";
import "./Section.css";

const Section = ({ users }) => {
  return (
    <div className="stars-info">
      <table className="table">
        <tr className="info">
          <td>name</td>
          <td>lastName</td>
          <td>age</td>
          <td>id</td>
          <td>image</td>
        </tr>
        {users.map(item => (
          <tr>
            <td>{item.name}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td>{item.id}</td>
            <td>
              <img src={item.image} width="80px" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Section;
