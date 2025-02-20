interface UseLocalStorage {
  getData: <T>(key: string) => T | null
  setData: <T>(key: string, value: T) => void
}

export function useLocalStorage(): UseLocalStorage {
  const getData = <T>(key: string) => {
    const storedValue = localStorage.getItem(key)

    if (!storedValue) return null
    return JSON.parse(storedValue) as T
  }

  const setData = <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  return {
    getData,
    setData,
  }
}
