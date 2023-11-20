import { apiSlice } from '../api_slice';

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => 'api/Product',
    }),
    addProduct: builder.mutation({
      query: (newProduct) => ({
        url: 'api/Product/addItem',
        method: 'POST',
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetProductsQuery, useAddProductMutation } = productsApiSlice;
