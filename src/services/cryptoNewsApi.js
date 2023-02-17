import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
}

const options = {
    url: 'https://cryptocurrency-news2.p.rapidapi.com/v1'
  };


const createRequest = (url) => ({url, headers: cryptoNewsApiHeaders})


export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl: options.url}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: () => createRequest(`/bssc`)
        })
    })
})


export const { useGetCryptoNewsQuery } = cryptoNewsApi
