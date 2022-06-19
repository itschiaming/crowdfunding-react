import { useEffect } from "react";
import check from "./images/icon-check.svg";

export default function Success({ success, setSuccess }) {
  return (
    <div className={`success ${success ? "visible" : ""}`}>
      <div className="success__wrapper">
        <img src={check} alt="check icon" />
        <h3>Thanks for your support!</h3>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide, You will get an email once our campaign is
          completed.
        </p>
        <button onClick={() => setSuccess()}>Got it!</button>
      </div>
    </div>
  );
}
