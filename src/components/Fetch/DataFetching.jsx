// DataFetching.js
import { useEffect } from 'react'

const DataFetching = ({ endpoint, setData, setImages, setImagesByEndpoint }) => {
  const BASIC_URL = 'https://www.dnd5eapi.co/api/'

  useEffect(() => {
    setData([])
    setImages({})

    const fetchData = () => {
      fetch(`${BASIC_URL}${endpoint}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
          }
          return response.json()
        })
        .then(data => {
          setData(data.results)
          if (endpoint !== "spells") setImagesByEndpoint(data.results)
        })
        .catch(error => {
          console.error('Error fetching classes data:', error)
        })
    }

    fetchData()
  }, [endpoint])

  return null
}

export default DataFetching
