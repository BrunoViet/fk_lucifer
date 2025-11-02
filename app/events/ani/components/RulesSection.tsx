"use client";
import Image from "next/image";
import styles from "@/app/events/ani/styles.module.css";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import CurrentPoints from "./CurrentPoints";
import Rule1Image from "@/public/images/rules/rule1.png";
import Rule2Image from "@/public/images/rules/rule2.png";
import Rule3Image from "@/public/images/rules/rule3.png";
import Rule4Image from "@/public/images/rules/rule4.png";

export default function RulesSection() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      <CurrentPoints />
      <section className={`${styles.rulesSection} relative`}>
        {/* Header */}
      <div className="w-full mb-6" style={{ position: "relative" }}>
        <Image
          src="/images/ani/Asset 12.png"
          alt="Rules & Information"
          width={800}
          height={200}
          priority
          className="w-full h-auto object-contain"
        />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute top-1/2 -translate-y-1/2 left-4 z-20 bg-black/70 hover:bg-black/90 text-white hover:text-gray-300 transition-all duration-300 flex items-center justify-center p-3 md:p-4 rounded-full"
          aria-label={isExpanded ? "Collapse section" : "Expand section"}
        >
          {isExpanded ? (
            <ChevronUp className="w-10 h-10 md:w-12 md:h-12" />
          ) : (
            <ChevronDown className="w-10 h-10 md:w-12 md:h-12" />
          )}
        </button>
      </div>

      {isExpanded && (
      <div className="relative pl-11">
        {/* Overlay */}
        <div className="flex flex-col gap-4">
          {/* Rule 1: Basic Points - Căn trái */}
          <div className="flex group justify-start">
            <div className="flex flex-col w-full">
              <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                  style={{
                    width: "fit-content",
                    marginLeft: "9%",
                    marginRight: "9%",
                    padding: "10px 20px 5px 20px",
                    borderTopLeftRadius: "35px",
                    borderTopRightRadius: "35px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                    height: "50px",
                  }}> 
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center uppercase tracking-wide">
                  BASIC POINTS
                </h3>
              </div>
              <div className="relative w-2/3">
                <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                    style={{
                      padding: "1px 10px 1px 10px",
                      borderRadius: "80px",
                    }}>
                  <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                      style={{
                        padding: "1px 10px 1px 10px",
                        borderRadius: "80px",
                      }}>
                    <div className="relative bg-[#72c7d14d] bg-opacity-[0.302] border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                        style={{
                          padding: "1px 10px 1px 10px",
                          borderRadius: "80px",
                        }}>
                      <div className="relative z-10 flex flex-col gap-2 p-4">
                        {/* Header Text */}
                        <div className="flex items-center justify-start gap-4 text-2xl md:text-3xl lg:text-4xl text-left">
                          SPEND <span className="text-yellow-400">10$</span> TO EARN <span className="text-yellow-400">1 POINT</span>
                        </div>
                        {/* Visual Icons */}
                        <div className="flex items-center justify-center">
                          <Image
                            src={Rule1Image}
                            alt="Rule 1 Visual"
                            className="w-full h-auto object-contain"
                            quality={100}
                            priority={true}
                          />
                        </div>

                        {/* Footer Text */}
                        <p className="flex items-end justify-end text-right">
                          F.G. 530 - 5 POINTS
                        </p>
                      </div>
                    </div> 
                  </div>  
                </div>  
              </div>
            </div>
          </div>

          {/* Rule 2: Character Week Bonus - Căn phải */}
          <div className="flex group justify-end">
            <div className="flex flex-col w-full">
              <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                  style={{
                    width: "fit-content",
                    marginLeft: "auto",
                    marginRight: "14%",
                    padding: "10px 20px 5px 20px",
                    borderTopLeftRadius: "35px",
                    borderTopRightRadius: "35px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                    height: "50px",
                  }}> 
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center uppercase tracking-wide">
                  CHARACTER WEEK BONUS
                </h3>
              </div>
              <div className="relative w-2/3" style={{ marginLeft: "auto", marginRight: "5%" }}>
                <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                    style={{
                      padding: "1px 10px 1px 10px",
                      borderRadius: "80px",
                    }}>
                  <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                      style={{
                        padding: "1px 10px 1px 10px",
                        borderRadius: "80px",
                      }}>
                    <div className="relative bg-[#72c7d14d] bg-opacity-[0.302] border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                        style={{
                          padding: "1px 10px 1px 10px",
                          borderRadius: "80px",
                        }}>
                      <div className="relative z-10 flex flex-col gap-2 p-4">
                        {/* Header Text */}
                        <div className="flex items-end justify-end text-right">
                          <p className="text-white text-right text-2xl md:text-3xl lg:text-4xl mb-6 text-right leading-relaxed">
                            PURCHASE{" "}
                            <span className="text-yellow-400">CHARACTER MERCHANDISE<br></br></span> DURING THEIR{" "}
                            <span className="text-yellow-400">FEATURED WEEK</span> TO<br></br>EARN{" "}
                            <span className="text-yellow-400">DOUBLE POINTS!</span>
                          </p>
                        </div>
                        {/* Visual Icons */}
                        <div className="flex items-center justify-center">
                          <Image
                            src={Rule2Image}
                            alt="Rule 2 Visual"
                            className="w-full h-auto object-contain"
                            quality={100}
                            priority={true}
                          />
                        </div>

                        {/* Footer Text */}
                        <p className="flex items-center justify-start gap-4">
                        </p>
                      </div>
                    </div> 
                  </div>  
                </div>  
              </div>
            </div>
          </div>

          {/* Rule 3: Discount Boost - Căn trái */}
          <div className="flex group justify-start">
            <div className="flex flex-col w-full">
              <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                  style={{
                    width: "fit-content",
                    marginLeft: "9%",
                    marginRight: "9%",
                    padding: "10px 20px 5px 20px",
                    borderTopLeftRadius: "35px",
                    borderTopRightRadius: "35px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                    height: "50px",
                  }}> 
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center uppercase tracking-wide">
                  DISCOUNT BOOST
                </h3>
              </div>
              <div className="relative w-2/3">
                <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                    style={{
                      padding: "1px 10px 1px 10px",
                      borderRadius: "80px",
                    }}>
                  <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                      style={{
                        padding: "1px 10px 1px 10px",
                        borderRadius: "80px",
                      }}>
                    <div className="relative bg-[#72c7d14d] bg-opacity-[0.302] border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                        style={{
                          padding: "1px 10px 1px 10px",
                          borderRadius: "80px",
                        }}>
                      <div className="relative z-10 flex flex-col gap-2 p-4">
                        {/* Header Text */}
                        <div className="flex items-center justify-start gap-4">
                          <p className="text-white text-left text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                            PURCHASE <span className="text-yellow-400">DISCOUNTED <br></br> MERCHANDISE</span>
                          </p>
                        </div>
                        {/* Visual Icons */}
                        <div className="flex items-center justify-center">
                          <Image
                            src={Rule3Image}
                            alt="Rule 3 Visual"
                            className="w-full h-auto object-contain"
                            quality={100}
                            priority={true}
                          />
                        </div>

                        {/* Footer Text */}
                        <p className="flex items-center justify-center gap-4">
                          STACK IT WITH CHARACTER WEEK FOR MAXIMUM BONUS POINTS!
                        </p>
                      </div>
                    </div> 
                  </div>  
                </div>  
              </div>
            </div>
          </div>

          {/* Rule 4: Point Redemption - Căn phải */}
          <div className="flex group justify-end">
            <div className="flex flex-col w-full">
              <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                  style={{
                    width: "fit-content",
                    marginLeft: "auto",
                    marginRight: "14%",
                    padding: "10px 20px 5px 20px",
                    borderTopLeftRadius: "35px",
                    borderTopRightRadius: "35px",
                    borderBottomLeftRadius: "0",
                    borderBottomRightRadius: "0",
                    height: "50px",
                  }}> 
                <h3 className="text-lg md:text-xl font-bold text-white mb-6 text-center uppercase tracking-wide">
                  POINT REDEMPTION
                </h3>
              </div>
              <div className="relative w-2/3" style={{ marginLeft: "auto", marginRight: "5%" }}>
                <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                    style={{
                      padding: "1px 10px 1px 10px",
                      borderRadius: "80px",
                    }}>
                  <div className="relative bg-transparent border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                      style={{
                        padding: "1px 10px 1px 10px",
                        borderRadius: "80px",
                      }}>
                    <div className="relative bg-[#72c7d14d] bg-opacity-[0.302] border-2 border-[#00d4ff] rounded-xl shadow-[0_0_20px_rgba(0,212,255,0.5)]"
                        style={{
                          padding: "1px 10px 1px 10px",
                          borderRadius: "80px",
                        }}>
                      <div className="relative z-10 flex flex-col gap-2 p-4">
                        {/* Header Text */}
                        <div className="flex items-center justify-end text-right">
                          <p className="text-white text-right text-2xl md:text-3xl lg:text-4xl leading-relaxed">
                          REDEEM YOUR POINTS <br></br> FOR{" "}<span className="text-yellow-400">EXCLUSIVE REWARDS!</span>
                          </p>
                        </div>
                        {/* Visual Icons */}
                        <div className="flex items-center justify-center">
                          <Image
                            src={Rule4Image}
                            alt="Rule 4 Visual"
                            className="w-full h-auto object-contain"
                            quality={100}
                            priority={true}
                          />
                        </div>

                        {/* Footer Text */}
                        <p className="flex items-center justify-center gap-4">
                          STAY TUNED FOR THE REDEMPTION DETAILS AND REWARD LIST!
                        </p>
                      </div>
                    </div> 
                  </div>  
                </div>  
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
      </section>
    </>
  );
}