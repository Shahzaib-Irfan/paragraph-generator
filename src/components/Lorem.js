import React from "react";
import { useState } from "react";
import data from "../datafiles/data";

const Lorem = () => {
  const [count, setCount] = useState(0);
  const [paragraph, setParagraph] = useState([]);
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    setParagraph(data.slice(0, Number(count)));
  }
  return (
    <>
      <div className="row g-3 align-items-center mt-3 mx-5 flex-box">
        <div className="col-auto">
          <label htmlFor="Number" className="col-form-label">
            Paragraph: 
          </label>
        </div>
        <div className="col-auto">
          <input
            type="number"
            id="number"
            className="form-control"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <button type="button" class="btn btn-outline-dark" onClick={handleSubmit}>
            Generate
          </button>
        </div>
      </div>
      <div className="container mt-3">
        <article>
          {paragraph.map((para, index) => {return(
            <span class="border border-info">
                <p className="lead">
                {para}
            </p>
            </span>
          )}
          )}
        </article>
      </div>
    </>
  );
};

export default Lorem;
