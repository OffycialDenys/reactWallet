import React from "react";

const Frequent = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="intro-header">
            <h3>Frequently asked questions</h3>
          </div>
          <div className="accordion accordion-flush" id="accordionFlushExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="flush-headingOne">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  What are the fees ?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  {" "}
                  <code>.accordion-flush</code> className. This is the first
                  items accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Frequent;
