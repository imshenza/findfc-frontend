import React from 'react'
import "./Header.css"

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);

  const handleToggleOptions = () => {
    setShowOptions(!showOptions);
  };

  const options = [
    { id: 1, label: 'Home', link: '/' },
    { id: 2, label: 'Study Materials', link: '/study-materials' },
    { id: 3, label: 'Gallery', link: '/gallery' },
    { id: 4, label: 'Maps', link: '/maps' }, // Add your maps link or route
  ];
  return (
    <div>
      {/* Header */}
    <header>
      <div className="header-content">
        <div className="header-left">
          <button onClick={handleToggleOptions} className="more-options">
            <img src="/images/menu.png" alt="More Options" />
          </button>
          {showOptions && (
              <div className="options-overlay">
              <ul>
                {options.map((option) => (
                  <li key={option.id}>
                    <Link to={option.link}>{option.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="header-center">
          <span className="findfc">FIND-FC</span>
        </div>
        <Link to="/login">
        <div className="header-right">
          <button className="login">Login</button>
        </div>
        </Link>
      </div>
    </header>
    </div>
  )
}

export default Header