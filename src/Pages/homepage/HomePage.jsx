import './homepage.css'
import AstroGuru from '../../assets/astrologer_baba.webp'
import { LuMessageCircleMore } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
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
         <div className='banner-box-su'>
         <div className="banner-box-sub">
           <div className="banner-box-img">
            <span aria-hidden="true">
               <LuMessageCircleMore size={40} color='white' strokeWidth={1} />
              </span>
                     </div>
                <h2>Chat with Astrologer</h2>
         </div>
         <div className="banner-box-sub">
           <div className="banner-box-img">
            <span aria-hidden="true">
               <IoCallOutline size={40} color='white' strokeWidth={1} />
              </span>
                     </div>
                <h2>Call with Astrologer</h2>
         </div>
         <div className="banner-box-sub">
           <div className="banner-box-img">
            <span aria-hidden="true">
            <FiShoppingCart size={35} color="white" strokeWidth={1} />

              </span>
                     </div>
                <h2>AstroMall Shop</h2>
         </div>
         <div className="banner-box-sub">
           <div className="banner-box-img">
            <span aria-hidden="true">
               <LuMessageCircleMore size={40} color='white' />
              </span>
                     </div>
                <h2>Book Pooja</h2>
         </div>

         </div>
        

         


       
      </div>
      
    </div>
  )
}

export default HomePage
