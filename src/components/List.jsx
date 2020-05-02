  
import React from "react";
import Emp from "./Emp";

const List = (props) => {
  return (
    <div className="container">
      <div className="row">
        <h1>You have {props.employees.length} Users.</h1>
      </div>
      <div>

      <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Avatar</th>
                            <th scope="col">First Name</th>
                           
                            <th scope="col">Email</th>
                            <th scope="col">State</th>
                            <th scope="col">Age</th>
                            <th scope="col">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
            {props.employees.map((employee) => (
              <Emp {...employee} key={employee.id}/>
            ))}
            </tbody>
            </table>
      </div>
    </div>
  );
};

export default List;