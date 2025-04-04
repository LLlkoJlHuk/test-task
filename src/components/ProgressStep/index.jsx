import styles from './index.module.css'

function ProgressStep({ step, stepNow }) {
    let isActive = step.id < stepNow;
    return (
        <a {...(isActive ? { href: step.link } : {})} className={`${styles["step"]} ${isActive ? styles["isActive"] : ""}`}>
            <div className={styles["step--icon"]}>{step.icon}</div>
            <div className={styles["step--label"]}>{step.label}</div>
        </a>
    )
}

export default ProgressStep;