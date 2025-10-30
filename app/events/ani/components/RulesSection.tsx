import Image from "next/image";
import styles from "@/app/events/ani/styles.module.css";

export default function RulesSection() {
  return (
    <section className={styles.rulesSection}>
      <div className={styles.rulesHeaderImage}>
        <Image
          src="/images/ani/Asset 12.png"
          alt="Rules & Information"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 500px"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.rulesPanelContainer}>
        <Image
          src="/images/ani/Asset 13.png"
          alt="Rules Panel"
          width={800}
          height={200}
          sizes="(max-width: 768px) 100vw, 500px"
          style={{ width: "100%", height: "auto" }}
        />
        <div className={styles.rulesOverlay}>
          <div className={styles.rulesOverlayInner}>
            <div className={styles.rulesList}>
              <p>RULES RULES RULES</p>
              <p>1. RULESRULESRULESRULES</p>
              <p>2. RULESRULESRULESRULES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
