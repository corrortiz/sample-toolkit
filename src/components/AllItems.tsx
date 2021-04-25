/* eslint-disable no-restricted-globals */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { ItemsType } from "../types";
import { useDispatch } from "react-redux";
import { setSelectedItem } from "../redux/Item";
import { AppDispatch } from "../redux/store";


function AllItems() {
  const history = useHistory();
  const dispatch = useDispatch<AppDispatch>();
  
  const [items, setItems] = useState<ItemsType[]>([]);

  const getInitialData = async () => {
    try {
      const result = await axios.get("http://localhost:3001/item");
      if (result.data) {
        setItems(result.data);
      }
    } catch (error) {
      throw new Error(error);
    }
  };

  const editItem = (item: ItemsType) => {
    dispatch(setSelectedItem(item))
    history.push(`/item/${item.id}`);
  };

  const handleDelete = async (id: number) => {
    const awnser = window.confirm('do yo want to delete this item?')
    if (awnser) {
      try {
        const result = await axios.delete(`http://localhost:3001/item/${id}`)
        if (result.status === 200) {
          getInitialData()
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  useEffect(() => {
    getInitialData();
  }, []);

  return (
    <div>
      {items &&
        items.map((item) => (
          <div>
            <h1 className="editItem" onClick={() => editItem(item)}>
              {item.name}
            </h1>
            <h2>{item.author}</h2>
            <p onClick={()=>handleDelete(item.id)}>DELETE</p>
          </div>
        ))}
    </div>
  );
}

export default AllItems;
