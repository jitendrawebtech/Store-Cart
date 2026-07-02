import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData } from '../../store/reducers/productSlice';
import Card from '../ui/Card';
import { FaShoppingCart } from 'react-icons/fa';
import FilterBtn from '../ui/FilterBtn';


const ProductsList = () => {

  const sortBy = [
    { value: "price-asc", label: "Price : Low to High" },
    { value: "price-desc", label: "Price : Hight to Low" },
    { value: "name-asc", label: "Name : A to Z" },
    { value: "name-desc", label: "Name : Z to A" },
    { value: "star-3&above", label: "Rating: 3 & above" },
    { value: "star-4&above", label: "Rating: 4 & above" },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const { products, categories, loading, error } = useSelector(state => state.products);

  return (
    <section className="py-14 lg:py-20">
      <div className="container">

        {
          products.length > 0 &&
          <div className="flex justify-end gap-4">
            <FilterBtn forFilterVal={categories} defaultText="All Categories" />
            <FilterBtn forFilterVal={sortBy} defaultText="Sort By" />
          </div>
        }

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 pt-8">
          {
            products?.map(product => (
              <Card
                key={product.id}
                product={product}
                textToCart={<><FaShoppingCart className="inline-block" /> Add to Cart </>}
                textToBuy="Buy Now"
              />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductsList
