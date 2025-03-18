// src/redux/api.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Altere a URL para sua API
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'products' // Endpoint da sua API
    })
  })
})

export const { useGetProductsQuery } = api
