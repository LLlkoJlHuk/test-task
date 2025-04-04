import styles from './index.module.css'
import Preview from '@/assets/images/card-preview.jpg'

function Card({ card, isSelected, onSelect }) {
    return (
        <div className={`${styles["card"]} ${isSelected ? styles["selected"] : ""} ${!card.allows_heavy_waste ? styles["not-allowed"] : ""}`} onClick={onSelect}>
            {
                isSelected && (
                    <div className={styles["icon--check"]}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-check w-5 h-5 md:w-6 md:h-6 text-[#0037C1]">
                            <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                    </div>
                )
            }

            <div className={styles["card--relative"]}>
                <img src={Preview} className={styles["preview"]} alt="preview" />

                <div className={styles["size"]}>
                    { card.size + " Yards" }
                </div>

                <div className={styles["warnings"]}>
                    { !card.allowed_on_road && (
                        <div className={styles["flag--yellow"]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-alert-triangle w-4 h-4 text-yellow-500 shrink-0">
                                <path
                                    d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                            </svg>
                            <p>Private Property Only</p>
                        </div>
                    )}

                    { !card.allows_heavy_waste && (
                        <div className={styles["flag--red"]}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                 strokeLinejoin="round"
                                 className="lucide lucide-alert-triangle w-4 h-4 text-red-500 shrink-0">
                                <path
                                    d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                                <path d="M12 9v4"></path>
                                <path d="M12 17h.01"></path>
                            </svg>
                            <p>Not Suitable for Heavy Waste</p>
                        </div>
                    )}
                </div>
            </div>

            <h3 className={styles["card--title"]}>{ card.size + " Yard Skip" }</h3>
            <p className={styles["card--subtitle"]}>{ card.hire_period_days + " day hire period" }</p>

            <div className={styles["card--cost"]}>
                <span>£{card.price_before_vat && (card.price_before_vat * (1 - card.vat / 100)).toFixed(2)}</span>per week
            </div>

            {
                isSelected ? (
                    <button className={`${styles["card--btn"]} ${styles["selected"]}`}>
                        <p>Selected</p>
                    </button>

                ) : (
                    <button className={styles["card--btn"]}>
                        <p>Select This Skip</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                             stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                             className="lucide lucide-arrow-right w-4 h-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                )
            }

        </div>
    )
}

export default Card;