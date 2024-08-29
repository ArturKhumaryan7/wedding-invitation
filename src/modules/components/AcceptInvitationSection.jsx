import { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Controller, useForm } from "react-hook-form";
import { contentImage } from '../utils/constatnt'


export const AcceptInvitationSection = () => {
    const { enqueueSnackbar } = useSnackbar();

    const {control, register, handleSubmit, watch, reset} = useForm({
        defaultValues: {
            agree: true,
            name: '',
            count: ''
        }
    })

    const agree = watch('agree')

   const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append('participation', data.agree ? 'yes' : 'no')
    formData.append('guestName', data.name)
    formData.append('guestCount', data.count)



    formData.append("access_key", "f21797d5-5d9c-4aff-8022-8fd33a931778");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const respData = await response.json();

    if (respData.success) {
      enqueueSnackbar('Form Submitted Successfully', {
        variant: 'success'
      })
      reset({
        agree: true,
        name: '',
        count: ''
    })
    } else {
      enqueueSnackbar('Something get wrong', {
        variant: 'error'
      })
    }
  };

  useEffect(() => {
    const image = document.querySelector('.accept-image-container');
    image.classList.remove('animate__zoomIn');

    
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            console.log('add', image)
            image.classList.add('animate__zoomIn');
            return;
          }
        });
      });

    observer.observe(document.querySelector('.accept-invitation-section'));
  }, [])
  
  
    return (
        <section className="accept-invitation-section">
            <div className="accept-image-container animate__animated">
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
                            <input disabled={!agree} placeholder="Հյուրերի թիվ" type="number" {...register('count', {required: agree})}/>
                        </div>
                    </div>
                    <button type="submit">Ուղարկել</button>
                </div>
            </form>
        </section>
    )
}