import { useState, useEffect } from 'react';
import {
  ProductListContainer,
  ProductTable,
  ProductForm,
  Pagination,
} from './ProductListStyles';
import { Section, SectionTitle } from '../../../styles/GlobalComponents';
import {
  useGetProductsQuery,
  useAddProductMutation,
} from '../../../pages/api/product/product_api_slice';
import { useGetProductCategoryQuery } from '../../../pages/api/product/product_category_api_slice';

const PAGE_SIZE = 10;

const ProductList = () => {
  //get product categories
  const [categories, setCategories] = useState([]);
  const {
    data: categoriesData,
    isLoadingCategory,
    isSuccessCategory,
  } = useGetProductCategoryQuery();

  useEffect(() => {
    if (isSuccessCategory) {
      setCategories(categoriesData);
    }
  }, [isSuccess, categoriesData]);

  //get products
  const [products, setProducts] = useState([]);
  const {
    data: productsData,
    isLoadingProducts,
    isSuccess,
    isError,
    error,
  } = useGetProductsQuery();

  useEffect(() => {
    if (isSuccess) {
      setProducts(productsData);
    }
  }, [isSuccess, productsData]);

  //configure pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const startIndex = (currentPage - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;

  const displayedProducts = products.slice(startIndex, endIndex);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // adding new product
  const [newProduct, setNewProduct] = useState({
    name: '',
    qty: 0,
    price: 0,
    imageURL: '',
    description: '',
    categoryId: 0,
    categoryName: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const [addProduct, { isAddProductLoading }] = useAddProductMutation();
  const handleAddProduct = async () => {
    try {
      const result = await addProduct(newProduct).unwrap();
      // Handle success (result.data contains the added product)
      // Reset the form
      setNewProduct({
        name: '',
        qty: 0,
        price: 0,
        imageURL: '',
        description: '',
        categoryId: 0,
        categoryName: '',
      });
      console.log('Added product:', result.data);
    } catch (error) {
      // Handle error, e.g., log it or show an error message to the user
      console.error('Error adding product:', error);
    }
  };
  const handleResetForm = () => {
    // Reset the form
    setNewProduct({
      name: '',
      qty: 0,
      price: 0,
      imageURL: '',
      description: '',
      categoryId: 0,
      categoryName: '',
    });
  };

  return isLoadingCategory || isLoadingProducts || isAddProductLoading ? (
    <div>Loading...</div>
  ) : (
    <Section nopadding id="products">
      <SectionTitle main>Products</SectionTitle>
      <ProductListContainer>
        <ProductForm>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Category:
            <select
              name="categoryId"
              value={newProduct.categoryId}
              onChange={handleInputChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Quantity:
            <input
              type="number"
              name="qty"
              value={newProduct.qty}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Price:
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Image URL:
            <input
              type="text"
              name="imageURL"
              value={newProduct.imageURL}
              onChange={handleInputChange}
            />
          </label>
          <div>
            <button onClick={handleAddProduct} disabled={isAddProductLoading}>
              {isAddProductLoading ? 'Adding...' : 'Add'}
            </button>
            <button type="button" onClick={handleResetForm}>
              Reset
            </button>
          </div>
        </ProductForm>
        <ProductTable className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Active</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {displayedProducts.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td>{product.categoryName}</td>
                <td>{product.qty > 0 ? 'Yes' : 'No'}</td>
                <td>{product.qty}</td>
                <td>{`$ ${product.price}`}</td>
              </tr>
            ))}
          </tbody>
        </ProductTable>
        {/* Pagination */}
        <Pagination>
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          {/* Display page numbers or dots based on the total number of pages */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </Pagination>
      </ProductListContainer>
    </Section>
  );
};

export default ProductList;
