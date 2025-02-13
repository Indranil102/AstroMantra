import './homepage.css'
import AstroGuru from '../../assets/astrologer_baba.webp'
const HomePage = () => {
  return (
    <div  className='Homepage'>

      <div className='banner'>
        <div className='banner-box'>
          <img src={AstroGuru} alt="Banner" />
          <div className='banner-box-text'>
            <p> <span>200+ celebs </span> recommands  
            <span> AstroMantra</span></p>
            <h3>Chat with Astrologer</h3>
            <button>Chat Now</button>
          </div>
        </div>
        <div className='banner-box-sub'>
          
          <div><img src="" alt="" /></div>
          <h2>Chat with Astrologer</h2>
        
      </div>

       
      </div>
      
    </div>
  )
}

export default HomePage
