import pic from '../assets/images/about/pic2.avif'
import { Link } from 'react-router-dom';

const about = () => {
  return <>
    <section className="about-wrapper p-5 mb-3">
      <div className="container-xxl">
        <div className="row">
            <div className="text-center align-items-center">
              <h1 className="know">Get to know Us</h1>
              <p className="fs-9">Take a moment to know us better ...</p>
            </div>
        </div>
      </div>
    </section>

    {/* <section className="know-us p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="d-felx">
            <div className="col-6">
              <img src={pic} alt="" className='img-fluid p-3'/>
            </div>
            <div className="col-6 d-flex flex-column text-center justify-content-center p-3">
                <div className='mb-3'>
                    <h1>Who Are We ?</h1>
                </div>
                <div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Architecto, eius. Ipsam labore consectetur quas repellat corporis obcaecati 
                        voluptatum inventore iure, quasi odio. Ipsam repellendus cumque id expedita minima et beatae.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum deleniti enim nulla optio nobis,
                        assumenda iure. Nam non laboriosam nihil itaque sint, facere quod aspernatur provident velit maiores maxime ut.
                      </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    <section className="about-us p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={pic} alt="" className='img-fluid p-5' />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className='who mb-3'><b>Who are we?</b></h1>
                <p className="card-text mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, 
                    <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
                </p>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Quibusdam tempore unde aperiam, consectetur harum a eum error, 
                    <br /> libero nemo quisquam ex assumenda corrupti rerum aut quod et sint facere reprehenderit?
                </p>
          </div>
        </div>
      </section>
  </>
};

export default about;