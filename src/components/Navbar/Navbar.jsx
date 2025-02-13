import './navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="heading">
          <h1>Astromantra</h1>
        </div>
        <div className='sub'>
          <div className="sub-heading"> 
          <ul>
            <li>Free Kundli</li>
            <li>Kudli Matching</li>
            <li>Horoscope</li>
            <li>Eng</li>
            <li>Astro Chat</li>
            <li>Login</li>
            
          </ul>
          </div>
          <div className="sub-heading-two"> 
          <ul>
            <li>Mantra Mall</li>
            <li>Book a Pooja</li>
            <li>Store</li>
            <li>Blog</li>
            
            
          </ul>
          </div>
        </div>
    </div>
  )
}

export default Navbar
