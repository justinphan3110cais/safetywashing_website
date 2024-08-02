import React, { useState, useEffect } from "react";
import { Divider } from "antd";
import "./BodyPage.scss";
import StoryBox from "./storybox";
import { Citation } from "./citation";

const BodyPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);
  return (
    <div>
      <div>
        <div className="mb-10">
          <h2 className="font-semibold leading-9 mb-4.5 text-left mx-auto">
            <Divider
              orientation={!isMobile ? "left" : "center"}
              className="custom-divider"
            >
              <div className="flex items-center text-xl sm:text-2xl">
                <span>Motivation</span>
              </div>
            </Divider>
          </h2>
          <h4 className="text-base sm:text-lg italic text-center">
            "For better or worse, benchmarks shape a field." — David Patterson
          </h4>
          <p className="text-base mt-4 font-normal leading-[30px] text-left mx-auto">
            As artificial intelligence systems grow more powerful, there has
            been increasing interest in{" "}
            <span className="italic font-medium bg-[#C5D5D2] px-1.5 whitespace-nowrap inline-block">
              <it>AI Safety</it>
            </span>{" "}
            research to address emerging and future risks. However, the idea of
            AI safety remains poorly defined and inconsistently measured,
            leading to confusion about how researchers can contribute. This lack
            of clarity is compounded by the unclear relationship between AI
            safety benchmarks and upstream general capabilities (e.g., general
            knowledge and reasoning).  <br />
            <br />
            To address these issues, we conduct a
            comprehensive empirical meta-analysis of AI safety benchmarks to date,
            analyzing their correlation with general capabilities across dozens
            of models and providing a survey of existing directions in AI
            safety.
          </p>
          <br />
        </div>
        <div className="mt-8 mb-8 flex flex-col items-center">
          <img
            src="images/splash.svg"
            alt="Safety Wasing"
            className="w-[95%] md:max-w-[60%]"
          />
          <p className="text-sm sm:text-base italic text-left mt-4 max-w-[85%]">
            Figure 1: Across various safety areas, we investigate whether
            benchmarks are correlated with capabilities.
          </p>
        </div>

        <div>
          <h2 className="font-semibold leading-9 mb-4.5 text-left mx-auto">
            <Divider
              orientation={!isMobile ? "left" : "center"}
              className="red-divider"
            >
              <div className="flex items-center text-xl sm:text-2xl">
                <span>What is Safetywashing?</span>
              </div>
            </Divider>
          </h2>
          <p className="text-base mt-4 font-normal leading-[30px] text-left mx-auto">
            Under the umbrella of AI safety research, a wide variety of benchmarks have been proposed that claim to measure desirable safety properties, distinct from the general capabilities of models.
          </p>
          <p className="text-base mt-4 font-normal leading-[30px] text-left mx-auto">
            However, we find that many safety benchmarks highly correlate with upstream model capabilities (e.g. MMLU, MATH, GSM8K) by design, potentially enabling 
            
            <span className="italic font-medium  bg-[#ED9F9B] px-1.5 whitespace-nowrap inline-block">
              <it>safetywashing</it>
            </span> where safety metrics can be improved when releasing more capable models without tangible safety-specific effort.

                      </p>

          <p className="text-base mt-4 font-normal leading-[30px] text-left mx-auto">
            While we don't claim that safety and capabilities are necessarily orthogonal, we do claim that AI safety research efforts should focus on "differential safety progress" – making models safer beyond the default trajectory of capability advances. 
          </p>
          <div className="mt-8 mb-2">
            <div className="text-sm sm:text-base italic text-left mt-4 max-w-[85%]">
              <div className="w-full md:w-[70%]">
                <img
                  src="images/safetywashing_explanation.svg"
                  alt="Safetywashing Explanation"
                  className="w-full"
                />
              </div>
            </div>
            <p className="text-sm sm:text-base italic text-left mt-4 max-w-[85%] mx-auto">
              Figure 2: The tight connection between many safety properties and
              capabilities can enable safetywashing, where capabilities
              advancements (e.g., training a larger model) can be advertised as
              progress on "AI safety." This confuses the research community to
              the developments that have occurred, distorting the academic
              discourse.
            </p>
          </div>
          <br />
        </div>
        <h2 className="font-semibold leading-9 mb-4.5 text-left mx-auto">
          <Divider
            orientation={!isMobile ? "left" : "center"}
            className="custom-divider"
          >
            <div className="flex items-center text-xl sm:text-2xl">
              <span>Method</span>
            </div>
          </Divider>
        </h2>
        <div className="mt-8 mb-8 flex flex-col items-center">
          <img
            src="images/pipeline.svg"
            alt="outline"
            className="w-[95%] md:max-w-[85%]"
          />

          <p className="text-sm sm:text-base text-left mt-4 max-w-[85%]">
            We derive a simple and highly general methodology for determining
            whether a safety benchmark is entangled with upstream model
            capabilities:
            <br />
            <span className="pl-4">
              <span className="italic font-medium">Step 1:</span> We produce a
              matrix of scores for a set of language models evaluated on a set
              of capabilities and safety benchmarks.
            </span>
            <br />
            <span className="pl-4">
              <span className="italic font-medium">Step 2:</span> We extract the
              first principal component of the capabilities benchmarks and use
              it to compute a capabilities score for each model.
            </span>
            <br />
            <span className="pl-4">
              <span className="italic font-medium">Step 3:</span> We identify whether safety benchmark scores have high correlations with the capabilities score using Spearman's correlation, deriving a "capabilities correlation" for each safety benchmark.
            </span>
          </p>
        </div>
        <StoryBox />
      </div>
      <Citation/>
    </div>
  );
};

export default BodyPage;
