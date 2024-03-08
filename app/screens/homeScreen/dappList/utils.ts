import { DAppType } from 'app/resources/type'

export const sorteDAppByCategories = (data: DAppType[]) => {
  const result: Record<string, DAppType[]> = {}
  data.forEach((e) => {
    e.categories?.forEach((category) => {
      if (category in result) {
        result[category].push(e)
      } else {
        result[category] = [e]
      }
    })
  })

  return Object.keys(result).map((category) => ({
    title: category,
    data: result[category],
  }))
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const isValidUrl = (urlString: string) => {
  let url

  try {
    url = new URL(urlString)
  } catch (_) {
    return false
  }

  return url.protocol === 'http:' || url.protocol === 'https:'
}
