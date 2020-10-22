import { useContext, useState } from 'react'

function saveInStorage(key, value) {
  const json = JSON.stringify(value)

  localStorage.setItem(key, json)
}

function getFromStorage(key) {
  const json = localStorage.getItem(key)

  return JSON.parse(json)
}

export function useStorage(storageKey) {
  const [state, setState] = useState(getFromStorage(storageKey))

  function updateState(newValues) {
    const newState = {
      ...state,
      ...newValues,
    }

    setState(newState)
    saveInStorage(storageKey, newState)
  }

  return [state, updateState]
}

export function handleUseContext(contextToCheck, name) {
  const context = useContext(contextToCheck)

  if (!context) {
    const capitalName = name[0].toUpperCase() + name.slice(1)

    throw new Error(
      `use${capitalName} must be used within a ${capitalName}Provider`,
    )
  }

  return context
}
