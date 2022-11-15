import Image from "next/image"
import { useEffect, useRef } from "react"
import { TiThMenuOutline } from "react-icons/ti"
import logo from "../../assets/img/logo.png"
import user from "../../assets/img/user.jpg"
import navbar_styles from "../../styles/Navbar.module.css"

const Navbar = () => {
    const add_class = useRef();
    const click_profile = useRef();
    const scrolling = () => {
        if (window.scrollY > 100) {
            add_class.current.className = `${navbar_styles.header_area}${" "} ${
                navbar_styles.sticky
            }`;
        } else {
            add_class.current.className = `${navbar_styles.header_area}`;
        }
    };
    const drop_profile = () => {
        click_profile.current.classList.toggle(`${navbar_styles.drop_profile}`);
    };
    const tab_menu = () => {
        add_class.current.classList.toggle(`${navbar_styles.show_tab_menu}`);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrolling);
        document.addEventListener("click", (e) => {
            if (!click_profile.current.contains(e.target)) {
                click_profile.current.classList.remove(
                    `${navbar_styles.drop_profile}`
                );
            }
        });
    }, []);
    return (
        <div className={`${navbar_styles.header_area}`} ref={add_class}>
            <div className={navbar_styles.bottom_header}>
                <div className="container">
                    <div className={navbar_styles.bottom_header_area}>
                        <div className={navbar_styles.logo}>
                            <a href="#">
                                <Image src={logo} width="160" height="80" />
                            </a>
                        </div>

                        <div className={navbar_styles.menu}>
                            <ul>
                                <li>
                                    <a href="">Home</a>
                                </li>
                                <li>
                                    <a href="service">Services</a>
                                </li>
                                <li>
                                    <a href="Find-Blood">Find Donor</a>
                                </li>
                                <li>
                                    <a href="blog">Blog</a>
                                </li>
                                <li>
                                    <a href="about">About</a>
                                </li>
                                <li>
                                    <a href="contact">Contact</a>
                                </li>
                                {/* <li>
                                    <a href="login">login</a>
                                </li> */}
                                <li>
                                    <div
                                        className={`${navbar_styles.login_icon}`}
                                        ref={click_profile}
                                        onClick={drop_profile}
                                    >
                                        <Image
                                            src={user}
                                            width="30"
                                            height="30"
                                        />
                                        <ul
                                            className={navbar_styles.login_menu}
                                        >
                                            <li>
                                                <a
                                                    href="/profile"
                                                    className="nav-link"
                                                >
                                                    Profile
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    href="/loginpage"
                                                    className="nav-link"
                                                >
                                                    logout
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div
                            className={`${navbar_styles.menu_icon}`}
                            onClick={tab_menu}
                        >
                            <TiThMenuOutline />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
