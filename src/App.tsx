import React, { useEffect, useState } from 'react'
import './styles/App.scss'
import FeaturedItem from './components/FeaturedItem'
import ListItem from './components/ListItem'
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
    <div className='RootContainer'>
      {isLoading && (
        <p>Loading...</p>
      )}
      {error && (
        <p>{error.code}</p>
      )}
      {entries && entries.map((entry, index) => {
        entry.isLast = index === entries.length - 1
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
