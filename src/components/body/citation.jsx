import { Divider } from "antd";

export const Citation = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold leading-9 mb-4.5 text-left mx-auto">
        <Divider orientation="left" className="custom-divider">
          Citation
        </Divider>
      </h2>
      <div className="citation bg-gray-100 p-4 rounded-lg">
        <div>
          <div>
            {`@article{ren2024safety  ,`}
            <br />
          </div>
          <div className="pl-8">
            {`title={xxx},`}
            <br />
          </div>
          <div className="pl-8">
            {`author={xxxx},`}
            <br />
          </div>
          <div className="pl-8">
            {`year={2024},`}
            <br />
          </div>
          <div className="pl-8">
            {`eprint={xxxx.xxxxx},`}
            <br />
          </div>
          <div className="pl-8">
            {`archivePrefix={arXiv},`}
            <br />
          </div>
          <div className="pl-8">{`primaryClass={cs.LG}`}</div>
          <div>{`}`}</div>
        </div>
      </div>
    </div>
  );
};
