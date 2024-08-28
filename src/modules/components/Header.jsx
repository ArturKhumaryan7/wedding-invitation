import {headerImageUrl} from '../utils/constatnt'

export const Header = () => {
    return <div className='header-container'>
              <div className='image-container animate__animated animate__slideInDown'>
                 <img className='image' src={headerImageUrl} alt={'header image'}/>
              </div>
              <div className='header-info'>
                 <div className='name-letter'>
                   <h1 className='letter-a animate__animated animate__fadeInLeft'>A</h1>
                   <h1 className='letter-t animate__animated animate__fadeInRight'>T</h1>
                 </div>
                 <div className='heder-text-box animate__animated  animate__zoomIn'>
                    <h2 className='heder-text'>
                       Artur & Tatev <br/> Our forever begins today
                   </h2>
                 <h4 className='heder-title'>
                     Հարսանյաց հրավիրատոմս
                 </h4>
                 </div>
              </div>
           </div>
}