import pic from '../assets/images/about/pic2.avif'
import { Link } from 'react-router-dom';
import video from '../assets/images/about/1.mp4'

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

    <section className="abouts p-5">
        <div className="row">
          <div className="col-md-6">
            <img src={pic} alt="" className='img-fluid p-5' />
          </div>
          <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                <h1 className='who mb-3'><b>Who are we ?</b></h1>
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

      <section className="about-app p-5">
        <h2 className='fs-1 text-center mb-4' >Download our <Link className='fs-2 text-danger'>App</Link></h2>
        <div className="col-12 p-5 col-md-8 mx-auto">
          <video loop muted autoPlay src={video} className='w-100'></video>
        </div>
      </section>

  </>
};

export default about;