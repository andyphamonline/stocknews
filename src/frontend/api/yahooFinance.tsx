export const fetchNews = async (stock: string): Promise<object> => {
  console.log(process.env.REACT_APP_YAHOO_FINANCE_API_KEY)

  let res: object = await fetch(
    'https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?region=US&q=' + stock,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_YAHOO_FINANCE_API_KEY,
      }
    }
  )
    .then(response => {
      if (response.status === 200) {
        return response.json()
      } else {
        throw new Error('Something wrong with API Dojo Yahoo Finance v1 API')
      }
    })
    .then(response => {
      return response
    })
    .catch(err => {
      console.log(err)
    })

  return res
}