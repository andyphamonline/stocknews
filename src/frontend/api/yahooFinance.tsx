export const fetchNews = async (stock: string): Promise<string> => {
  const api: string = process.env.REACT_APP_YAHOO_FINANCE_API_KEY || ''

  const result: string = await fetch(
    `https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?region=US&q=${stock}`,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': api,
      },
    },
  )
    .then((res) => {
      if (res.status === 200) return res.json()
      throw new Error('Something wrong with API Dojo Yahoo Finance v1 API')
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log(err)
    })

  return result
}
