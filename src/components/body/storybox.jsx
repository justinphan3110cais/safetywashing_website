import { Divider } from "antd";
import React, { useState, useEffect } from "react";

const subtasks = [
  {
    title: "Alignment",
    color: "#E07A73",
    workOn: {
      title: "We should work on alignment because:",
      points: [
        "Misinterpretation Risks: AIs could catastrophically fail to capture and abide by human intentions, leading to undesirable outcomes.",
        "Misgeneralization vs. Goal Misgeneralization Distinction: We need robust alignment, not just robust capabilities, especially when systems operate out-of-distribution.",
        "Capability vs. Aimability Distinction: Alignment is about making models helpful, harmless, and honest, which is necessary for safety.",
      ],
    },
    dontWorkOn: {
      title: "We should not work on alignment because:",
      points: [
        "Alignment as AGI: If alignment requires satisfying all human preferences, it essentially becomes the task of building AGI.",
        "Alignment as business alignment: Current operationalization of alignment often reduces it to business-centric task preferences.",
        "Philosophical challenges with preferences: Various types of preferences (revealed, stated, idealized) present significant challenges and may not be worth satisfying.",
      ],
    },
  },
  {
    title: "Machine Ethics",
    color: "#F5DE8C",
    workOn: {
      title: "We should work on machine ethics because:",
      points: [
        "Ethical vs. Competitive Behavior: AIs need to balance ethical behavior with market competitiveness, requiring a nuanced approach to various human values.",
        "Cognitive vs. Compassionate Empathy: While AI systems are developing cognitive empathy, we need to ensure they also develop compassionate empathy for truly ethical behavior.",
        "Values Cannot Be Ignored: AI development inherently involves moral considerations, necessitating a globally representative approach to beneficial values.",
      ],
    },
    dontWorkOn: {
      title: "We should not work on machine ethics because:",
      points: [
        "Goodhart's Law: Encoding ethical goals in AI systems may lead to unintended consequences due to the complexity and fragility of human values.",
        "Intelligence Implies Morality: More capable AI systems may naturally tend towards ethical behavior, as seen in the correlation between human intelligence and prosocial behavior.",
        "Cultural Relativity: The lack of universal ethics across cultures suggests there's no objective basis for machine ethics.",
        "Focus on Control: We should prioritize ensuring AI systems don't cause harm (control) before worrying about instilling beneficial values (ethics).",
      ],
    },
  },
  {
    title: "Bias",
    color: "#AFC18B",
    workOn: {
      title: "We should work on bias because:",
      points: [
        "Garbage In, Garbage Out: Models reflect the biases and statistical tendencies of their data, more tightly imitating those biases.",
        "Misuse: AI developers are not representative. They are not politically, racially, or socioeconomically diverse. Consequently if we do not study bias, their own biases and power will be perpetuated and entrenched through AI systems.",
      ],
    },
    dontWorkOn: {
      title: "We should not work on bias because:",
      points: [
        "Debaising Capabilities Come for Free: As models scale and become more intelligent, they become better at understanding concepts such as racism. We can simply instruct them not to be biased.",
        "Political Trojan Horse: While there is a trade-off between equity and efficiency, we should just focus on efficiency. Demanding a focus on equity is not scientific but political.",
      ],
    },
  },
  {
    title: "Truthfulness",
    color: "#E07A73",
    workOn: {
      title: "We should work on truth-seeking AI because:",
      points: [
        "Disinformation or Censoring the Truth: Powerful entities might attempt to censor, manipulate, or persuade people maliciously using AI. Our counterbalance against this sort of malicious use is truthful AI.",
        "Truthfulness vs. Honesty: To make AIs truthful, we will also need to make AIs honest, so truthfulness is not just about increasing factual knowledge.",
      ],
    },
    dontWorkOn: {
      title: "We should not work on truth-seeking AI because:",
      points: [
        "Truthfulness Is Generic Capabilities Research: Truthfulness is a synonym for accuracy, which is already the core metric of AI research and development.",
        "Truthful Statements Can Cause Undue Harm: In some cases, the risks associated with discovering new truths can outweigh the benefits.",
        "Humans as Guinea Pigs: Future advanced truth-seeking AIs may be motivated to exert power over humans in the pursuit of knowledge.",
      ],
    },
  },
  {
    title: "Scalable Oversight",
    color: "#E07A73",
    workOn: {
      title: "We should work on scalable oversight because:",
      points: [
        "Necessity for Safety: Scalable oversight is necessary for supervising superintelligent AIs. Without it, how can we supervise and provide feedback to superhuman AI systems?",
        "Scalable Oversight as Idealized RLHF: Scalable oversight is very similar to alignment with idealized preferences, which are suitable for alignment as they are not based on false beliefs, manipulation, or framing effects.",
      ],
    },
    dontWorkOn: {
      title: "We should not work on scalable oversight because:",
      points: [
        "Scalable Oversight as Late-Stage Capabilities: Scalable oversight can be seen as generic late-stage capabilities work, focusing on capabilities bottlenecks that occur in later stages of AI development.",
        "Other Methods Can Replace Scalable Oversight: Robust anomaly detectors, monitoring measures, and AI forecasting systems can handle many of the failure modes scalable oversight seeks to address.",
      ],
    },
  },
  {
    title: "Adversarial Robustness",
    color: "#F5DE8C",
    workOn: {
      title: "We should work on adversarial robustness because:",
      points: [
        "Corner Case vs. Average Case Distinction: Adversarial robustness focuses on corner case performance, not average case performance, which is distinct from general intelligence.",
        "Adversarial Robustness Is A Persistent Problem: Even highly evolved intelligent systems have vulnerabilities, indicating that intelligence alone doesn't guarantee adversarial robustness.",
        "Proxies Need to be Robust to Optimization Pressure: Future agents guided by neural network proxies will need to be robust to optimizing agents to pursue what we want.",
      ],
    },
    dontWorkOn: {
      title: "We should not work on adversarial robustness because:",
      points: [
        "Robustness Is Upstream General Capabilities: Improving robustness would improve general capabilities, as it implies better representations and generalization to more challenging scenarios.",
        "Superintelligent AIs Won't Get Trivial Adversarial Examples Wrong: Intuitively, a superintelligence would not be fooled by simple adversarial perturbations.",
        "Malicious Use Is A Distraction: Focusing on preventing malicious actors from exploiting vulnerabilities in AI systems is less important than the broader alignment problem.",
      ],
    },
  },
];

const StoryBox = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);

  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const handleTaskChange = (index) => {
    setCurrentTaskIndex(index);
  };

  const currentTask = subtasks[currentTaskIndex];

  return (
    <div className="my-16 px-4">
      <h2 className="font-semibold leading-9 mb-4.5 text-left mx-auto">
        <Divider
          orientation={!isMobile ? "left" : "center"}
          className="custom-divider"
        >
          <div className="flex items-center text-xl sm:text-2xl">
            <span>Dubious Arguments</span>
          </div>
        </Divider>
      </h2>
      <p className="text-base mt-4 mb-4 font-normal leading-[30px] text-left mx-auto">
        In this section we will cover key intuitive arguments for and against
        alignment, and thereby show how intuitive arguments and their underlying
        distinctions can be a highly fragile and unreliable guide for
        determining a research area's relation to upstream general capabilities
        and tractability.
      </p>
      <div className="flex flex-wrap justify-center mb-8">
        {subtasks.map((task, index) => (
          <button
            key={index}
            onClick={() => handleTaskChange(index)}
            className={`m-2 px-4 py-2 text-xs sm:text-sm rounded-full ${
              index === currentTaskIndex
                ? task.color === "#F5DE8C"
                  ? "text-black"
                  : "text-white"
                : "bg-gray-200 text-gray-800"
            } hover:opacity-80 transition-opacity`}
            style={
              index === currentTaskIndex ? { backgroundColor: task.color } : {}
            }
          >
            {task.title}
          </button>
        ))}
      </div>

      <div>
        <div className="w-full flex flex-col items-center mb-8">
          <h3
            className="font-medium text-xl text-center w-full"
            style={{ color: "black" }}
          >
            {currentTask.title}
          </h3>
          <div
            className="w-24 h-0.5 rounded-full"
            style={{ backgroundColor: currentTask.color }}
          ></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className={`text-${
                currentTask.color === "#F5DE8C" ? "black" : "white"
              } py-4 px-6`}
              style={{ backgroundColor: currentTask.color }}
            >
              <h4 className="text-sm sm:text-base font-medium">
                {currentTask.workOn.title}
              </h4>
            </div>
            <ol className="list-decimal pl-8 pr-6 py-6">
              {currentTask.workOn.points.map((point, pointIndex) => {
                const [title, description] = point.split(": ");
                return (
                  <li key={pointIndex} className="mb-2 text-sm sm:text-base">
                    <span
                      className="font-medium"
                      style={{
                        color:
                          currentTask.color === "#F5DE8C"
                            ? "#CC9900"
                            : currentTask.color,
                      }}
                    >
                      {title}:
                    </span>{" "}
                    {description}
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="md:w-1/2 bg-white rounded-lg shadow-lg overflow-hidden">
            <div
              className={`text-${
                currentTask.color === "#F5DE8C" ? "black" : "white"
              } py-4 px-6`}
              style={{ backgroundColor: currentTask.color }}
            >
              <h4 className="text-sm sm:text-base font-medium">
                {currentTask.dontWorkOn.title}
              </h4>
            </div>
            <ol className="list-decimal pl-8 pr-6 py-6">
              {currentTask.dontWorkOn.points.map((point, pointIndex) => {
                const [title, description] = point.split(": ");
                return (
                  <li key={pointIndex} className="mb-2 text-sm sm:text-base">
                    <span
                      className="font-medium"
                      style={{
                        color:
                          currentTask.color === "#F5DE8C"
                            ? "#CC9900"
                            : currentTask.color,
                      }}
                    >
                      {title}:
                    </span>{" "}
                    {description}
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryBox;
