import { useEffect } from 'react';


export const InvitationContent = () => {


      useEffect(() => {
        const image1 = document.querySelector('.invitation-image-1');
        image1.classList.remove('animate__fadeInTopLeft');

        const image2 = document.querySelector('.invitation-image-2');
        image2.classList.remove('animate__fadeInTopRight');
        
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                image1.classList.add('animate__fadeInTopLeft');
                image2.classList.add('animate__fadeInTopRight');
                return;
              }
            });
          });

        observer.observe(document.querySelector('.invitation-image-container'));
      }, [])
      


    return (
         <section className="invitation-content-container">
             <div className="invitation-text-container">
                <h2 className="invitation-title">Սիրելի Հյուրեր</h2>
                <p className="invitation-text">Ցանկանում ենք ձեր հետ կիսել մեր կյանքի կարևորագույն օրերից մեկը։ Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։</p>
                <p className="invitation-date">13.10.2024</p>
             </div>
             <div className="invitation-image-container">
                    <div className='invitation-image-1 animate__animated'>
                        <img className='image' src="/IMG_1342.JPG" alt={'content image'}/>
                    </div>
                    <div className='invitation-image-2 animate__animated'>
                         <img className='image' src="/IMG_1345.JPG" alt={'content image 1'}/>
                    </div>
             </div>
        </section>
    )
}