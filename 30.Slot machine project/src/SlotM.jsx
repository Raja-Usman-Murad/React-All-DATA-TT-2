import React from "react";

const SlotM = (props) => {
  let { x, y, z } = props;

  if (x === y && y === z) {
    return (
      <>
        <div className="bothS">
          <h1 className="eheadS">
            {x} {y} {z}
          </h1>
          <h2 className="theadS">this is matching</h2>
        </div>
        <hr />
      </>
    );
  } else {
    return (
      <>
        <div className="bothS">
          <h1 className="eheadS">
            {x} {y} {z}
          </h1>
          <h2 className="theadS">this is not matching</h2>
        </div>
        <hr />
      </>
    );
  }
};
export default SlotM;
