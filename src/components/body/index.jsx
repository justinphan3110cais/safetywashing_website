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
            research to address emerging and future risks. However, the field of
            AI safety remains poorly defined and inconsistently measured,
            leading to confusion about how researchers can contribute. This lack
            of clarity is compounded by the unclear relationship between AI
            safety benchmarks and upstream general capabilities (e.g., general
            knowledge and reasoning). To address these issues, we conduct a
            comprehensive meta-analysis of AI safety benchmarks, empirically
            analyzing their correlation with general capabilities across dozens
            of models and providing a survey of existing directions in AI
            safety. <br />
            <br />
            Our findings reveal that many safety benchmarks highly correlate
            with upstream model capabilities, potentially enabling{" "}
            <span className="italic font-medium  bg-[#ED9F9B] px-1.5 whitespace-nowrap inline-block">
              <it>safetywashing</it>
            </span>
            -where capability improvements are misrepresented as safety
            advancements.
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
            benchmarks are correlated with capabilities, ultimately obscuring
            differential safety progress as increased performance is highly
            correlated with upstream model capabilities.
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
            The rapid advancement of AI systems in recent years has led to
            growing interest in ensuring that they are not only more generally
            capable, but also more trustworthy and safe. Under the umbrella of
            AI safety research, a wide variety of benchmarks have been proposed
            that claim to measure desirable safety properties, distinct from the
            general capabilities of models.
          </p>
          <p className="text-base mt-4 font-normal leading-[30px] text-left mx-auto">
            Distinguishing safety properties from the model's upstream general
            capabilities is complicated by how they are intertwined. This poses
            serious issues for evaluating safety progress, as it makes it harder
            to identify technical improvements that disproportionately reduce
            risks associated with AI systems, relative to other attributes (i.e.
            differential safety progress). In the worst case, this blurred
            distinction can be an instrument for{" "}
            <b>
              <i>safetywashing</i>
            </b>
            , where techniques that do not disproportionately contribute to the
            safety properties of AI systems relative to other attributes are
            misconstrued as “safety research.”
          </p>
          <div className="mt-8 mb-2">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
              <div className="w-full md:w-[30%]">
                <img
                  src="images/circle_safetywashing.svg"
                  alt="Circle Safetywashing"
                  className="w-full"
                />
              </div>
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
              <span className="italic font-medium">Step 3:</span> We identify
              whether safety benchmarks have high capabilities correlations
              using Spearman's correlation.
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
