import './footer.css'
import facebook from '../../assets/icons8-facebook-480.png'
import instagram from '../../assets/insta.png'
import yt from '../../assets/youtube.png'
import linkdin from '../../assets/linkedin.png'
const Footer = () => {
  return (
    <div className="footer-start">
      <div className="about-mantra">
        <h2>About Mantra</h2>

        <p>AstroMantra is the best astrology website for online Astrology predictions. Talk to Astrologer on call and get answers to all your worries by seeing the future life through Astrology Kundli Predictions from the best Astrologers from India. Get best future predictions related to Marriage, love life, Career or Health over call, chat, query or report.</p>

        <hr />
        <div className='horoscope-container'>
        <div className='horoscopeD'>
        <h2>Horoscope</h2>
        <ul>
        <li><a href="#">Horoscope 2025</a></li>
        <li><a href="#">Today Horoscope</a></li>
        <li><a href="#">Tommorow Horoscope</a></li>
        <li><a href="#"> Horoscope</a></li>
        </ul>
        </div>
        <div className='horoscopeD'>
        <h2>Corporate Info</h2>
        <ul>
        <li><a href="#">Horoscope 2025</a></li>
        <li><a href="#">Today Horoscope</a></li>
        <li><a href="#">Tommorow Horoscope</a></li>
        <li><a href="#"> Horoscope</a></li>
        </ul>
        </div>
        <div className='horoscopeD'>
        <h2>Astrologer</h2>
        <ul>
        <li><a href="#">Horoscope 2025</a></li>
        <li><a href="#">Today Horoscope</a></li>
        <li><a href="#">Tommorow Horoscope</a></li>
        <li><a href="#"> Horoscope</a></li>
        </ul>
        </div>
        <div className='horoscopeD'>
        <h2>Important Link</h2>
        <ul>
        <li><a href="#">Horoscope 2025</a></li>
        <li><a href="#">Today Horoscope</a></li>
        <li><a href="#">Tommorow Horoscope</a></li>
        <li><a href="#"> Horoscope</a></li>
        </ul>
        </div>
       
        </div>
        <div className='contact-div'>
        <h2>Contact us</h2>
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={linkdin} alt="" />
        <img src={yt} alt="" />
        </div>
        
        <div className='email-foot'>
        <h3>Emails</h3>
        <p>xyz@gmail.com</p>
        </div>
      </div>
      
     
    </div>
  )
}

export default Footer
