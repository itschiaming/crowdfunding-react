import { useEffect, useRef, useState } from "react";
import Success from "./Success";

export default function Modal({ modal, toggleModal, select, className }) {
  const [noReward, setNoReward] = useState(false);
  const [black, setBlack] = useState(false);
  const [bamboo, setBamboo] = useState(false);
  const [success, setSuccess] = useState(false);
  const rewardInput = useRef();
  const blackInput = useRef();
  const bambooInput = useRef();

  useEffect(() => {
    if (select === "default") {
      window.scrollTo({
        top: rewardInput.current.offsetTop + 400,
        behavior: "smooth",
      });
    }
    if (select === "bamboo") bambooChangeHandler();
    if (select === "black") blackChangeHandler();
  }, [select]);

  useEffect(() => {
    if (noReward) rewardInput.current.focus({ preventScroll: true });
    if (black) blackInput.current.focus({ preventScroll: true });
    if (bamboo) bambooInput.current.focus({ preventScroll: true });
  }, [noReward, black, bamboo]);

  const successHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setSuccess(true);
    toggleModal(false);
  };

  const noRewardChangeHandler = (e) => {
    setNoReward(true);
    setBlack(false);
    setBamboo(false);
    window.scrollTo({
      top: rewardInput.current.offsetTop + 300,
      behavior: "smooth",
    });
    rewardInput.current.focus({ preventScroll: true });
  };

  const bambooChangeHandler = (e) => {
    setNoReward(false);
    setBlack(false);
    setBamboo(true);

    window.scrollTo({
      top: bambooInput.current.offsetTop + 600,
      behavior: "smooth",
    });
    if (bamboo) bambooInput.current.focus({ preventScroll: true });
  };

  const blackChangeHandler = (e) => {
    setNoReward(false);
    setBlack(true);
    setBamboo(false);

    window.scrollTo({
      top: blackInput.current.offsetTop + 800,
      behavior: "smooth",
    });
    if (black) blackInput.current.focus({ preventScroll: true });
  };

  return (
    <>
      <div
        className={`backdrop ${modal || success ? "visible" : ""}`}
        onClick={() => toggleModal(false)}
      ></div>
      <Success success={success} setSuccess={setSuccess} />

      <section className={`about modal ${className}`}>
        <h3>Back this project</h3>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>

        <section className={`noReward ${noReward ? "checked" : ""}`}>
          <div className="radio-container">
            <input
              type="radio"
              name="plan"
              className="radio"
              id="noReward"
              checked={noReward}
              onChange={noRewardChangeHandler}
            />
            <label for="noReward" className="noReward__heading">
              <h4>Pledge with no reward</h4>
            </label>
          </div>
          <p>
            Choose to support us without a reward if you simply believe in out
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>
          <div className="pledge-container">
            <p className="pledge__text">Enter your pledge</p>
            <div className="pledge">
              <input type="text" className="pledge__input" ref={rewardInput} />
              <button className="pledge__btn" onClick={successHandler}>
                Continue
              </button>
            </div>
          </div>
        </section>

        <section className={`bamboo ${bamboo ? "checked" : ""}`}>
          <div className="radio-container">
            <input
              type="radio"
              name="plan"
              className="radio"
              id="bamboo"
              checked={bamboo}
              onChange={bambooChangeHandler}
            />
            <label for="bamboo" className="bamboo__heading">
              <h4>Bamboo Stand</h4>
              <p>Pledge $25 or more</p>
            </label>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <p className="howManyLeft-container-modal">
            <span className="howManyLeft">101</span>left
          </p>
          <div className="pledge-container">
            <p className="pledge__text">Enter your pledge</p>
            <div className="pledge">
              <input type="text" className="pledge__input" ref={bambooInput} />
              <button className="pledge__btn" onClick={successHandler}>
                Continue
              </button>
            </div>
          </div>
        </section>

        <section className={`black-edition ${black ? "checked" : ""}`}>
          <div className="radio-container">
            <input
              type="radio"
              name="plan"
              className="radio"
              id="black"
              checked={black}
              onChange={blackChangeHandler}
            />
            <label for="black" className="black-edition__heading">
              <h4>Black Edition Stand</h4>
              <p>Pledge $75 or more</p>
            </label>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <p className="howManyLeft-container-modal">
            <span className="howManyLeft">64</span>left
          </p>
          <div className="pledge-container">
            <p className="pledge__text">Enter your pledge</p>
            <div className="pledge">
              <input type="text" className="pledge__input" ref={blackInput} />
              <button className="pledge__btn" onClick={successHandler}>
                Continue
              </button>
            </div>
          </div>
        </section>

        <section className="special-edition">
          <div className="radio-container">
            <input
              type="radio"
              name="plan"
              className="radio"
              id="special"
              disabled
            />
            <label for="special" className="special-edition__heading">
              <h4>Mahogany Special Edition</h4>
              <p>Pledge $200 or more</p>
            </label>
          </div>

          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <p className="howManyLeft-container-modal">
            <span className="howManyLeft">0</span>left
          </p>
          <div className="pledge-container">
            <p className="pledge__text">Enter your pledge</p>
            <div className="pledge">
              <input type="text" className="pledge__input" />
              <button className="pledge__btn" onClick={successHandler}>
                Continue
              </button>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
