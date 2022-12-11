import { BsXOctagon } from "react-icons/bs";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TfiPencilAlt } from "react-icons/tfi";
import home_styles from "../../styles/Home.module.css";

const Slider = () => {
  return (
    <div className={`${home_styles.Slider_area}`}>
      <div className={`${home_styles.Slider_area_overly}`}>
        <div className="container">
          <div className={`${home_styles.Slider_area_box}`}>
            <div className={`${home_styles.todo_box}`}>
              <div className={`${home_styles.input_box}`}>
                <span>
                  <TfiPencilAlt />
                </span>
                <input type="text" name="" placeholder="Type your todo" id="" />
                <button>
                  <IoIosAddCircleOutline />
                </button>
              </div>
              <div className={`${home_styles.todo_list}`}>
                <div className={`${home_styles.todo_text}`}>
                  <ul>
                    <li>
                      <div>
                        <input type="checkbox" name="" id="" />
                        <p>kdjfkas</p>
                      </div>
                      <BsXOctagon />
                    </li>
                    <li>
                      <div>
                        <input type="checkbox" name="" id="" />
                        <p>kdjfkas</p>
                      </div>
                      <BsXOctagon />
                    </li>
                    <li>
                      <div>
                        <input type="checkbox" name="" id="" />
                        <p>kdjfkas</p>
                      </div>
                      <BsXOctagon />
                    </li>
                    <li>
                      <div>
                        <input type="checkbox" name="" id="" />
                        <p>kdjfkas</p>
                      </div>
                      <BsXOctagon />
                    </li>
                    <li>
                      <div>
                        <input type="checkbox" name="" id="" />
                        <p>kdjfkas</p>
                      </div>
                      <BsXOctagon />
                    </li>
                  </ul>
                </div>
                <div className={`${home_styles.todo_task}`}>
                  <p>1 tasks left</p>
                  <div className={`${home_styles.todo_task_menu}`}>
                    <ul>
                      <li>
                        <a href="#">All</a>
                      </li>
                      <li>
                        <a href="#">Incomplete</a>
                      </li>
                      <li>
                        <a href="#">Complete</a>
                      </li>
                      <li>
                        <a href="#">reset</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
