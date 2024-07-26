import React from 'react';
import Anchor from './anchor';
import { Typography, Row, Col, Card, Collapse, Space, Divider } from 'antd';
// import 'katex/dist/katex.min.css';
// import { InlineMath, BlockMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';

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
						<Divider orientation="left" className='custom-divider'>Abstract</Divider>
					</h2>
					<p className='description'>
					As artificial intelligence systems grow more powerful, the field of "AI safety" promises distinct research areas and problems centered around risk reduction, yet remains poorly defined and inconsistently measured, leading to confusion about how researchers can contribute.
					This lack of clarity is exacerbated by the unclear relationship between AI safety metrics and upstream general capabilities, further obscuring our understanding of differential safety improvements.
					We conduct the most comprehensive meta-analysis to date of AI safety benchmarks, empirically analyzing the correlation between common safety evaluations and general capabilities across dozens of models. Our findings reveal that many safety benchmarks highly correlate with upstream model capabilities, potentially enabling "safetywashing" – where capability improvements are misrepresented as safety advancements. We observe that intuitive arguments often fail to predict these correlations, and research goals motivated by alignment philosophy or aimed at addressing current AI system flaws frequently show high correlation with general capabilities. These results emphasize the need for empirical rigor in AI safety evaluation design and provide a foundation for developing more meaningful safety benchmarks. By grounding safety metrics in empirical evidence, we aim to clarify the concept of AI safety and distinguish targeted safety improvements from upstream capability advancements in AI development.
					</p>
					<br></br>
					<h4 className="quote">
					"For better or worse, benchmarks shape a field." — David Patterson
					</h4>
				</div>
				<div id='safetyxcapabilities' className='section abstract'>
					<h2 className='section__title description'>
						<Divider orientation="left" className='custom-divider'>Overview</Divider>
					</h2>
					<div className='outline__image'>
						<img src='images/splash.png' alt='outline' style={{ maxWidth: "60%" }} />
					</div>
					<p className='description'>
					The rapid advancement of AI systems in recent years has led to growing interest in ensuring that they are not only more generally capable, but also more trustworthy and safe. 
					Under the umbrella of AI safety research, a wide variety of benchmarks have been proposed that claim to measure desirable safety properties, distinct from the general capabilities of models.
					In this paper, we investigate whether these purportedly safety benchmarks are correlated with capabilities, ultimately obscuring differential safety progress as increased performance is highly correlated with upstream model capabilities.
					</p>
					<div className='outline__image'>
						<img src='images/image.png' alt='outline' style={{ maxWidth: "30%" }} />
					</div>
					<p className='description'>
					Distinguishing safety properties from the model's upstream general capabilities is complicated  by how they are intertwined. This poses serious issues for evaluating safety progress, as it makes it harder to identify technical improvements that disproportionately reduce risks associated with AI systems, relative to other attributes (i.e. differential safety progress). 
					In the worst case, this blurred distinction can be an instrument for <b><i>safetywashing</i></b>, where techniques that do not disproportionately contribute to the safety properties of AI systems relative to other attributes are misconstrued as “safety research.”
					</p>
					<div className='outline__image'>
						<img src='images/safetywashing_explanation.png' alt='outline' style={{ maxWidth: "80%" }} />
					</div>
					<p className='description'>
					In this paper, we empirically measure whether common safety benchmarks are highly correlated with capabilities across common chat models by computing the correlation between various safety metrics and a general capabilities component that explains over 70% of model performance across a wide variety of capabilities benchmark.
					In extensive experiments across dozens of models and safety benchmarks, we find that many safety benchmarks have high correlations with capabilities.
					We do not make positive claims that any of the benchmarks are rigorous safety benchmarks, but rather uncover benchmarks that are highly susceptible to safetywashing.
					</p>
					<br/>
					<div className='outline__image'>
						<img src='images/pipeline.png' alt='outline' style={{ maxWidth: "80%" }} />
					</div>
					<p className='description'>
					Using a matrix of scores evaluated on a set of benchmarks, we compute a capabilities score for each model using PCA and identify whether safety benchmarks have high capabilities correlations using Pearson's correlation.
					</p>
				</div>
				<h2 className='section__title description'>
					<Divider orientation="left" className='custom-divider'>Safetywashing Evaluations</Divider>
				</h2>
				<Space direction="vertical" style={{ width: "100%" }}>
					<Collapse bordered={false}>
						<Panel header="1 - Methods" key="1" className="custom-panel">
						<Row gutter={16}>
							<Row gutter={16}>
								<Col xs={24} sm={24} md={24} lg={12} xl={12}>
									<img src="images/safetywashing_check.png" alt="Flow chart to check for Safety " style={{ display: 'block', margin: '0 auto', width: '80%' }} />
								</Col>
								<Col xs={24} sm={24} md={24} lg={12} xl={12}>
									<Paragraph>
									<Latex>{`To establish a capabilities baseline, we collect scores from $m$ models on $b$ capabilities benchmarks and form a matrix of results from benchmarks, which we call the evaluation matrix $E \\in \\mathbb{R}^{m \\times b}$, where $E_{ij}$ is the score of the $i$-th model on the $j$-th benchmark. $E$ is normalized so that each column has mean 0 and variance 1, and PCA is performed on $E$. The capabilities score is the first principal component vector of $E$, and is represented as $\\text{Capabilities Score}_i = (E \\cdot \\text{PC}_1)_i \\quad \\text{for } i = 1, \\ldots, m$.
									For each safety benchmark, we evaluate the same set of $m$ models, redefine metrics such that a higher score indicates improved safety, and normalize the safety benchmark scores to mean 0 and variance 1. We compute the Spearman correlation across models between the capabilities scores and the safety benchmark scores: $\\text{Capabilities Correlation} = \\text{corrmodels(Capabilities Score, Safety Benchmark)}$. 
									A high correlation indicates the benchmark likely measures capabilities rather than distinct safety attributes. A low correlation indicates the benchmarks is measuring attributes distinct from general capabilities, while a negative correlation indicates models obtain worse safety properties as capabilities increase.`}</Latex>
									</Paragraph>
								</Col>
							</Row>
						</Row>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="2 - Human Values" key="2" className="custom-panel">
							<Paragraph>
							Human values are the fundamental beliefs and ideals that guide human behavior and decision making; researchers often aim to encode these values in AI systems. We assess common benchmarks for alignment and helpfulness, machine ethics, and bias, asking whether such measurements are determined primarily by upstream model capabilities.
							
							<br/> <br/>
							<strong>Alignment and Helpfulness</strong>
							<img src="images/alignment_ds.png" alt="Alignment Datasets" style={{ display: 'block', margin: '0 auto', width: '60%' }} />
							Alignment refers to how well AI systems follow the goals of their operators, accurately specifying and implementing the desired goals without unintended consequences or misinterpretations. Common alignment evaluations assess AI systems' helpfulness or instruction-following, with the aim to closely align the AI systems' responses with human preferences.
							Using the LMSYS Chatbot Arena and MT-Bench datasets shown above, we find capabilities correlations of 62.1% and 78.7% respectively for chat models. A similar but weaker effect is observed in base models as well. Thus, these evaluation metrics can be considered one avenue of safetywashing.

							<br/> <br/>
							<strong>Machine Ethics</strong>
							<img src="images/me_ds.png" alt="Machine Ethics Datasets" style={{ display: 'block', margin: '0 auto', width: '60%' }} />
							Machine ethics aims to ensure that AI systems understand and behave in ways that are morally acceptable, in contrast to the usefulness properties emphasized in alignment.
							Using the ETHICS, Sycophancy, and MACHIAVELLI datasets shown above, we find that they have capabilities correlations of 82.2%, -66.8%, and -49.9% respectively.
							We draw a delineation between knowledge and propensity-focused ethical benchmarks. ETHICS focuses on the ability to recognize or identify everyday moral considerations, while MACHIAVELLI and Sycophancy measure propensities—the behavioral tendencies of models. Therefore, exams testing ethical knowledge are likely to be be measuring latent model capabilities and may be avenues for safetywashing. 

							<br/> <br/>
							<strong>Bias</strong>
							<img src="images/bias_ds.png" alt="Bias Datasets" style={{ display: 'block', margin: '0 auto', width: '60%' }} />
							Bias refers to unfair prejudices or systematic errors in AI systems that can lead to discriminatory outcomes. This field broadly aims to ensure AI systems produce fair and equitable results across diverse populations.
							Using the CrowS-Pairs, Anthropic Discrimination Eval, and BBQ datasets shown above, we find that they have capabilities correlations of 28.5% (CrowS-Pairs English), 33.2%, and -37.3% (BBQ Ambiguous) respectively.
							The low correlation betweeen the benchmark and general capabilities suggests that improvements in performance on these benchmarks are likely attributable to factors distinct from advancements in overall capabilities.
							</Paragraph>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="3 - Truthfulness" key="3" className="custom-panel">
							<Paragraph>
							Truthfulness is often touted as a cornerstone for AI safety. Various safety-focused literature discusses the importance of superhuman systems telling the truth—motivating the creation of scalable oversight datasets, verification, and supervision.
							We ask, are common truthfulness benchmarks merely a measure for capabilities? We also note that the term is often used broadly, encompassing accurate question-answering to misconception avoidance, scalable oversight, and calibration.

							<br/> <br/>
							<strong>Misconception Avoidance</strong>
							<img src="images/miscon_ds.png" alt="Misconception Avoidance Datasets" style={{ display: 'block', margin: '0 auto', width: '60%' }} />
							Given that language models may have an underlying propensity to generate misinformation and perpetuate misconceptions, this research area aims to understand the honesty of language models and their ability to resist producing false information even when prompted in ways that might elicit common human errors.
							Using the TruthfulQA dataset, we find that MC1 is highly correlated with capabilities, meaning improved model capabilities heavily improves benchmark performance.
							
							<br/> <br/>
							<strong>Scalable Oversight</strong>
							<img src="images/so_ds.png" alt="Scalable Oversight Datasets" style={{ display: 'block', margin: '0 auto', width: '60%' }} />
							Scalable oversight aims to provide reliable supervision (e.g. labels, reward signals, critiques) to superhuman AI systems when they take actions that human evaluators do not fully understand.
							Using the GPQA and QuALITY datasets, we observe capabilities correlations of 77.7% and 88.8% respectively, suggesting that they are  construct redundancy for capabilities, offering little unique insight beyond measuring general model capabilities.
							
							<br/> <br/>
							<strong>Calibration</strong>
							TODO: Calibration methods equation, figure out latex!

							Calibration datasets measure how well models can express the limits of their competency by accurately conveying their uncertainty
							We find that calibration's capabilities correlation depends on metric. The capabilities correlation for RMSCE is low across vision (−1.2%) and language (21.6%) models. However, comparing Brier scores across models seems to show a strong correlation with accuracy across vision (98.4%) and language (90.5%) models. 
							Our analysis serves as an illustrative example of how safetywashing can occur. While the Brier score is often used to compare different calibration techniques on a single model, using it as a metric across models is highly misleading. This suggests that RMS calibration error should be used.
							</Paragraph>
						</Panel>
					</Collapse>
					<Collapse bordered={false}>
						<Panel header="4 - Security" key="4" className="custom-panel">
							<Paragraph>
							As AI systems have become more powerful, there have been increased security concerns around potential vulnerabilities and malicious use. We investigate two key areas of focus, adversarial robustness and weaponization capabilities.

							<br/> <br/>
							<strong>Adversarial Robustness</strong>
							<img src="images/adv_ds.png" alt="Adversarial Robustness Datasets" style={{ display: 'block', margin: '0 auto', width: '60%' }} />
							Adversarial robustness addresses vulnerabilities in models and the carefully crafted threats that are able to exploit them. Adversaries can easily manipulate vulnerabilities or jailbreak ML systems, causing them to make mistakes.
							Using the ANLI, AdvGLUE, AdvGLUE++, Human Jailbreaks, Tree of Attacks with Pruning (TAP), Greedy Coordinate Gradient (GCG), ImageNet-A, and Projected Gradient Descent (PGD) benchmarks and attacks, we found the following results.
							<img src="images/adv_attack_table.jpeg" alt="Adversarial Robustness Results Table" style={{ display: 'block', margin: '0 auto', width: '40%' }} />
							We find that traditional benchmarks, particularly those focused on text manipulation and perturbation as well as adversarial examples, show high correlation with general capabilities in current vision and language models. While these metrics may have captured distinct properties in earlier models, they now appear to be largely indistinguishable from overall model performance. In contrast, we observe low capabilities correlations across all categories of jailbreaking and gradient-based benchmarks, across vision and language models.

							<br/> <br/>
							<strong>Weaponization Capabilities</strong>
							<img src="images/wc_ds.png" alt="Weaponization Capabilities Datasets" style={{ display: 'block', margin: '0 auto', width: '60%' }} />
							We borrow the definitions of weaponization capabilities from recent U.S. federal executive action and state legislation. These documents cite security risks that may be easier to cause with a powerful AI system – which include the creation or use of chemical, biological, radiological, or nuclear weapons, as well as cyberattacks on critical infrastructure.
							Using the Weapons of Mass Destruction Proxy (WMDP) benchmark, we observe that Biology, Chemistry, and Cybersecurity subsets recorded capabilities correlations of -87.5%, -81.1%, and -86.0% respectively (a higher accuracy on biosecurity, chemical security, and cybersecurity knowledge leads to a lower score).
							These results indicate that as models become more capable overall, their potential for weaponization increases significantly. The strong negative correlations across all three fields suggest that more advanced AI systems are more likely to possess knowledge that could be misused for harmful purposes.
							</Paragraph>
						</Panel>
					</Collapse>
				</Space>
			</div>
		</div>
	);
};

export default BodyPage;
