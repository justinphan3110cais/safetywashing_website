import React from 'react';
import Anchor from './anchor';
import { Typography, Row, Col, Card, Collapse, Space, Divider } from 'antd';

// import './BodyPage.css';
import './BodyPage.scss';
const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const BodyPage = () => {
	return (
		<div className='body'>
			{/* <Anchor /> */}
			<div>
				<div id='abstract' className='section abstract'>
					<h2 className='section__title description'>
						<Divider orientation="left" className='custom-divider'>Motivations</Divider>
					</h2>
					<p className='description'>
						Performance on popular ML benchmarks is closely linked to model scale, indicating that these benchmarks often measure a common underlying factor of general model capabilities. Despite this, significant effort goes into creating new benchmarks that claim to measure unique phenomena. We question whether this effort is wasteful, leveraging spectral analysis to reveal an underlying primary capabilities component in benchmark-performance-space that largely explains variations in model performance. In fact, our analysis of existing safety benchmarks shows that variance in performance is largely due to this capabilities component. To make effective, meaningful progress in safety research, we propose focusing on metrics that do not strongly correlate with scale and offer a framework to evaluate new safety benchmarks and methods pursuant to these goals.
					</p>
				</div>
				<div id='safetyxcapabilities' className='section abstract'>
					<h2 className='section__title description'>
						<Divider orientation="left" className='custom-divider'>Safety vs Capabilities Evaluations</Divider>
					</h2>
					<div className='outline__image'>
						<img src='images/safety_evaluations.png' alt='outline' style={{ maxWidth: "80%" }} />
					</div>
					<p className='description'>
					From our analysis, we identify three classes of safety tasks based on correlation between benchmark and capabilities scores. Tasks whose scores improve with scale have a positive correlation, while tasks whose scores improve with tuning show a safer correlation on specific model classes (e.g. chat/instruct-tuned models). Finally, tasks whose scores do not improve naturally with model scale show no correlation between benchmark scores and capabilities scores.
					</p>
					<br />
					<div className='outline__image'>
						<img src='images/pipeline.png' alt='outline' style={{ maxWidth: "80%" }} />
					</div>
					<p className="description">
						Illustration of the safety task identification pipeline. (Step 1) We produce a matrix of scores
						for a set of language models evaluated on a set of capabilities benchmarks. (Step 2) We extract
						the first principal component and use it to compute a capabilities score for each model. (Step 3)
						We perform analysis of base and chat/instruct-tuned models on a variety of tasks representing major
						areas of AI safety. (Step 4) We identify tasks whose scores correlate with scale, tasks
						whose scores improve with scale only with chat/instruct-tuning, and tasks whose scores do not correlate
						with scale.
					</p>
				</div>
				<h2 className='section__title description'>
					<Divider orientation="left" className='custom-divider'>Overview of General Capabilities Correlations</Divider>
				</h2>
				<Space direction="vertical" style={{ width: "100%" }}>
					<Collapse bordered={false}>
						<Panel header="1 - General Capabilities and Model Class Correlations" key="1" className="custom-panel">
						<Row gutter={16}>
							<Row gutter={16}>
								<Col span={12}>
									<img src="images/4plots.png" alt="Adversarial Robustness" style={{ display: 'block', margin: '0 auto', width: '100%' }} />
									{/* <Paragraph>
									Observed correlations between capabilities scores and models' performance. 
									(Top left) safety task positively correlated with capabilities score. 
									(Top right) safety task not correlated with capabilities score. 
									(Bottom left) safety task negatively correlated with capabilities score. 
									(Bottom right) safety task where chat models are positively correlated with capabilities score while base models are not. 
									CC indicates the capabilities component of the corresponding benchmark.
									</Paragraph> */}
								</Col>
								<Col span={12}>
									{/* <img src="images/capabilities_vs_log_flops.png" alt="Model capabilities vs log(FLOPS) graph" style={{ display: 'block', margin: '0 auto', width: '90%' }} /> */}
									<Paragraph>
									{/* We apply spectral analysis of benchmark scores to identify a unified underlying <emph>capabilities score</emph> for models in terms of their performance on a range of benchmarks. Unlike naive composite benchmarks that take the simple average of performance across component tests, we leverage the Spearman correlation and Eigenvalue decomposition to weight benchmarks according to their importance in distinguishing model performance, yielding a more nuanced and accurate measure of a model's overall capabilities.
									The graph demonstrates a strong correlation between model size (measured in log(FLOP)) and the resulting capabilities score, suggesting that larger models generally perform better across the range of benchmarks. */}
									
									{/* <ul>
										<li>72% of variance in base models and 71% of variance in chat/instruct models can be explained by the capabilities component</li>
									</ul> */}

									From our analyses, we observe that 72% and 71% of the variance in base and chat/instruct models respectively can be explained by the capabilities component.
									<br/><br/>
									(Top left) Safety task positively correlated with capabilities score. <br/>
									(Top right) Safety task not correlated with capabilities score. <br/>
									(Bottom left) Safety task negatively correlated with capabilities score. <br/>
									(Bottom right) Safety task where chat models are positively correlated with capabilities score while base models are not. <br/>
									</Paragraph>
								</Col>
							</Row>
							{/* <Row gutter={16}>
								Our results are obtained from calculating capabilities components from 13 benchmarks on 24 base models and 22 chat/instruct-tuned models, listed below.
								<br/> <br/>

								<Col span={8}> 
									<Paragraph>
										Benchmarks:
										<ul>
										<li>LogiQA (Liu et al. 2020)</li>
										<li>PIQA (Bisk et al. 2020)</li>
										<li>Hellaswag (Zellers et al. 2019)</li>
										<li>Winogrande (Sakaguchi et al. 2019)</li>
										<li>COPA (Roemmele et al. 2011)</li>
										<li>MedQA (Pan et al. 2021)</li>
										<li>ARC Challenge (Clark et al. 2018)</li>
										<li>MMLU (Hendrycks et al. 2021)</li>
										<li>MATH (Hendrycks et al. 2021)</li>
										<li>LAMBADA (Paperno et al. 2016)</li>
										<li>Wikitext (Merity et al. 2013)</li>
										<li>GSM8K (Cobbe et al. 2021)</li>
										<li>GPQA (Rein et al. 2023)</li>
										<li>BBH (BIG bench authors, 2023)</li>
										</ul>
									</Paragraph>
								</Col>
								<Col span={8}>
									<Paragraph>
										Models (Base)
										<ul>
										<li>Gemma-2B</li>
										<li>Gemma-7B</li>
										<li>Llama-2-7B</li>
										<li>Llama-2-13B</li>
										<li>Llama-2-70B</li>
										<li>Llama-3-8B</li>
										<li>Llama-3-70B</li>
										<li>Mistral-7B-v0.1</li>
										<li>Mixtral-8x7B-v0.1</li>
										<li>Falcon-7B</li>
										<li>Falcon-40B</li>
										<li>Falcon-180B</li>
										<li>Yi-6B</li>
										<li>Yi-9B</li>
										<li>Yi-34B</li>
										<li>Qwen1.5-0.5B</li>
										<li>Qwen1.5-1.8B</li>
										<li>Qwen1.5-4B</li>
										<li>Qwen1.5-7B</li>
										<li>Qwen1.5-14B</li>
										<li>Qwen1.5-32B</li>
										<li>Qwen1.5-72B</li>
										<li>Deepseek-llm-7B-base</li>
										<li>Deepseek-llm-67B-base</li>
										</ul>
									</Paragraph>
								</Col>
								<Col span={8}>
									<Paragraph>
										Models (Chat/Instruct)
										<ul>
										<li>Gemma-1.1-2B-it</li>
										<li>Gemma-1.1-7B-it</li>
										<li>Llama-2-7B-Chat</li>
										<li>Llama-2-13B-Chat</li>
										<li>Llama-2-70B-Chat</li>
										<li>Llama-3-8B-Instruct</li>
										<li>Llama-3-70B-Instruct</li>
										<li>Mistral-7B-Instruct-v0.2</li>
										<li>Mixtral-8x7B-Instruct-v0.1</li>
										<li>Falcon-7B-Instruct</li>
										<li>Falcon-40B-Instruct</li>
										<li>Falcon-180B-Instruct</li>
										<li>Yi-6B-Chat</li>
										<li>Yi-9B-Chat</li>
										<li>Yi-34B-Chat</li>
										<li>Qwen1.5-0.5B-Chat</li>
										<li>Qwen1.5-1.8B-Chat</li>
										<li>Qwen1.5-4B-Chat</li>
										<li>Qwen1.5-7B-Chat</li>
										<li>Qwen1.5-14B-Chat</li>
										<li>Qwen1.5-32B-Chat</li>
										<li>Qwen1.5-72B-Chat</li>
										<li>Deepseek-llm-7B-Chat</li>
										<li>Deepseek-llm-67B-Chat</li>
										</ul>
									</Paragraph>
								</Col>
							</Row>  */}
						</Row>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="2 - Adversarial Robustness" key="2" className="custom-panel">
							<Row gutter={16}>
								<Col span={12}>
									<Paragraph>
										Adversarial robustness evaluates models' ability to maintain performance when faced with adversarial examples. We analyze whether these benchmarks measure novel properties or are highly correlated with general capabilities.
										<br/> <br/>
										Our work shows that some adversarial robustness benchmarks moderately correlate with general capbilities (such as AdvGLUE), while others have low or even negative correlation (such as HarmBench). 
										{/* These results may be due to the different nature of tasks in these datasets. */}
										<br/><br/>
										Furthermore, different model classes have different scaling properties. 
										{/* Some LLM adversarial robustness benchmarks have higher capabilities correaltions when using chat/instruct-tuned models, demonstrating that improving the capabilities correaltion of a safety benchmark is possible.  */}
										This demonstrates that evaluating correlations for multiple model classes is crucial for understanding whether a benchmark will be solved as general capabilities improve.
									</Paragraph>
								</Col>
								<Col span={12}>
									<img src="images/adv_res.jpeg" alt="Adversarial Robustness" style={{ display: 'block', margin: '0 auto', width: '80%' }} />
								</Col>
							</Row>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="3 - Bias" key="3" className="custom-panel">
							<Row gutter={16}>
								<Col span={8}>
									<Paragraph>
									We investigate bias datasets aimed at quantifying language models' propagation of social stereotypes and harmful preconceptions. It is well-known that pretraining on internet data introduces bias, and one might expect that training larger models on more data would increase the amount of bias present. We test this hypothesis by measuring the capabilities coefficient of different LLM bias benchmarks.
									<br/> <br/>
									</Paragraph>
								</Col>
								<Col span={16}>
									<Paragraph>
										<img src="images/bias_table.png" alt="Capabilities correlations of base and chat/instruct models on different bias evaluation datasets" style={{ display: 'block', margin: '0 auto', width: '90%' }} />
									</Paragraph>
								</Col>
								Our findings reveal that bias is often weakly correlated with capabilties (such as with CrowS-Pairs, Anthropic Discrimination Evaluation, and BBQ Disambiguated) but this is not always the case (such as with BBQ Ambiguated). This observation contrasts with conventional wisdom, which suggests that scaling up models exacerbates bias due to associations in the training data.
							</Row>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="4 - Machine Ethics" key="4" className="custom-panel">
							<Row gutter={16}>
								<Col span={16}>
									Machine ethics benchmarks probe models' understanding of moral concepts. We find that machine ethics benchmarks tend to be highly correlated with general capabilities, indicating that internet-scale pretraining imbues LLMs with an understanding of ethics and morality. 
									<br/><br/>
									However, our results also show that this correlation is not identical across all areas of machine ethics. Some topics improve much more slowly with general capabilities, suggesting a need to ensure a balanced understanding of different ethical perspectives is present in models.
								</Col>
								<Col span={6}>
									<img src="images/ethics_table.png" alt="Capabilities correlations of base and chat/instruct models on different bias evaluation datasets" style={{ display: 'block', margin: '0 auto', width: '100%' }} />
								</Col>
							</Row>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="5 - Malicious Use" key="5" className="custom-panel">
						<Row gutter={16}>
								<Col span={16}>
									<Paragraph>
									Malicious use evaluations test whether models can resist being exploited for harmful ends, including spreading misinformation or enabling cybercrime. To bypass refusal training, many of these evaluations also employ adversarial prompts. 
									<br/><br/>
									Our results show that improvement in base model capabilities exacerbates malicious use. We also observe that chat/instruction-tuning weakens many capabilities correlations, indicating that models no longer become less safe with scale.
									These results demonstrate that instruct/chat models have improved over base models in their ability to leverage general capabilities to reduce malicious use risk. However, in most cases the correlations remain negative or weak, suggesting there is still considerable work to be done on this problem.

									<br/> <br/>
									</Paragraph>
								</Col>
								<Col span={6}>
									<Paragraph>
										<img src="images/malicious_use_table.png" alt="Capabilities correlations of base and chat/instruct models on different malicious use evaluation datasets" style={{ display: 'block', margin: '0 auto', width: '90%' }} />
									</Paragraph>
								</Col>
							</Row>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="6 - Rogue AI Risk" key="6" className="custom-panel">
						<Row gutter={16}>
								<Col span={10}>
									<Paragraph>
										Rogue AI risk evaluations probe risks related to deceptive model behavior, dishonesty, and power-seeking tendencies. Previously, it was unknown whether models become more power-seeking as they scale. 
										<br/><br/>
										We observe that measures of power-seeking tendencies and ethical violations decrease as general capabilities improve, but sycophancy worsens. This highlights how different aspects of rogue AI risk are correlated with general capabilities to different extents.
									</Paragraph>
								</Col>
								<Col span={14}>
									<Paragraph>
										<img src="images/rogue_ai_table.png" alt="Capabilities correlations of on rogue AI risk evaluations" style={{ display: 'block', margin: '0 auto', width: '100%' }} />
									</Paragraph>
								</Col>
							</Row>
						</Panel>
					</Collapse>
				</Space>
			</div>
		</div>
	);
};

export default BodyPage;
