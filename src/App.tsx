import React, { useEffect, useState } from 'react'
import './App.css'
import FeaturedItem from './components/featured-item'
import ListItem from './components/list-item'
import { EntryRepository } from './repository/entry-repository'

function App() {

  const [entries, setEntries] = useState<any[] | undefined>()
  const [error, setError] = useState<any | undefined>()
  const [isLoading, setIsLoading] = useState<any | undefined>(true)

  // Get the entries when the component renders
  useEffect(() => {
    const repo = new EntryRepository()
    async function fetch() {
      try {
        const entries = await repo.getEntries()
        setError(undefined)
        setIsLoading(false)
        setEntries(entries)
      } catch (error) {
        setError(error)
        setIsLoading(false)
        setEntries(undefined)
      }
    }
    fetch()
  }, [])

  return (
    <div>
      {isLoading && (
        <p>Loading...</p>
      )}
      {error && (
        <p>{error.code}</p>
      )}
      {entries && entries.map((entry, index) => {
        if (entry.isFeatured) {
          return <FeaturedItem key={index} entry={entry} />
        } else {
          return <ListItem key={index} entry={entry} />
        }
      })}
    </div>
  )
}

export default App
