import React, { useState } from 'react'
import "./PaginatedData.css"

const PaginatedData = ({ data, itemsPerPage, renderItem, currentPage, setCurrentPage  }) => {

  const totalPageCount = Math.ceil(data.length / itemsPerPage)

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  return (
    <>
      <div className="pagination-buttons">
        {currentPage > 1 && (
          <button className="dragonhunter-f8f8ff" onClick={() => changePage(currentPage - 1)}>Previous</button>
        )}
        {currentPage < totalPageCount && (
          <button className="dragonhunter-f8f8ff" onClick={() => changePage(currentPage + 1)}>Next</button>
        )}
      </div>
      {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
        <React.Fragment key={index}>{renderItem(item)}</React.Fragment>
      ))}

    </>
  )
}

export default PaginatedData