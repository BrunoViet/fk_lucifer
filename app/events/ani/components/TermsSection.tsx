import styles from "@/app/events/ani/styles.module.css";
export default function TermsSection() {
  return (
    <section className="lg:p-6">
      <h2 className={styles.termsTitle}>Terms & Condition</h2>
      <div className={styles.termsDivider} />
      <div className={styles.termsContent}>
        <ol>
          <li>
            Both participation methods will have equal chance of getting
            author&apos;s signed autograph (if any).
          </li>
          <li>
            All purchases made during the event period are non-refundable and
            non-cancellable.
          </li>
          <li>
            If you are selected to receive a signed item, the autograph will be
            addressed to the name of the order recipient by default, or the name
            provided in the order notes (if specified). No changes will be
            accepted after the order is placed.
          </li>
          <li>
            Winners cannot be selected more than once. Each customer may only
            win once during the event period.
          </li>
          <li>Winners will be selected and announced on August 15th.</li>
          <li>
            Orders placed during the event period will be shipped by the end of
            August 2025. Please note that delays may occur depending on the
            supplier&apos;s and logistics&apos; circumstances.
          </li>
          <li>
            Harumio reserves the right to make the final decision on all matters
            related to this event, including but not limited to participation
            eligibility, prize distribution, and product availability. We
            reserve the right to modify, suspend, or terminate the event at any
            time without prior notice, should unforeseen circumstances arise.
            Participation in this event constitutes acceptance of these terms.
            Harumio also reserves the right to final interpretation of all event
            details and terms.
          </li>
        </ol>
      </div>
      <div className={styles.termsDivider} />
      <p className={styles.termsFootnote}>
        * 1st Prize Winner: Top spender during the event + Randomly selected
        customers who purchased any event products
      </p>
    </section>
  );
}
