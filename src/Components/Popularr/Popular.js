import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Popular.css";
import Item from "../Item/Item";

const Popular = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/v1/account/WomensFeature"
        );
        setData(response.data);
      } catch (error) {
        console.error("error", error);
      }
    };
    fetchData();
  }, []);
  console.log(setData);

  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
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

export default Popular;
