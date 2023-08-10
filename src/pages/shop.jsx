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
  
  </>
};

export default shop;