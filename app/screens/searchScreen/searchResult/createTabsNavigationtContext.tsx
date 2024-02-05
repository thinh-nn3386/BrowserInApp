import React, { forwardRef, useContext, createContext, useMemo, useState } from 'react'

export const SearchResultContext = createContext(
  null as {
    searchText: string
    setSearchText: (val: string) => void
  } | null
)

export const useSearchResultContext = () => useContext(SearchResultContext)

export function createSearchResultComponent<T>(Component: T): T {
  const SearchResultComponent = forwardRef((props, ref) => {
    // Show and Hide  tabs bottom bar navigator
    const [searchText, setSearchText] = useState('')

    const contextValues = useMemo(
      () => ({
        searchText,
        setSearchText,
      }),
      []
    )

    return (
      <SearchResultContext.Provider value={contextValues}>
        {/* @ts-ignore */}
        <Component ref={ref} {...props} />
      </SearchResultContext.Provider>
    )
  })

  return SearchResultComponent as unknown as T
}
