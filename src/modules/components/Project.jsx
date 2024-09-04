import { useEffect } from 'react';
import { PartySection } from './PartySection'
import { WeddingSection } from './WeddingSection'


export const Project = () => {
    useEffect(() => {
        const image1 = document.querySelector('.project-image-1');
        image1.classList.remove('animate__fadeInTopLeft');

        
        const image3 = document.querySelector('.project-image-3');
        image3.classList.remove('animate__fadeInTopRight');

        const image2 = document.querySelector('.project-image-2');
        image2.classList.remove('animate__fadeInUp');
        
          const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                image1.classList.add('animate__fadeInTopLeft');
                image3.classList.add('animate__fadeInTopRight');
                image2.classList.add('animate__fadeInUp');

                return;
              }
            });
          });

        observer.observe(document.querySelector('.project-first-image-container'));
      }, [])

    return (
        <section className='project-section'>
            <div className='project-header-title-box'>
                <h1 className='project-header-title'>Օրվա ծրագիրը</h1>
            </div>
            <WeddingSection/>
            <div className="project-first-image-container">
                    <div className='project-image-1 animate__animated'>
                        <img className='image' src="/IMG_1366.JPG" alt={'content image'}/>
                    </div>
                    <div className='project-image-2 animate__animated'>
                         <img className='image' src="/IMG_1636.JPG" alt={'content image 1'}/>
                    </div>
                    <div className='project-image-3 animate__animated'>
                         <img className='image' src="/IMG_1392.JPG" alt={'content image 1'}/>
                    </div>
             </div>
             <PartySection/>
        </section>
    )
}