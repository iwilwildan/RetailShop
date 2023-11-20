import { apiSlice } from '../api_slice';

export const productCategoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductCategory: builder.query({
      query: () => 'api/Product/GetProductCategories',
    }),
  }),
});

export const { useGetProductCategoryQuery } = productCategoryApiSlice;
