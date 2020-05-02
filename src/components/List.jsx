import React from "react";
import Emp from "./Emp";

const List = (props) => {
  return (
    <div className="container">      
      <div className="row">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">First Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Country</th>
              <th scope="col">Gender</th>
            </tr>
          </thead>
            {props.employees.map((employee) => (
              <tbody>
                <Emp {...employee} key={employee.id} />
              </tbody>
            ))}
        </table>
      </div>
    </div>
    
  );
};

export default List;