import Footer_styles from "../../styles/Footer.module.css";

const Footer = () => {
    return (
        <div className={`${Footer_styles.footer_area}`}>
            <div className="container">
                <p>Copyright © 2022 ToDo.com</p>
            </div>
        </div>
    );
};

export default Footer;
