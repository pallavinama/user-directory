  
import React from "react";
import Emp from "./Emp";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>You have {props.employees.length} employees.</h1>
      </div>
      <div>
            {props.employees.map((employee) => (
              <Emp {...employee} key={employee.id}/>
            ))}
      </div>
    </div>
  );
};

export default List;