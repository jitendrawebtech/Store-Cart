import { useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsData, setFilterCategory, setSort } from '../../store/reducers/productSlice';
import Card from '../ui/Card';
import { FaShoppingCart } from 'react-icons/fa';
import FilterBtn from '../ui/FilterBtn';
import { SORT_BY } from '../../constants/Sort';
import Loading from '../ui/Loading';


const ProductsList = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsData());
  }, [dispatch]);

  const { products, categories, search, filterCategory, sort, loading, error } = useSelector(state => state.products);

  const handleCategoryChange = (value) => {
    dispatch(setFilterCategory(value));
  }

  const handleSortChange = (value) => {
    dispatch(setSort(value));
  }





  const filteredProducts = useMemo(() => {

    let updatedProducts = [...products];

    if (filterCategory) {
      updatedProducts = updatedProducts?.filter(product =>
        product.category === filterCategory
      )
    }

    const sortComparators = {
      "price-asc": (a, b) => a.price - b.price,
      "price-desc": (a, b) => b.price - a.price,
      "name-asc": (a, b) => a.title.localeCompare(b.title),
      "name-desc": (a, b) => b.title.localeCompare(a.title),
      "star-asc": (a, b) => a.rating.rate - b.rating.rate,
      "star-desc": (a, b) => b.rating.rate - a.rating.rate
    }

    if (sortComparators[sort]) {
      updatedProducts.sort(sortComparators[sort]);
    }

    return updatedProducts

  }, [products, filterCategory, sort]);
  // console.log(products);

  if (loading) return <Loading />

  return (
    <section className="py-14 lg:py-20">
      <div className="container">

        {
          products.length > 0 &&
          <div className="flex justify-end gap-4">
            <FilterBtn forFilterVal={categories} defaultText="All Categories" onChange={handleCategoryChange} />
            <FilterBtn forFilterVal={SORT_BY} defaultText="Sort By" onChange={handleSortChange} />
          </div>
        }

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 pt-8">
          {
            filteredProducts?.map(product => (
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
