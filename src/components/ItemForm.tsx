/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { clearSelectedItem, } from '../redux/Item'


interface ParamTypes {
  id: string
}

function ItemForm() {
  const history = useHistory()
  const {id} = useParams<ParamTypes>()
  const item = useSelector((state: RootState) => state.item) || {}
  const dispatch = useDispatch()
  const [name, setName] = useState()
  const [author, setAuthor] = useState()

  useEffect(() => {
    if (id != null) {
      setName(item?.selectedItem?.name)
      setAuthor(item?.selectedItem?.author)
    }else{
      dispatch(clearSelectedItem())
    }
  }, [])

  const createItem = async () => {
    return await axios.post('http://localhost:3001/item', {name, author, id: Math.floor(Math.random() * 5655894)})   
  }

  const updateItem = async () => {
    return await axios.patch(`http://localhost:3001/item/${id}`, {name, author, id})   
  }
  
  const handleOnSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      const result = id != null ? await updateItem() : await createItem()

      if (result.status === 201 || result.status === 200) {
        history.push("/")
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  const handleNameOnChane = (event: any) => {
    event.preventDefault()
    setName(event.target.value)
  }
  
  const handleAuthorOnChane = (event: any) => {
    event.preventDefault()
    setAuthor(event.target.value)
  }
  
  return (
    <form className="itemFormContainer" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={handleNameOnChane} required/>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" value={author} onChange={handleAuthorOnChane} required/>
        <button type="submit" id="submitButton">Create Item</button>
    </form>
  )
}

export default ItemForm
