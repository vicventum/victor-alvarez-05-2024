function utilExtractIdFromUrl(url: string): string {
  const match = url.match(/\/(\d+)\/?$/)
  return match ? match[1] : ''
}

export { utilExtractIdFromUrl }
