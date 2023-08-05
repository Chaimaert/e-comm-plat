import icon1 from '../assets/images/icons/icon1.png'
import icon2 from '../assets/images/icons/icon2.png'
import icon3 from '../assets/images/icons/icon3.png'
import icon4 from '../assets/images/icons/icon4.png'
import icon5 from '../assets/images/icons/icon5.png'
import icon6 from '../assets/images/icons/icon6.png'

const choices = () => {
  return <>
  
  <section className="hero p-2">
    <div className="container-xxl">
      <div className="row">
        <div className="hero-details">
          <div className="hero-details d-flex justify-content-around text-center">
            <div className='card p-2'>
              <img src={icon1} alt="" className='img-fluid' />
            </div>
            <div className='card p-2'>
              <img src={icon2} alt="" className='img-fluid' />
            </div>
            <div className='card p-2'>
              <img src={icon3} alt="" className='img-fluid' />
            </div>
            <div className='card p-2'>
              <img src={icon4} alt="" className='img-fluid' />
            </div>
            <div className='card p-2'>
              <img src={icon5} alt="" className='img-fluid' />
            </div>
            <div className='card p-2'>
              <img src={icon6} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  
  
  
  </>
}

export default choices;