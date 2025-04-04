import styles from './index.module.css'

function BtnBack({ link }) {
    return (
        <a href={ link } className={styles["btn-back"]}>
            Back
        </a>
    )
}

export default BtnBack;