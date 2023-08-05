import courier from '../assets/images/icons/courier.png'
import truck from '../assets/images/icons/truck.png'
import saving from '../assets/images/icons/save-money.png'
import support from '../assets/images/icons/support.png'
import discount from '../assets/images/icons/gift-box.png'

const choices = () => {
  return <>
  
  <section className="hero p-2">
    <div className="container-xxl">
      <div className="row">
        <div className="hero-details">
          <div className="hero-details d-flex justify-content-around text-center">
            <div className='card p-2'>
              <img src={courier} alt="" className='img-fluid' />
              <p>Fast Orders</p>
            </div>
            <div className='card p-2'>
              <img src={truck} alt="" className='img-fluid' />
              <p>Quick Shipping</p>
            </div>
            <div className='card p-2'>
              <img src={saving} alt="" className='img-fluid' />
              <p>High Saves</p>
            </div>
            <div className='card p-2'>
              <img src={support} alt="" className='img-fluid' />
              <p>24/7 Support</p>
            </div>
            <div className='card p-2'>
              <img src={discount} alt="" className='img-fluid' />
              <p>Discounts</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
  
  
  
  </>
}

export default choices;