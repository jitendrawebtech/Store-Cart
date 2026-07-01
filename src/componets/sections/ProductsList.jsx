import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData } from '../../store/reducers/productSlice';
import CardProduct from '../ui/CardProduct';

const ProductsList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData())
  }, [dispatch]);

  const { products, categories, loading, error } = useSelector(state => state.products);

  console.log(products);

  return (
    <section>
      <div className="container">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 py-14 lg:py-20">
          {
            products.map(product => (
              <CardProduct key={product.id} product={product} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default ProductsList
