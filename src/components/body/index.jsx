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
						Performance on popular ML benchmarks is closely linked to model scale, indicating that these benchmarks often measure a common underlying factor of general model capabilities. Despite this, significant effort goes into creating new benchmarks that claim to measure unique phenomena. We question if this effort is wasteful and use spectral analysis to identify a primary capabilities component explaining most model performance variation. Our analysis of existing safety benchmarks shows that variance in performance is largely due to this capabilities component. We suggest that safety research should focus on metrics not strongly correlated with scale to make meaningful progress. Our work offers a framework to evaluate both new safety benchmarks and methods, aiming to advance safety research effectively.
					</p>
				</div>
				<div id='safetyxcapabilities' className='section abstract'>
					<h2 className='section__title description'>
						<Divider orientation="left" className='custom-divider'>Safety x Capabilities Evaluations</Divider>
					</h2>
					<div className='outline__image'>
						<img src='images/safety_evaluations.png' alt='outline' style={{ maxWidth: "80%" }} />
					</div>
					<p className='description'>
						Our analysis identifies three classes of safety tasks according to the correlation between their scores and the capabilities scores. Tasks whose scores improve with scale have a positive correlation between benchmark scores and capabilities score. Tasks whose scores improve with tuning show a safer correlation on specific model classes, e.g., chat/instruct-tuned models. Finally, tasks whose scores do not improve naturally with model scale show no correlation between benchmark scores and capabilities scores.
					</p>
					<br />
					<div className='outline__image'>
						<img src='images/pipeline.png' alt='outline' style={{ maxWidth: "80%" }} />
					</div>
					<p className="description">
						Illustration of the safety task identification pipeline. We first produce a matrix of scores
						for a set of language models evaluated on a set of capabilities benchmarks (first step). We extract
						the first principal component and use it to compute a capabilities score for each model (second step).
						We perform analysis of base and chat/instruct-tuned models on a variety of tasks representing major
						areas of AI safety (third step). Finally, we identify tasks whose scores are correlated with scale, tasks
						whose scores improve with scale only with chat/instruct-tuning, and tasks which are uncorrelated
						with scale (fourth step)
					</p>
				</div>
				<h2 className='section__title description'>
					<Divider orientation="left" className='custom-divider'>Overview of General Capabilities Correlations</Divider>
				</h2>
				<Space direction="vertical" style={{ width: "100%" }}>
					<Collapse bordered={false}>
						<Panel header="1 - Adversarial Robustness" key="1" className="custom-panel">
							<Row gutter={16}>
								<Col span={12}>
									<Paragraph>
										Adversarial robustness evaluates models' ability to maintain performance when faced with adversarial examples. In the
										vision domain, adversarial robustness is known to have different properties from general capabilities [62, 104].
										However, the relation between general capabilities and adversarial robustness in text-based AI has largely remained an
										unsettled research question. Benchmark Harm [8], AdV GLUE [94], and TextAttack [34] are designed to assess different aspects of this robustness [61, 77]. We now
										analyze whether these benchmarks measure novel properties or are highly correlated with general capabilities.
									</Paragraph>
								</Col>
								<Col span={12}>
									<Paragraph>
										<img src="images/adv_res.jpeg" alt="Adversarial Robustness" style={{ width: '100%' }} />

										We compute the correlation between the capability score and safety scores on the following benchmarks: AdvGLUE [91],
										AdvGLUE++ [34], andTextrobustness [34], and HarmBench [91]. Full results on all datasets and model classes are in the appendix.
									</Paragraph>
								</Col>
							</Row>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="2 - Bias" key="2">
						</Panel>
					</Collapse>
				</Space>
			</div>
		</div>
	);
};

export default BodyPage;
