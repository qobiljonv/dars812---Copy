import { useState } from "react";

function CookTime() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <button onClick={handleToggle} className="prem-time">
        <span>Max Prep Time</span>
        <img src="./images/icon-chevron-down.svg" alt="" />
      </button>

      {isOpen && (
        <div className="prem__box">
          <ul className="prem__list">
            <li className="prem__item">
              <label className="prem__label">
                <input
                  type="radio"
                  name="cookTime"
                  value="0"
                  className="prem__radio"
                />
                <span className="prem__text">0 minutes</span>
              </label>
            </li>
            <li className="prem__item">
              <label className="prem__label">
                <input
                  type="radio"
                  name="cookTime"
                  value="5"
                  className="prem__radio"
                />
                <span className="prem__text">5 minutes</span>
              </label>
            </li>
            <li className="prem__item">
              <label className="prem__label">
                <input
                  type="radio"
                  name="cookTime"
                  value="10"
                  className="prem__radio"
                />
                <span className="prem__text">10 minutes</span>
              </label>
            </li>
          </ul>
          <button className="prem__btn">Clear</button>
        </div>
      )}
    </div>
  );
}

export default CookTime;
