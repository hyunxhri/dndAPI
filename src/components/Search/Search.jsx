import React, { useState } from 'react'
import "./Search.css"

const Search = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (value) => {
    setSearchTerm(value)
    onSearch(value)
  }


  return (
    <div className='search'>
      <input
        type="text"
        name="search"
        placeholder="Search item..."
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  )
}

export default Search
