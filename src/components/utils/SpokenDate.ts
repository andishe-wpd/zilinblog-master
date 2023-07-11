 const SpokenDate = (timestamp: Date): string => {
  // Create a new Date object from the timestamp
  const date = new Date(timestamp)

  // Use toLocaleDateString to format the date
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })

  return formattedDate
}


export default SpokenDate 