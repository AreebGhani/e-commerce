import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { fetchProducts } from "../redux/actions/productAction";
import Fade from "react-reveal/Fade";
import Stars from "./Stars";

export default function Products() {
  const [showDetail, setShowDetail] = useState(false);
  const [productDetail, setProductDetail] = useState({});
  const ProductsApi = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <div className="pt-32 p-5 bg-stone-700">
        <h1 className="text-center text-white text-4xl font-bold">
          <u>Our Products</u>
        </h1>
        <Fade bottom duration={1000} delay={600} distance="10px">
          <div className="grid sm:grid-cols-2 justify-center py-16 place-items-center">
            {ProductsApi?.map((product) => {
              return (
                <div key={product.id} className="py-6">
                  <div className="flex max-w-xl bg-white shadow-2xl rounded-lg">
                    <div
                      className="bg-cover w-1/2 cursor-pointer"
                      style={{
                        backgroundImage: `url('${window.location.origin}/products/${product.img}.jpg')`,
                      }}
                      onClick={() => {
                        setShowDetail(!showDetail);
                        setProductDetail(product);
                      }}
                    ></div>
                    <div className="p-4 w-2/3">
                      <h1 className="text-gray-900 font-bold text-2xl">
                        {product.name}
                      </h1>
                      <p className="mt-2 text-gray-600 text-sm">
                        {product.description}
                      </p>
                      <div className="flex item-center mt-2 text-yellow-500">
                        <Stars num={product.stars} />
                      </div>
                      <div className="flex item-center justify-between mt-3">
                        <h1 className="text-gray-700 font-bold text-xl">
                          ${product.price}
                        </h1>
                        <button
                          onClick={() => dispatch(addToCart(product))}
                          className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold uppercase rounded"
                        >
                          Add to Card
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Fade>
      </div>
      {showDetail ? (
        <div className="detail">
          <Fade duration={400}>
            <div className="bg-white rounded-2xl border-2 border-black shadow-xl p-10">
              <div className="text-right -m-5">
                <h1
                  className="cursor-pointer font-extrabold text-2xl"
                  onClick={() => setShowDetail(!showDetail)}
                >
                  x
                </h1>
              </div>
              <div className="grid sm:grid-cols-2 sm:gap-5 justify-center">
                <img
                  className="w-full max-h-screen"
                  src={
                    window.location.origin +
                    "/products/" +
                    productDetail.img +
                    ".jpg"
                  }
                  alt="product"
                />
                <div className="flex flex-col place-content-center">
                  <h1 className="text-gray-900 font-bold text-2xl">
                    {productDetail.name}
                  </h1>
                  <p className="mt-2 text-gray-600 text-sm">
                    {productDetail.description}
                  </p>
                  <div className="flex item-center mt-2 text-yellow-500">
                    <Stars num={productDetail.stars} />
                  </div>
                  <div className="flex item-center justify-between mt-3">
                    <h1 className="text-gray-700 font-bold text-xl">$220</h1>
                    <button
                      onClick={() => dispatch(addToCart(productDetail))}
                      className="px-3 py-2 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold uppercase rounded"
                    >
                      Add to Card
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
