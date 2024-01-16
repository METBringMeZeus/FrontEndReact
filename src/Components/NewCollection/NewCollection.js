import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Item from "../Item/Item";
import "./NewCollection.css";

const NewCollection = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/AllCollection"
        );
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(setData);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collection-item">
        {data && data.length > 0 ? (
          data.map((item) => (
            <Item
              key={item.productID}
              id={item.productID}
              name={item.productName}
              new_price={item.newValue}
              old_price={item.oldValue}
              img={item.img}
            />
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default NewCollection;
