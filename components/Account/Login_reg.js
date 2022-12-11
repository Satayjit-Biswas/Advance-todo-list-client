import { FcGoogle } from "react-icons/fc";
import home_styles from "../../styles/Home.module.css";


const Slider = () => {
  return (
    <div className={`${home_styles.Slider_area}`}>
      <div className={`${home_styles.Slider_area_overly}`}>
        <div className="container">
          <div className={`${home_styles.Slider_area_box}`}>
            <div className={`${home_styles.todo_box}`}>
                <div className={`${home_styles.login_styles}`}>
                    <div className="custom_btn">
                        <FcGoogle/>
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
