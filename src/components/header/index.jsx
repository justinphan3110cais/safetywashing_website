import React, { useState, useEffect } from "react";
import { Collapse, Button, Space } from "antd";
import { CaretDownOutlined, CaretUpOutlined } from "@ant-design/icons";
import { FileOutlined, GithubOutlined } from "@ant-design/icons";

const { Panel } = Collapse;

const HeaderPage = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, [window.innerWidth]);

  const authors = [
    {
      name: "Richard Ren",
      affiliation: "*1,2",
      bioLink: "https://github.com/notrichardren",
    },
    {
      name: "Steven Basart",
      affiliation: "*1",
      bioLink: "https://stevenbas.art/",
    },
    { name: "Adam Khoja", affiliation: "1,3", bioLink: "" },
    {
      name: "Alice Gatti",
      affiliation: "1",
      bioLink: "https://www.linkedin.com/in/gattialice/",
    },
    { name: "Long Phan", affiliation: "1", bioLink: "https://longphan.ai" },
    {
      name: "Xuwang Yin",
      affiliation: "1",
      bioLink: "https://xuwangyin.github.io",
    },
    {
      name: "Mantas Mazeika",
      affiliation: "1",
      bioLink: "https://scholar.google.com/citations?user=fGeEmLQAAAAJ&hl=en",
    },
    {
      name: "Alexander Pan",
      affiliation: "3",
      bioLink: "https://aypan17.github.io/",
    },
    {
      name: "Gabriel Mukobi",
      affiliation: "4",
      bioLink: "https://gabrielmukobi.com",
    },
    {
      name: "Ryan H. Kim",
      affiliation: "1,5",
      bioLink: "https://www.linkedin.com/in/ryanhwangkim",
    },
    {
      name: "Stephen Fitz",
      affiliation: "6",
      bioLink: "https://stephenfitz.net/",
    },
    {
      name: "Dan Hendrycks",
      affiliation: "1",
      bioLink: "https://people.eecs.berkeley.edu/~hendrycks",
    },
  ];

  const affiliations = [
    "Center for AI Safety",
    "University of Pennsylvania",
    "UC Berkeley",
    "Stanford University",
    "Yale University",
    "Keio University",
  ];

  let breakAuthorIndices = isMobile ? [1, 4] : [3, 7];

  const author_component = (
    <div>
      <p className="text-center text-[#3A6B65] text-sm sm:text-base md:text-lg font-semibold mb-4">
        {authors.map((author, index) => (
          <span key={index}>
            {author.bioLink ? (
              <a
                href={author.bioLink}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {author.name}
              </a>
            ) : (
              <span>{author.name}</span>
            )}
            {author.contrib && <sup>{author.contrib}</sup>}
            <sup>{author.affiliation}</sup>
            {index !== authors.length - 1 && ", "}
            {breakAuthorIndices.includes(index) && <br />}
          </span>
        ))}
      </p>
      <p className="text-center text-xs sm:text-sm md:text-base mb-4 space-y-1">
        {affiliations.map((affiliation, index) => (
          <span key={index} className="block">
            <sup>{index + 1}</sup>
            <span>{affiliation}</span>
            {index !== affiliations.length - 1 && ","}
          </span>
        ))}
      </p>
      <p>*Equal contribution</p>
    </div>
  );

  const [activeKey, setActiveKey] = useState(["0"]);
  const onCollapseChange = (key) => {
    setActiveKey(key);
  };

  const paperLink = "https://arxiv.org/abs/2407.21792";

  return (
    <div className="mb-[31px]">
      <h1 className="max-w-3xl mx-auto text-xl sm:text-4xl md:text-4xl font-medium leading-tight text-center mt-20 mb-4.5">
		<span className="bg-[#ED9F9B] px-1.5">Safetywashing:</span> <span>
          Do AI Safety Benchmarks
          <br /> Actually Measure <span className="bg-[#CDE6C8]">Safety Progress</span>?
        </span>
      </h1>
      <Collapse
        ghost
        className="custom-collapse"
        bordered={false}
        onChange={onCollapseChange}
      >
        <Panel
          header={
            <Button ghost className="customDashedButton mt-4">
              <div className="text-center mt-auto text-black text-base font-medium leading-6 mb-3.5">
                <span>Authors</span>
                <span className="ml-1.5">
                  {activeKey.includes("1") ? (
                    <CaretUpOutlined className="text-black" />
                  ) : (
                    <CaretDownOutlined className="text-black" />
                  )}
                </span>
              </div>
            </Button>
          }
          key="1"
          showArrow={false}
        >
          <div>{author_component}</div>
        </Panel>
      </Collapse>

      <div className="flex flex-col items-center mt-2">
        <Space>
          <Button
            ghost
            className="customDashedButton"
            href={paperLink}
            target="_blank"
          >
            <span className="text-center mt-auto text-black text-base font-medium leading-6 mb-3.5">
              <FileOutlined className="mr-1" />
              Paper
            </span>
          </Button>
          {/* <Button
            ghost
            className="customDashedButton"
            href={githubLink}
            target="_blank"
          >
            <span className="text-center mt-auto text-black text-base font-medium leading-6 mb-3.5">
              <GithubOutlined className="mr-1" />
              Github (Coming Soon)
            </span>
          </Button> */}
        </Space>
      </div>
    </div>
  );
};

export default HeaderPage;
