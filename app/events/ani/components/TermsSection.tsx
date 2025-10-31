import styles from "@/app/events/ani/styles.module.css";
import { useState, useEffect, useRef } from "react";

export default function TermsSection() {
  const [showModal, setShowModal] = useState(false);
  const [showScrollBar, setShowScrollBar] = useState(false);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <section className="px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className={`${styles.termsTitle} text-center`}>Terms & Condition</h2>
        <div className={`${styles.termsDivider} mx-auto w-full md:w-11/12`} />
        <div className={`${styles.termsContent} mx-auto text-justify`}>
        <p>
          Harumio shall not be held liable for any disputes, technical issues,
          or changes in product availability related to this event. Points and
          rewards are non-refundable and cannot be exchanged for cash. For
          further information, please see the{" "}
          <button
            className="text-blue-400 underline hover:text-blue-300 transition-colors"
            onClick={() => setShowModal(true)}
          >
            Disclaimer & Limitation of Liability
          </button>{" "}
          section.
        </p>
        </div>
        <div className={`${styles.termsDivider} mx-auto w-full md:w-11/12`} />
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            className={`bg-black text-white rounded-2xl max-w-2xl w-[90%] max-h-[80vh] overflow-y-auto p-6 shadow-2xl border border-white/20 ring-1 ring-white/10 ${showScrollBar ? "scrollbar-visible" : "scrollbar-hide"}`}
            onClick={(e) => e.stopPropagation()}
            onScroll={() => {
              setShowScrollBar(true);
              if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
              hideTimerRef.current = setTimeout(() => setShowScrollBar(false), 800);
            }}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-5 text-center">Terms & Conditions</h1>
            <div className="space-y-4 text-gray-800 leading-relaxed text-justify">
              <h4 className="text-lg font-semibold text-center text-white">Event Overview</h4>
              <p className="text-white">
                This event is organized by Harumio and applies to purchases made
                through our official website. Participants include Alien Stage
                fans, customers, and buyers who wish to earn and redeem reward
                points during the promotional period.
              </p>

              <h4 className="text-lg font-semibold text-center text-white">1. Earning Points</h4>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>
                  Participants earn 1 point for every $10 spent on eligible
                  purchases.
                </li>
                <li>
                  During Character Week, all featured character products will
                  earn double points (2×).
                </li>
                <li>
                  Certain discounted or featured items may also offer bonus
                  points (up to 2×).
                </li>
                <li>
                  Points are automatically credited to the participant’s account
                  after a successful order is confirmed and paid in full.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-center text-white">2. Redeeming Points</h4>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>
                  Collected points can be redeemed for exclusive Alien Stage
                  merchandise during the redemption period.
                </li>
                <li>
                  Points have no cash value and cannot be exchanged for money,
                  credit, or other compensation.
                </li>
                <li>
                  All redemptions are final, and redeemed items cannot be
                  returned, exchanged, or refunded.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-center text-white">3. Event Modifications</h4>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>
                  Harumio reserves the right to modify, suspend, or terminate
                  this event or its rules at any time without prior notice.
                </li>
                <li>
                  Changes to point values, redemption conditions, or available
                  products may occur based on stock, availability, or
                  operational reasons.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-center text-white">
                4. Limitation of Liability
              </h4>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>
                  Harumio shall not be held responsible for technical errors,
                  system interruptions, or delays that affect point accumulation
                  or redemption.
                </li>
                <li>
                  Miscalculations or display errors regarding points or rewards.
                </li>
                <li>
                  Product unavailability, shipping delays, or quality issues
                  beyond our control.
                </li>
                <li>
                  Any disputes arising from the redemption or use of rewards.
                </li>
              </ul>
              <p className="text-white">
                By participating in this event, the customer agrees that
                Harumio’s liability is limited to the value of the original
                purchase and that no additional compensation will be provided.
              </p>

              <h4 className="text-lg font-semibold text-center text-white">5. General Conditions</h4>
              <ul className="list-disc list-inside space-y-2 text-white">
                <li>
                  Points are non-transferable and valid only for the registered
                  account that earned them.
                </li>
                <li>
                  Participation in this event implies acceptance of all terms
                  and conditions stated above.
                </li>
                <li>
                  Harumio reserves the right to disqualify any participant found
                  to be abusing the system or engaging in fraudulent activity.
                </li>
              </ul>

              <h4 className="text-lg font-semibold text-center text-white">6. Contact</h4>
              <p className="text-white">
                For inquiries related to this event or your reward points,
                please contact our Customer Support via our website’s official
                contact form.
              </p>
            </div>

            <div className="flex justify-end mt-6">
              <button
                className="px-5 py-2 bg-white text-black rounded-lg hover:bg-gray-800 transition-all"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
