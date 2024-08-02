import { Divider } from "antd";


export const Citation = () => {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold leading-9 mb-4.5 text-left mx-auto">
        <Divider orientation="left" className="custom-divider">
          Citation
        </Divider>
      </h2>
      <div className="citation bg-gray-100 p-4 rounded-lg text-xs">
        <div>
          <div>
            {`@misc{ren2024safetywashingaisafetybenchmarks,`}
            <br />
          </div>
          <div className="pl-8">
            {`title={Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?},`}
            <br />
          </div>
          <div className="pl-8">
            {`  author={Richard Ren and Steven Basart and Adam Khoja and Alice Gatti and Long Phan and Xuwang Yin and Mantas Mazeika and Alexander Pan and Gabriel Mukobi and Ryan H. Kim and Stephen Fitz and Dan Hendrycks},`}
            <br />
          </div>
          <div className="pl-8">
            {`year={2024},`}
            <br />
          </div>
          <div className="pl-8">
            {`eprint={2407.21792},`}
            <br />
          </div>
          <div className="pl-8">
            {`archivePrefix={arXiv},`}
            <br />
          </div>
          <div className="pl-8">{`primaryClass={cs.LG},`}</div>
          
          <div className="pl-8">{`url={https://arxiv.org/abs/2407.21792},`}</div>
          <div>{`}`}</div>
        </div>
      </div>
    </div>
  );
};
