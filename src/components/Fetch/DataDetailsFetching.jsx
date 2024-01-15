// ItemDetails.js
import React, { useEffect } from 'react';

const DataDetailsFetching = ({ selectedItem, setItemDetails }) => {
  const BASIC_URL = 'https://www.dnd5eapi.co'

  useEffect(() => {
    const fetchDataDetails = () => {
      if (selectedItem) {
        fetch(`${BASIC_URL}${selectedItem.url}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.json()
          })
          .then(details => {
            setItemDetails(details)
          })
          .catch(error => {
            console.error('Error fetching class details:', error)
          })
      }
    }

    fetchDataDetails()
  }, [selectedItem, setItemDetails])

  return null
}

export default DataDetailsFetching
