import React, { useState } from 'react'
import "./Search.css"

const Search = ({ data, setSpellsFiltered, setCurrentPage }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm)

    // Check if the name of the item has the search them in it.
    const filtered = data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSpellsFiltered(filtered)

    // Reset the number page when search.
    setCurrentPage(1)
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
