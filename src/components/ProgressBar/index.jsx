import { useState, useEffect } from "react";
import { useMenu } from "@/hooks/useMenu.js";
import styles from "./index.module.css";
import { steps } from "@/components/ProgressBar/stepsData.jsx";
import ProgressStep from "@/components/ProgressStep/index.jsx";

function renderSteps(steps, stepNow, separatorClass) {
    return steps.flatMap((step, index) => {
        const elements = [
            <ProgressStep key={step.id} step={step} stepNow={stepNow} />
        ];
        if (index < steps.length - 1) {
            elements.push(
                <div key={`separator-${step.id}`} className={separatorClass} />
            );
        }
        return elements;
    });
}

function ProgressBar({ stepNow = 0 }) {
    const { menuIsOpen, toggleMenu, menu } = useMenu();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 1024px)");
        const updateIsMobile = () => setIsMobile(mediaQuery.matches);

        updateIsMobile();
        mediaQuery.addEventListener("change", updateIsMobile);
        return () => mediaQuery.removeEventListener("change", updateIsMobile);
    }, []);

    return (
        <>
            {isMobile ? (
                <div className={`${styles.menu} ${menuIsOpen ? styles.isOpen : ""}`}>
                    <div className={styles["burger-menu"]} onClick={toggleMenu}>
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className={styles["burger-menu--line"]} />
                        ))}
                    </div>

                    <div className={styles["menu-wrapper"]} ref={menu}>
                        <div className={styles["menu-items"]}>
                            {renderSteps(steps, stepNow, styles["progress-separator"])}
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles["progress-bar"]}>
                    {renderSteps(steps, stepNow, styles["progress-separator"])}
                </div>
            )}
        </>
    );
}

export default ProgressBar;
