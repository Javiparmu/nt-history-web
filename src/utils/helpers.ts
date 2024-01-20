export const getGridCols = (gamesLength: number): { gridCols: string, mdGridCols: string} => {
  const gridCols = gamesLength === 1 ? 'grid-cols-1' : 'grid-cols-2'

  const mdGridCols = gamesLength === 1 ? 'grid-cols-1' : gamesLength === 2 ? 'grid-cols-2' : 'grid-cols-3'

  return {
    gridCols,
    mdGridCols,
  }
}

export const isEmpty = (value: string): boolean => {
  return value === '' || value === undefined || value === null
}
