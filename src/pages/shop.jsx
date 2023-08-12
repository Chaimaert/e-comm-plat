import Shopitems from "../components/shopitems";


const shop = () => {
  
  return <>
    <section className="shop mt-2">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="repair-details text-center d-flex flex-column align-items-center p-3">
              <h2 className="mt-5 disc">You Order and we will Deliver</h2>
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
        <div className="row d-flex justify-content-center align-items-center">
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

    </section>
  
  </>
};

export default shop;