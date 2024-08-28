import { contentImage } from '../utils/constatnt'
import { WeddingSection } from './WeddingSection'


export const Project = () => {
    return (
        <section className='project-section'>
            <div className='project-header-title-box'>
                <h1 className='project-header-title'>Օրվա ծրագիրը</h1>
            </div>
            <div className="project-first-image-container">
                    <div className='project-image-1 animate__animated'>
                        <img className='image' src={contentImage} alt={'content image'}/>
                    </div>
                    <div className='project-image-2 animate__animated'>
                         <img className='image' src={contentImage} alt={'content image 1'}/>
                    </div>
                    <div className='project-image-3 animate__animated'>
                         <img className='image' src={contentImage} alt={'content image 1'}/>
                    </div>
             </div>
             <WeddingSection/>
        </section>
    )
}