import { Controller, useForm } from "react-hook-form";
import { contentImage } from '../utils/constatnt'


export const AcceptInvitationSection = () => {
    const {control, register, handleSubmit, watch} = useForm({
        defaultValues: {
            agree: true,
            name: '',
            count: ''
        }
    })

    const agree = watch('agree')


   const onSubmit = (date) => {
    const sendData = {
        participation: date.agree ? 'yes' : 'no',
        guestName: date.name,
        guestCount: date.count
    }
    console.log(sendData)
   }


    return (
        <section className="accept-invitation-section">
            <div className="project-first-image-container">
                        <img className='image' src={contentImage} alt={'content image'}/>
            </div>
            <h3 className="wedding-section-church">Խնդրում ենք հաստատել ձեր մասնակցությունը</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="radio-container">
                    <p className='invitation-text'>Կսպասենք ձեր պատասխանին մինչև <strong>Սեպտեմբերի 25-ը</strong></p>
                    <Controller 
                        name='agree'
                        control={control}
                        render={({field: {value, onChange}}) =>  (
                            <div className="radio-box">
                                <input type="radio"  id='agree' className='radio' checked={value} onChange={onChange}/>
                                <label htmlFor="agree" className="wedding-section-village">Գալու եմ</label>
                            </div>
                        )}/>
                    <Controller 
                        name='agree'
                        control={control}
                        render={({field: {value, onChange}}) =>  (
                            <div className="radio-box">
                                <input type="radio"  id='disagree' className='radio' checked={!value} onChange={(e) => onChange(!e.target.checked)}/>
                                <label htmlFor="disagree" className="wedding-section-village">Չեմ կարող գալ</label>
                            </div>
                        )}/>
                    
                    <div>
                    <h4 className="invitation-text">Խնդրում ենք նշել Ձեր անունը և հյուրերի թիվը</h4>
                        <div className="input-box">
                            <input placeholder="Անուն Ազգանուն" {...register('name', {required: true})}/>
                             <input placeholder="Հյուրերի թիվ" type="number" {...register('count', {required: agree})}/>
                        </div>
                    </div>
                    <button type="submit">Ուղարկել</button>
                </div>
            </form>
        </section>
    )
}