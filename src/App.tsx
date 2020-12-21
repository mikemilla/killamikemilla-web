import React, { useEffect, useState } from 'react'
import './App.css'
import { EntryRepository } from './repository/entry-repository'

function App() {

  const [entries, setEntries] = useState<any[] | undefined>()
  const [error, setError] = useState<any | undefined>()

  // Get the entries when the component renders
  useEffect(() => {
    const repo = new EntryRepository()
    async function fetch() {
      try {
        const entries = await repo.getEntries()
        setError(undefined)
        setEntries(entries)
      } catch (error) {
        setError(error)
        setEntries(undefined)
      }
    }
    fetch()
  }, [])

  return (
    <div>
      {error && (
        <p>{error.code}</p>
      )}
      {entries && entries.map((entry, index) => {
        return <p key={index}>{JSON.stringify(entry)}</p>
      })}
    </div>
  )
}

export default App
