import React, { useState } from "react";
// import { plus } from "../../assets";
import { minus, plus } from "../../assets";
import "./Asked.scss";

const Asked = () => {
  const [openWord, setOpenWord] = useState(true);
  const [openWords, setOpenWords] = useState(false);
  const [openit, setOpenIt] = useState(true);
  const [openits, setOpenIts] = useState(true);
  const [openitss, setOpenItss] = useState(true);

  return (
    <div>
      <section className="asked">
        <div className="container">
          <div className="asked__wrapper">
            <div className="asked__dishes">
              <div className="title">
                <h1 className="asked__title">
                  Frequently Asked <br /> <span>Questions.</span>
                </h1>
              </div>
              <div className="asked__table">
                {openWords ? (
                  <div className="asked__how">
                    <h2>How long does delivery take?</h2>
                    <img
                      className="asked__img"
                      onClick={() => setOpenWords(!openWords)}
                      src={plus}
                      alt="rasm"
                    />
                  </div>
                ) : (
                  <div className="asked__transition">
                    <div className="asked__how">
                      <h2>How long does delivery take?</h2>
                      <img
                        onClick={() => setOpenWords(!openWords)}
                        src={minus}
                        alt=""
                      />
                    </div>
                    <div className="asked__howw">
                      <p className="asked__text2">
                        You Can Get Information By Contacting Our Support Team
                        Have 24/7 Service. <br /> What’s The Difference Between
                        Free And Paid Plan ?
                      </p>
                      <hr />
                    </div>
                  </div>
                )}

                {openWord ? (
                  <div className="asked__how">
                    <h2>How Does It Work ?</h2>
                    <img
                      onClick={() => setOpenWord(!openWord)}
                      src={plus}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="asked__transition">
                    <div className="asked__how">
                      <h2>How Does It Work ?</h2>
                      <img
                        onClick={() => setOpenWord(!openWord)}
                        src={minus}
                        alt=""
                      />
                    </div>
                    <div className="asked__howw">
                      <p className="text2">
                        You Can Get Information By Contacting Our Support Team
                        Have 24/7 Service. <br /> What’s The Difference Between
                        Free And Paid Plan ?
                      </p>
                      <hr />
                    </div>
                  </div>
                )}

                {openit ? (
                  <div className="asked__how">
                    <h2>How does your food delivery service work?</h2>
                    <img onClick={() => setOpenIt(!openit)} src={plus} alt="" />
                  </div>
                ) : (
                  <div className="asked__transition">
                    <div className="asked__how">
                      <h2>How does your food delivery service work?</h2>
                      <img
                        onClick={() => setOpenIt(!openit)}
                        src={minus}
                        alt=""
                      />
                    </div>
                    <div className="asked__howw">
                      <p className="asked__text2">
                        You Can Get Information By Contacting Our Support Team
                        Have 24/7 Service. <br /> What’s The Difference Between
                        Free And Paid Plan ?
                      </p>
                      <hr />
                    </div>
                  </div>
                )}

                {openits ? (
                  <div className="asked__how">
                    <h2>What payment options do you accept?</h2>
                    <img
                      onClick={() => setOpenIts(!openits)}
                      src={plus}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="asked__transition">
                    <div className="asked__how">
                      <h2>What payment options do you accept?</h2>
                      <img
                        onClick={() => setOpenIts(!openits)}
                        src={minus}
                        alt=""
                      />
                    </div>
                    <div className="asked__howw">
                      <p className="asked__text2">
                        You Can Get Information By Contacting Our Support Team
                        Have 24/7 Service. <br /> What’s The Difference Between
                        Free And Paid Plan ?
                      </p>
                      <hr />
                    </div>
                  </div>
                )}

                {openitss ? (
                  <div className="asked__how">
                    <h2>Do you offer discounts or promotions?</h2>
                    <img
                      onClick={() => setOpenItss(!openitss)}
                      src={plus}
                      alt=""
                    />
                  </div>
                ) : (
                  <div className="asked__transition">
                    <div className="asked__how">
                      <h2>Do you offer discounts or promotions?</h2>
                      <img
                        onClick={() => setOpenItss(!openitss)}
                        src={minus}
                        alt=""
                      />
                    </div>
                    <div className="asked__howw">
                      <p className="asked__text2">
                        You Can Get Information By Contacting Our Support Team
                        Have 24/7 Service. <br /> What’s The Difference Between
                        Free And Paid Plan ?
                      </p>
                      <hr />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Asked;
