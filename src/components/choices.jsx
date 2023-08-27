import courier from '../assets/images/icons/courier.png'
import truck from '../assets/images/icons/truck.png'
import saving from '../assets/images/icons/save-money.png'
import support from '../assets/images/icons/support.png'
import discount from '../assets/images/icons/gift-box.png'



const choices = () => {
  return <>
  
  <section className="hero p-4">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 hero-details">
          <div className="row g-4 justify-content-center justify-content-md-between align-items-center">
            <div className='col-6 col-md-4 col-lg-2'>
              <div className='card text-center m-auto'>
                    <img src={courier} alt="" className='img-fluid m-auto' />
                    <div className="card-body">
                      <p className="card-text mb-0">Fast Orders</p>
                  </div>
              </div>
            </div>

            <div className="col-6 col-md-4 col-lg-2">
            <div className="card text-center m-auto">
              <img src={truck} className="card-img-top img-fluid m-auto" alt="Quick Shipping" />
              <div className="card-body">
                <p className="card-text mb-0">Quick Shipping</p>
              </div>
            </div>
          </div>

            <div className="card-details mx-3">
                <div className='card p-2'>
                  <img src={saving} alt="" className='img-fluid m-auto' />
                  <p>High Saves</p>
                </div>
            </div>
            <div className="card-details mx-3">
                <div className='card p-2'>
                  <img src={support} alt="" className='img-fluid m-auto' />
                  <p>24/7 Support</p>
                </div>
            </div>
            <div className="card-details mx-3">
              <div className='card p-2'>
                <img src={discount} alt="" className='img-fluid m-auto' />
                <p>Discounts</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </section>
  
  
  
  </>
}

export default choices;