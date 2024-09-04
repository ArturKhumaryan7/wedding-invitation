import { useEffect } from 'react';

export const Header = () => {
   useEffect(() => {
      const image = document.querySelector('.image-container');
      image.classList.remove('animate__slideInDown');

      const letterA = document.querySelector('.letter-a');
      letterA.classList.remove('animate__fadeInLeft');

      const letterT = document.querySelector('.letter-t');
      letterT.classList.remove('animate__fadeInRight');

      const text = document.querySelector('.heder-text');
      text.classList.remove('animate__zoomIn');
      
        const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              image.classList.add('animate__slideInDown');
              letterA.classList.add('animate__fadeInLeft');
              letterT.classList.add('animate__fadeInRight');
              text.classList.add('animate__zoomIn');
              return;
            }
          });
        });

      observer.observe(document.querySelector('.header-container'));
    }, [])

    return <div className='header-container'>
              <div className='image-container animate__animated'>
                 <img className='image' src="/IMG_1285.JPG" alt={'header image'}/>
              </div>
              <div className='header-info'>
                 <div className='name-letter'>
                   <h1 className='letter-a animate__animated'>A</h1>
                   <h1 className='letter-t animate__animated'>T</h1>
                 </div>
                 <div className='heder-text-box animate__animated'>
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