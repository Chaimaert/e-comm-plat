import Shopitems from "../components/shopitems";
import Newsletter from '../components/newsletter';
import Choices from '../components/choices'


const shop = () => {
  
  return <>
    <section className="shop-banner p-5">
      <div className="container-xxl">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6 text-center">
              <div className="shop-details">
              <h2 className="mt-5 disc">You Order and we will Deliver</h2>
              </div>
          </div>
        </div>
      </div>
    </section>

    <section className="shop-products p-5">
      <div className="container-xxl">
        <div className="row">
          <Shopitems  />
        </div>
      </div>

    </section>

    <section className="pagination p-3">
      <div className="container-xxl">
        <div className="row ">
            <div className="col-12 d-flex justify-content-center align-items-center">
                <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                          </a>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                          <a className="page-link" href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                          </a>
                        </li>
                      </ul>
                </nav>
            </div>
        </div>
      </div>

    </section>
  
  </>
};

export default shop;