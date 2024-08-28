import { Countdown } from './Countdown';


export const CountdownSection = () => {
  return (
    <section>
      <div>
        <h3 className='countdown-title'>
          Մնաց
        </h3>
          <Countdown/>
      </div>
    </section>
  );
};
