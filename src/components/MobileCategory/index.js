import './index.css'

import {Component} from 'react'

import {FaBowlFood, FaRegFaceSmile} from 'react-icons/fa6'
import {CiPillsBottle1, CiShoppingCart} from 'react-icons/ci'
import {PiBowlFoodDuotone} from 'react-icons/pi'

import {FaAppleAlt, FaBaby, FaCandyCane, FaBirthdayCake} from 'react-icons/fa'
import {GiMeat, GiWorld, GiFruitBowl} from 'react-icons/gi'
import {MdCleaningServices, MdPets, MdLocalDrink} from 'react-icons/md'
import {RiCake2Line} from 'react-icons/ri'

const categoryIcons = {
  'Fruits & Vegetables': <FaAppleAlt className="category-icon" />,
  'Cold Drinks & Juices': <MdLocalDrink className="category-icon" />,
  Beverages: <CiPillsBottle1 className="category-icon" />,
  'Foodgrains, Oil & Masala': <FaBowlFood className="category-icon" />,
  'Bakery, Cakes & Dairy': <FaBirthdayCake className="category-icon" />,
  'Snacks & Branded Foods': <PiBowlFoodDuotone className="category-icon" />,
  'Eggs, Meat & Fish': <GiMeat className="category-icon" />,
  'Gourmet & World Food': <GiWorld className="category-icon" />,
  'Baby Care': <FaBaby className="category-icon" />,
  'Cleaning & Household': <MdCleaningServices className="category-icon" />,
  'Beauty & Hygiene': <FaRegFaceSmile className="category-icon" />,
  'Kitchen, Garden & Pets': <MdPets className="category-icon" />,
  'Chocolates & Candies': <FaCandyCane className="category-icon" />,
  'Dry Fruits': <GiFruitBowl className="category-icon" />,
  'Indian Mithai': <RiCake2Line className="category-icon" />,
}

class MobileCategory extends Component {
  onChangeCategory = name => {
    const {changeActiveCategory} = this.props
    changeActiveCategory(name)
  }

  renderCategoryItemView = () => {
    const {categoriesData, activeCategory} = this.props
    return categoriesData.map(each => (
      <li key={each.name} className="mobile-category-item">
        <button
          type="button"
          onClick={() => this.onChangeCategory(each.name)}
          className="category-button"
        >
          <div
            className={
              activeCategory === each.name
                ? 'category-image-container active-category-mobile-container'
                : 'category-image-container'
            }
          >
            {categoryIcons[each.name]}
          </div>
          <p
            className={
              activeCategory === each.name
                ? 'category-name active-category-mobile-text'
                : 'category-name'
            }
          >
            {each.name}
          </p>
        </button>
      </li>
    ))
  }

  render() {
    const {activeCategory} = this.props
    return (
      <ul className="mobile-category-container">
        <li key="all" className="mobile-category-item">
          <button
            type="button"
            onClick={() => this.onChangeCategory('All')}
            className="category-button"
          >
            <div
              className={
                activeCategory === 'All'
                  ? 'category-image-container active-category-mobile-container'
                  : 'category-image-container'
              }
            >
              <CiShoppingCart
                className={
                  activeCategory === 'All'
                    ? 'category-icon active-category-mobile-icon'
                    : 'category-icon'
                }
              />
            </div>
            <p
              className={
                activeCategory === 'All'
                  ? 'category-name active-category-mobile-text'
                  : 'category-name'
              }
            >
              All
            </p>
          </button>
        </li>
        {this.renderCategoryItemView()}
      </ul>
    )
  }
}

export default MobileCategory
