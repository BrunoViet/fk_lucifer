import Image from "next/image";
import styles from "@/app/events/ani/styles.module.css";

export default function RulesSection() {
  return (
    <section className={`${styles.rulesSection} relative`}>
      {/* Header */}
      <div className="w-full mb-6">
        <Image
          src="/images/ani/Asset 12.png"
          alt="Rules & Information"
          width={800}
          height={200}
          priority
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Panel Background */}
      <div className="relative">
        <Image
          src="/images/ani/Asset 13.png"
          alt="Rules Panel"
          width={800}
          height={200}
          className="w-full h-auto object-contain"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex justify-center items-center px-4 md:px-8 py-8 md:py-12">
          <div className="bg-transparent text-white p-4 md:p-8 mt-14 lg:p-10 max-w-4xl w-[88%]">
            <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 tracking-wide">
              🧾 Event Rules
            </h2>

            <div className="space-y-7 text-lg md:text-xl leading-relaxed">
              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Rule 1: Basic Points 💰
                </h3>
                <p>
                  Spend{" "}
                  <span className="font-semibold text-yellow-400">
                    $10 = Earn 1 Point
                  </span>
                  . Every $10 spent earns 1 point — applies to all purchases!
                </p>
                <p className="italic text-gray-300 mt-1">
                  (Example: $30 = 3 points)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Rule 2: Character Week Bonus 🔥
                </h3>
                <p>
                  Double points during{" "}
                  <span className="font-semibold text-pink-400">
                    Character Week!
                  </span>
                  <br />
                  Shop any featured character’s merchandise during their week —
                  Earn 2 points for every $10 spent!
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Rule 3: Discount Boost 💥
                </h3>
                <p>
                  Earn extra points on{" "}
                  <span className="font-semibold text-green-400">
                    Promotional Items!
                  </span>
                  <br />
                  Discounted or featured items can earn up to{" "}
                  <strong>2× points</strong>. Combine with Character Week for
                  maximum rewards!
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Rule 4: Point Redemption 🎁
                </h3>
                <p>
                  Redeem your points for{" "}
                  <span className="font-semibold text-blue-400">
                    Exclusive Rewards!
                  </span>
                  <br />
                  Collected points can be exchanged for special event
                  merchandise. Stay tuned for redemption details and product
                  lists!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
