import './index.css'

import {Component} from 'react'

import {MdKeyboardArrowRight} from 'react-icons/md'

import ProductItem from '../ProductItem'

class ProductsSection extends Component {
  render() {
    const {categoriesData} = this.props
    return categoriesData.map(eachCategory => {
      const {name, products} = eachCategory
      return (
        <div className="products-category-container">
          <div className="category-name-view-all-container">
            <div className="title-container">
              <p className="category-title">{name}</p>
              <MdKeyboardArrowRight className="arr-icon" />
            </div>
            <button type="button" className="view-all-button">
              View All
            </button>
          </div>
          <ul className="products-list-container">
            {products.map(eachProduct => (
              <li
                data-testid="product"
                className="product-item"
                key={eachProduct.id}
              >
                <ProductItem
                  key={eachProduct.id}
                  productDetails={eachProduct}
                />
              </li>
            ))}
          </ul>
        </div>
      )
    })
  }
}
export default ProductsSection
