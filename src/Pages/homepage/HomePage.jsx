import './homepage.css'
import AstroGuru from '../../assets/astrologer_baba.webp'
import { LuMessageCircleMore } from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import hifive from '../../assets/pooja.png'
import { TbSunset2 } from "react-icons/tb";
import { IoIosArrowDropleft } from "react-icons/io";
import AstroNews from '../../assets/astronews.webp';
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
               <img src={hifive} alt="book pooja" />
              </span>
                     </div>
                <h2>Book Pooja</h2>
         </div>

         </div>
      </div>

      <div className="astro-services-home">
        <h2>Complimentary astrology services</h2>

        <div className='astro-service-home-box'>
        <IoIosArrowDropleft size={40} color='gray' strokeWidth={1}  className='change-icons'/>

          <div className='astro-service-home-box-sub'>
            <div className='astro-service-home-box-subtw0'>
              <span >
            <TbSunset2  size={40} color='black' strokeWidth={1} className='astro-home-service-icons'/> </span>
            <h3>Free Kundali</h3>
            <p>Reading your Today’s horoscope is one of the best ways to predict  your future. </p>
            </div>
          </div>
          
          <div className='astro-service-home-box-sub'>
            <div className='astro-service-home-box-subtw0'>
              <span >
            <TbSunset2  size={40} color='black' strokeWidth={1} className='astro-home-service-icons'/> </span>
            <h3>New Kundli</h3>
            <p>Reading your Today’s horoscope is one of the best ways to predict  your future. </p>
            </div>
          </div>
          <div className='astro-service-home-box-sub'>
            <div className='astro-service-home-box-subtw0'>
              <span >
            <TbSunset2  size={40} color='black' strokeWidth={1} className='astro-home-service-icons'/> </span>
            <h3>New Kundli</h3>
            <p>Reading your Today’s horoscope is one of the best ways to predict  your future. </p>
            </div>
          </div>
          <div className='astro-service-home-box-sub'>
            <div className='astro-service-home-box-subtw0'>
              <span >
            <TbSunset2  size={40} color='black' strokeWidth={1} className='astro-home-service-icons'/> </span>
            <h3>New Kundli</h3>
            <p>Reading your Today’s horoscope is one of the best ways to predict  your future. </p>
            </div>
          </div>
          <IoIosArrowDropleft size={40} color='gray' strokeWidth={1}  className='change-icons'/>
        

        </div>

       
      </div>

      <div className='MantraCustomer1'>
        
        <div className='customer-N'>
          <h2>4200+</h2>
        <p>Total Astrologers</p>
        </div>
        <div className='customer-N'>
          <h2>1304 <span>Million Minutes </span></h2>
        <p>Total Chat/Call minutes</p>
        </div>
        <div className='customer-N'>
          <h2>85.4 <span>Million</span></h2>
        <p>Total Customers</p>
        </div>
      </div>

      <div className='Mantra-News'>
        <h2>Update and  News</h2>
        <div className='Mantra-News-Boxs'>
        <div className='Mantra-News-Box'>
          <div className='News-img'><img src={AstroNews} alt="news" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo suscipit dolorum repellendus porro </p>

          <span>2 feb</span>
          
          
          </div>
          </div>
          <div className='Mantra-News-Box'>
          <div className='News-img'><img src={AstroNews} alt="news" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo suscipit dolorum repellendus porro </p>

          <span>2 feb</span>
          
          
          </div>
          </div>
          <div className='Mantra-News-Box'>
          <div className='News-img'><img src={AstroNews} alt="news" />
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati explicabo suscipit dolorum repellendus porro </p>

          <span>2 feb</span>
          
          
          </div>
          </div>
        
        </div>
        
        
      </div>
      
    </div>
  )
}

export default HomePage
