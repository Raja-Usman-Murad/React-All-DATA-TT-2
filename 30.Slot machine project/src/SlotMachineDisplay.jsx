import React from "react";
import SlotM from "./SlotM";

const SlotMachineDisplay = () => {
  return (
    <>
      <h1 className="headingS">
        🎰 Welcome To{" "}
        <span style={{ fontWeight: "bolder" }}>SLOT MACHINE GAME</span> 🎰
      </h1>
      <div className="borderS">
        <SlotM x="😃" y="😃" z="😃" />
        <SlotM x="🎅" y="🎅" z="🍎" />
        <SlotM x="🍌" y="😅" z="🍎" />
        <SlotM x="🍌" y="🍌" z="🍌" />
        <SlotM x="🎅" y="🎅" z="🍎" />
        <SlotM x="😅" y="😅" z="😅" />
        <SlotM x="😚" y="😚" z="😚" />
        <SlotM x="👹" y="👹" z="👹" />
        <button id="btn" class="btn btn-primary">
          HAVE YOU ENJOY?
        </button>
      </div>
    </>
  );
};
export default SlotMachineDisplay;
