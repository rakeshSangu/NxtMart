import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

import MobileFooter from '../MobileFooter'
import MobileCategory from '../MobileCategory'
import ProductsSection from '../ProductsSection'
import Header from '../Header'
import SideBar from '../SideBar'
import FooterSection from '../FooterSection'

const apiStatusObj = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
  intitial: 'INITIAL',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusObj.intitial,
    categoriesData: [],
    activeCategory: 'All',
  }

  changeActiveCategory = name => {
    this.setState({
      activeCategory: name,
    })
  }

  componentDidMount = () => {
    this.getProductsData()
  }

  getProductsData = async () => {
    this.setState({
      apiStatus: apiStatusObj.pending,
    })
    const response = await fetch(
      'https://apis2.ccbp.in/nxt-mart/category-list-details',
    )
    if (response.ok) {
      const data = await response.json()
      const {categories} = data
      this.setState({
        categoriesData: categories,
        apiStatus: apiStatusObj.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusObj.failure,
      })
    }
  }

  renderSuccessView = () => {
    const {categoriesData, activeCategory} = this.state
    let filteredCategories = categoriesData
    if (activeCategory !== 'All') {
      const activeCategoryIndex = categoriesData.findIndex(
        each => each.name === activeCategory,
      )
      const {length} = categoriesData
      filteredCategories = categoriesData
        .slice(activeCategoryIndex, length)
        .concat(categoriesData.slice(0, activeCategoryIndex))
    }
    return (
      <>
        <MobileCategory
          activeCategory={activeCategory}
          categoriesData={categoriesData}
          changeActiveCategory={this.changeActiveCategory}
        />
        <div className="sidebar-products-section-container">
          <SideBar
            activeCategory={activeCategory}
            categoriesData={categoriesData}
            changeActiveCategory={this.changeActiveCategory}
          />
          <div className="products-section-container">
            <ProductsSection categoriesData={filteredCategories} />
            <FooterSection isMobileView />
          </div>
        </div>
        <FooterSection isMobileView={false} />
      </>
    )
  }

  renderHomeLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#088C03" height={50} width={50} />
    </div>
  )

  onClickRetry = () => {
    this.getProductsData()
  }

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        alt="failure view"
        src="https://res.cloudinary.com/dx6rnpfqd/image/upload/v1739195468/Screenshot_2025-02-10_192023_oxpe0c.png"
      />
      <h1 className="failure-view-heading">Oops! Something went wrong</h1>
      <p className="failure-view-para">We are having some trouble</p>
      <button
        type="button"
        onClick={this.onClickRetry}
        className="retry-button"
      >
        Retry
      </button>
    </div>
  )

  renderHomePageView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusObj.pending:
        return this.renderHomeLoadingView()
      case apiStatusObj.success:
        return this.renderSuccessView()
      case apiStatusObj.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="total-background-section">
        <Header />
        <div className="home-container">
          {this.renderHomePageView()}
          <MobileFooter />
        </div>
      </div>
    )
  }
}
export default Home
