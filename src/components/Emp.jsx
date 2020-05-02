import React, {Fragment} from "react";

const Emp = (props) => {
  return (
    <Fragment>
      <th scope="row"><img src={props.picture.thumbnail} alt={props.name.first}></img></th>
      <td className="col">{props.name.first}</td>
      
      <td className="col">{props.email}</td>
      <td className="col">{props.phone}</td>
      <td className="col">{props.location.country}</td>
      <td className="col">{props.gender}</td>
    </Fragment>
  );
};

export default Emp;