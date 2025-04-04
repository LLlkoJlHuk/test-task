import PropTypes from "prop-types";
import styles from './index.module.css'

function BtnNext({ link = "" }) {
    return (
        <a href={ link } className={styles["btn-next"]}>
            <p>Continue</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                 className="lucide lucide-arrow-right w-4 h-4">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
            </svg>
        </a>
    )
}

BtnNext.propTypes = {
    link: PropTypes.string,
};

export default BtnNext;