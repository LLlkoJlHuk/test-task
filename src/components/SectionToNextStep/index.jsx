import styles from './index.module.css'
import BtnBack from "@/components/BtnBack/index.jsx";
import BtnNext from "@/components/BtnNext/index.jsx";
import PropTypes from "prop-types";

function SectionToNextStep({ card }) {
    return (
        <div className={styles["section-to-next-step"]}>
            <div className={`main-content ${styles["main-content"]}`}>
                <div className={styles["card-info"]}>
                    <div className={styles["size"]}>
                        {card.size + " Yards"}
                    </div>

                    <div className={styles["cost"]}>
                        <span>£{card.price_before_vat && (card.price_before_vat * (1 - card.vat / 100)).toFixed(2)}</span>7 day hire
                    </div>
                </div>

                <div className={styles["step-buttons"]}>
                    <BtnBack link="#" />
                    <BtnNext link="#" />
                </div>
            </div>
        </div>
    )
}

SectionToNextStep.propTypes = {
    card: PropTypes.shape({
        size: PropTypes.number.isRequired,
        price_before_vat: PropTypes.number,
        vat: PropTypes.number,
    }).isRequired,
};


export default SectionToNextStep;