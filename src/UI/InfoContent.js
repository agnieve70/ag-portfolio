import React from 'react'

function InfoContent({icon, content}) {
  return (
    <h6>
      <div className="row">
        <div className="col-md-2">
          <h4>
            <i className={icon + " text-light text-center"}></i>
          </h4>
        </div>
        <div className="col-md-10 text-light text-break">{content}</div>
      </div>
    </h6>
  );
}

export default InfoContent