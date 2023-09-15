import axios from "axios";
import React, { useEffect, useState } from "react";

const UserProperty = () => {
  const [pdata, setData] = useState([]);
  const getData = () => {
    axios
      .get("http://localhost:9999/api/v1/property/getpropertybyuserid", {
        headers: {
          token: localStorage.getItem("user"),
        },
      })
      .then((data) => {
        console.log(data.data.data);
        setData(data.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteProperty = (id) => {
    console.log(1);
    axios
      .delete("http://localhost:9999/api/v1/property/deletepropertybyid/" + id)
      .then((data) => {
        console.log(data);
        getData();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="mt-5">
      <h1>Property Details</h1>
      <table className="table  table-striped table-hover table-bordered">
        {/* <tr> */}
        <thead>
          <th>Scheme Name</th>
          <th>Category </th>
          <th>Area</th>
          <th>Address</th>
          <th>Delete</th>
        </thead>
        {/* </tr> */}

        {pdata.map((e) => {
          if (e.enable === 1) {
            return (
              <tr>
                <td>{e.schemeName}</td>
                <td>{e.category}</td>
                <td>{e.area}</td>
                <td>{e.fullAddress}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteProperty(e._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          }
        })}
      </table>
    </div>
  );
};

export default UserProperty;
