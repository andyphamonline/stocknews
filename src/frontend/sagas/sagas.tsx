import { call, put, takeEvery } from 'redux-saga/effects'

// fetch single stock's news from APIDojo Yahoo Finance API
// function fetchNews() {
//   fetch(
//     'https://apidojo-yahoo-finance-v1.p.rapidapi.com/news/v2/get-details?region=US&uuid=9803606d-a324-3864-83a8-2bd621e6ccbd',
//     {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com',
//         'x-rapidapi-key': 'b29663f123msh278a72b44c7a2d0p10d798jsnd4cce00c1a75',
//       },
//     },
//   )
//     .then((response) => {
//       if (response.status === 200) {
//         console.log(response)
//         return response.json()
//       } else {
//         throw new Error('Something went wrong with APIDojo Yahoo Finance v1 API')
//       }
//     })
//     .then((response) => {
//       console.log(response)
//     })
//     .catch((err) => {
//       console.log(err)
//     })
// }

// fetch single stock's news from Yahoo Finance Low Latency API
function fetchNews(args: any[]): any {
  fetch(
    'https://yahoo-finance-low-latency.p.rapidapi.com/v2/finance/news?symbols=' +
      args,
    {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'yahoo-finance-low-latency.p.rapidapi.com',
        'x-rapidapi-key': 'b29663f123msh278a72b44c7a2d0p10d798jsnd4cce00c1a75',
      },
    },
  )
    .then((response) => {
      if (response.status === 200) return response.json()
      else
        throw new Error(
          'Something went wrong with Yahoo Finance low latency API',
        )
    })
    .then((response) => {
      console.log(response)
      return response
    })
    .catch((err) => {
      console.log(err)
    })
}

function* fetchStock(action: any) {
  try {
    const stock = yield call(fetchNews, action.payload)
    // yield put({ type: 'STOCK_FETCH_SUCCEEDED', stock: stock })
  } catch (e) {
    yield put({ type: 'STOCK_FETCH-FAILED', message: e.message })
  }
}

function* allSagas() {
  yield takeEvery('STOCK_FETCH_REQUESTED', fetchStock)
}

export default allSagas
