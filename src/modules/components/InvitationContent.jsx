import { contentImage } from '../utils/constatnt'


export const InvitationContent = () => {
    return (
         <section className="invitation-content-container">
             <div className="invitation-text-container">
                <h2 className="invitation-title">Սիրելի Հյուրեր</h2>
                <p className="invitation-text">Մենք ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից մեկը։ Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին։</p>
                <p className="invitation-date">13.10.2024</p>
             </div>
             <div className="invitation-image-container">
                    <div className='invitation-image-1 animate__animated animate__fadeInTopLeft'>
                        <img className='image' src={contentImage} alt={'content image'}/>
                    </div>
                    <div className='invitation-image-2 animate__animated animate__fadeInTopRight'>
                         <img className='image' src={contentImage} alt={'content image 1'}/>
                    </div>
             </div>
        </section>
    )
}