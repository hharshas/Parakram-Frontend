import "./AccCard.css";
import { motion, useAnimate } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Button, Modal } from "flowbite-react";

function AccCard(props) {
  const [loading, setLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    const obj = { ...props };
    let jsonobj = JSON.stringify(obj);
    window.alert(jsonobj);
  };
  return (
    <div>
      <div className="card">
        <span className="card__hover">{props.title}</span>

        <figure className="card__figure">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "rgba(255, 255, 255, 1)", transform: ";msFilter:;" }}
          >
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8 0-1.168.258-2.275.709-3.276.154.09.308.182.456.276.396.25.791.5 1.286.688.494.187 1.088.312 1.879.312.792 0 1.386-.125 1.881-.313s.891-.437 1.287-.687.792-.5 1.287-.688c.494-.187 1.088-.312 1.88-.312s1.386.125 1.88.313c.495.187.891.437 1.287.687s.792.5 1.287.688c.178.067.374.122.581.171.191.682.3 1.398.3 2.141 0 4.411-3.589 8-8 8z"></path>
            <circle cx="8.5" cy="12.5" r="1.5"></circle>
            <circle cx="15.5" cy="12.5" r="1.5"></circle>
          </svg>
        </figure>

        <div className="card__info">
          <span className="card__name">
            {props.discription}
            {/* <span class="card__ocupation"> Frontend Developer </span>
            <div class="card__links">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(255, 255, 255, 1)",
                  transform: ";msFilter:;",
                }}
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(255, 255, 255, 1)",
                  transform: ";msFilter:;",
                }}
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(255, 255, 255, 1)",
                  transform: ";msFilter:;",
                }}
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{
                  fill: "rgba(255, 255, 255, 1)",
                  transform: ";msFilter:;",
                }}
              >
                <circle cx="4.983" cy="5.009" r="2.188"></circle>
                <path d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"></path>
              </svg>
            </div> */}
            <div className="flex justify-center items-center">
              <div className="my-10">
                <Button onClick={() => setOpenModal(true)}>
                  Buy this pack !!!
                </Button>
              </div>
              <Modal
                dismissible
                show={openModal}
                onClose={() => setOpenModal(false)}
              >
                <Modal.Header></Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <motion.form
                      // initial={{ y: 50, opacity: 0 }}
                      // animate={{ y: 0, opacity: 1 }}
                      // transition={{ duration: 1 }}
                      onSubmit={paymentHandler}
                      className=" w-full h-full rounded-lg bg-[black] shadow-xl px-5 py-5 backdrop-blur-lg text-white font-semibold"
                    >
                      <div className="mb-4">
                        <label htmlFor="size" className="block mb-2 text-sm">
                          Selected Pack
                        </label>
                        <div>{props.title}</div>
                      </div>
                      <div className="mb-4">
                        <label
                          htmlFor="quantity"
                          className="block mb-2 text-sm  "
                        >
                          Price
                        </label>
                        <div>{props.price}</div>
                      </div>

                      <div className="mb-4">
                        <label htmlFor="size" className="block mb-2 text-sm">
                          Features{" "}
                        </label>
                        <div>{props.modalDisc}</div>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="size" className="block mb-2 text-sm">
                          Accommodation can be selected while registering for a sport
                        </label>
                      </div>
                      {/*<button
                        type="submit"
                        className="text-[#efede0] bg-[#3C91E6]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08]  rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
                      >
                        {loading ? "Placing Order" : "Pay"}
          </button>*/}
                    </motion.form>
                  </div>
                </Modal.Body>
              </Modal>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
export default AccCard;
