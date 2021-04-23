import axios from 'axios'
import React from 'react'
import { useHistory } from 'react-router-dom'

function ItemForm() {
  const history = useHistory()
  const handleOnSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault()
    try {
      const target = event.target as typeof event.target & {
        name: { value: string };
        author: { value: string };
      };
      const name = target.name.value
      const author = target.author.value
  
      const result = await axios.post('http://localhost:3001/item', {name, author, id: Math.floor(Math.random() * 5655894)})
      
      if (result.status === 201) {
        history.push("/")
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <form className="itemFormContainer" onSubmit={handleOnSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required/>
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" required/>
        <button type="submit" id="submitButton">Create Item</button>
    </form>
  )
}

export default ItemForm
