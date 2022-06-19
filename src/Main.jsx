import "./App.css";
import mastercraft from "./images/logo-mastercraft.svg";
import bookmark from "./images/icon-bookmark.svg";
import Modal from "./Modal";
import { useRef, useState } from "react";

export default function Main() {
  const [modal, setModal] = useState(false);
  const [select, setSelect] = useState(null);
  const defaultRef = useRef("default");
  const bambooRef = useRef("bamboo");
  const blackRef = useRef("black");

  const toggleModal = (option) => {
    setModal(option);
  };

  const defaultToggle = () => {
    setSelect(defaultRef.current);
    toggleModal(true);
  };
  const bambooToggle = () => {
    setSelect(bambooRef.current);
    toggleModal(true);
  };
  const blackToggle = () => {
    setSelect(blackRef.current);
    toggleModal(true);
  };

  return (
    <>
      <Modal
        toggleModal={toggleModal}
        modal={modal}
        select={select}
        className={`${modal ? "visible" : ""}`}
      />
      <main className="main">
        <section className="summary">
          <img
            src={mastercraft}
            alt="logo of mastercraft"
            className="summary__img"
          />
          <h2 className="summary__heading">Mastercraft Bamboo Monitor Riser</h2>
          <p className="summary__text">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="summary__action">
            <button className="summary__backing" onClick={defaultToggle}>
              Back this project
            </button>
            <img src={bookmark} alt="bookmark" className="summary__bookmark" />
          </div>
        </section>

        <section className="stats">
          <div className="stats__detail">
            <h1>$89,914</h1>
            <p>of $100,000 backed</p>
          </div>
          <div className="stats__detail">
            <h1>5,007</h1>
            <p>total backers</p>
          </div>
          <div className="stats__detail">
            <h1>56</h1>
            <p>days left</p>
          </div>
        </section>

        <section className="about">
          <h3>About this project</h3>
          <p>
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p>
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>

          <section className="bamboo">
            <div className="stand-heading">
              <h4>Bamboo Stand</h4>
              <p>Pledge $25 or more</p>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <div className="howManyLeft-container">
              <p>
                <span className="howManyLeft">101</span>left
              </p>
              <button onClick={bambooToggle}>Select Reward</button>
            </div>
          </section>
          <section className="black-edition">
            <div className="stand-heading">
              <h4>Black Edition Stand</h4>
              <p>Pledge $75 or more</p>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <div className="howManyLeft-container">
              <p>
                <span className="howManyLeft">64</span>left
              </p>
              <button onClick={blackToggle}>Select Reward</button>
            </div>
          </section>
          <section className="special-edition">
            <div className="stand-heading">
              <h4>Mahogany Special Edition</h4>
              <p>Pledge $200 or more</p>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
            <div className="howManyLeft-container">
              <p>
                <span className="howManyLeft">0</span>left
              </p>
              <button disabled>Out of Stock</button>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
