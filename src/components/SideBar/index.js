import './index.css'

const SideBar = props => {
  const {categoriesData, activeCategory, changeActiveCategory} = props

  return (
    <div className="category-container">
      <p className="sidebar-heading">Categories</p>
      <ul className="sidebar-category-list-container">
        <li key="All">
          <button
            type="button"
            onClick={() => changeActiveCategory('All')}
            className={
              activeCategory === 'All'
                ? 'active-sidebar-category'
                : 'sidebar-category-button'
            }
          >
            All
          </button>
        </li>
        {categoriesData.map(eachCategory => (
          <li key={eachCategory.name}>
            <button
              type="button"
              onClick={() => changeActiveCategory(eachCategory.name)}
              className={
                activeCategory === eachCategory.name
                  ? 'active-sidebar-category'
                  : 'sidebar-category-button'
              }
            >
              {eachCategory.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar
