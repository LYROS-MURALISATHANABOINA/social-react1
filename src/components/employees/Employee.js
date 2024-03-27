// import React from 'react'

// function Employee() {
//   return (
//     <div>Employee</div>
//   )
// }

// export default Employee

import React, { useContext } from "react";
import { useFetch } from "../../useFetch";
import { AppContext } from "../../context/appContext";
export default function Employee() {
  const {user} = useContext(AppContext)
  const url = `http://localhost:8080/users`;
  const data = useFetch(url);
  return (
    <div>
      <h1>employees</h1>
      <div className="Home-container">
        {data &&
          data.map((elem) => (
            <div key={elem.name}>
              {elem.email}
              <hr></hr>
            </div>
           
          ))}
      </div>
    </div>
  );
}
///////
