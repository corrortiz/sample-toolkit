import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

interface ItemsType {
  id: number;
  name:string;
  author: string;
}

function AllItems() {
  const history = useHistory()
  const [items, setItems] = useState<ItemsType[]>([])
  

  const getInitialData = async () => {
    try {
      const result = await axios.get('http://localhost:3001/item')
      if (result.data) {
        setItems(result.data)
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  const editItem = (itemId: number) => {
    history.push(`/item/${itemId}`)
  }
  
  useEffect(() => {
    getInitialData()
  }, [])

  return <div>{items && items.map(item => (<div><h1 className="editItem" onClick={()=>editItem(item.id)}>{item.name}</h1><h2>{item.author}</h2></div>))}</div>
}

export default AllItems
