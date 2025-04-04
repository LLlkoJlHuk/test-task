import PropTypes from 'prop-types';
import styles from './index.module.css'

function BtnBack({ link = "" }) {
    return (
        <a href={ link } className={styles["btn-back"]}>
            Back
        </a>
    )
}

BtnBack.propTypes = {
    link: PropTypes.string,
};

export default BtnBack;