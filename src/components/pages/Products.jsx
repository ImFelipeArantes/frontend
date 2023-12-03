export const Products = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="p-1">
              <h1 className="text-center">
                <strong>Modelos</strong>
              </h1>
            </div>
            <div className="border 1px solid rounded m-1">
              <div className="p-2">
                <img src="01.avif" className="rounded mx-auto d-block w-50" />
              </div>
            </div>
            <div className="border 1px solid rounded m-1">
              <div className="p-2">
                <img
                  src="airforce1.webp"
                  className="rounded mx-auto d-block w-50"
                />
              </div>
            </div>
            <div className="border 1px solid rounded m-1">
              <div className="p-2">
                <img
                  src="airforce2.webp"
                  className="rounded mx-auto d-block w-50"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
