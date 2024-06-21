import React, { useState, useEffect } from 'react';
import IconAdobe from '../../assets/icons/IconAdobe';
import IconGithub from '../../assets/icons/IconGithub';
import { Typography } from 'antd';
import { Collapse, Button, Menu, Dropdown, Space } from 'antd';
import { CaretDownOutlined, CaretUpOutlined, YoutubeOutlined } from '@ant-design/icons';
import { FileOutlined, GithubOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const capabilitiesStyle = {
	backgroundColor: '#BFD1F2',
	padding: '0 5px',
  };
  
  const safetyStyle = {
	backgroundColor: '#C5D5D2',
	padding: '0 5px',
  };

const HeaderPage = () => {

	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		setIsMobile(window.innerWidth <= 768);
	}, [window.innerWidth]);

	const authors = [
		{ name: "Richard Ren", affiliation: 1, bioLink: "https://github.com/notrichardren" },
		{ name: "Steven Basart", affiliation: 1, bioLink: "https://stevenbas.art/" },
		{ name: "Adam Khoja", affiliation: "1,2", bioLink: "" },
		{ name: "Alexander Pan", affiliation: 3, bioLink: "https://aypan17.github.io/" },
		{ name: "Alice Gatti", affiliation: "1", bioLink: "https://www.linkedin.com/in/gattialice/", contrib: "‡" },
		{ name: "Long Phan", affiliation: 1, bioLink: "https://longphan.ai/" },
		{ name: "Xuwang Yin", affiliation: 1, bioLink: "https://xuwangyin.github.io/" },
		{ name: "Mantas Mazeika", affiliation: "1,9", bioLink: "https://www.linkedin.com/in/mmazeika/" },
		{ name: "Gabriel Mukobi", affiliation: "8", bioLink: "https://gabrielmukobi.com" },
		{ name: "Ryan Hwang Kim", affiliation: "8", bioLink: "https://gabrielmukobi.com" },
		{ name: "Stephen Fitz", affiliation: "8", bioLink: "https://gabrielmukobi.com" },
		{ name: "Dan Hendrycks", affiliation: 1, bioLink: "https://people.eecs.berkeley.edu/~hendrycks/" },
	];

	const affiliations = [
		"Center for AI Safety",
		"University of Pennsylvania",
		"UC Berkeley",
		"Stanford University",
		"Yale University",
		"Keio University",
	];

	let breakAuthorIndices = isMobile ? [1, 53] : [3, 7, 13, 18, 22, 27, 32, 37, 42, 47,50, 53]


	const author_component = <div>
		<p className='header__member'>
			{authors.map((author, index) => (
				<span style={{ color: "#3A6B65" }} key={index}>
					{author.bioLink && <a href={author.bioLink} target="_blank">{author.name}</a>}
					{!author.bioLink && <span>{author.name}</span>}
					{author.contrib && <sup>{author.contrib}</sup>}
					<sup>{author.affiliation}</sup>

					{index !== authors.length - 1 && ", "}
					{breakAuthorIndices.includes(index) && <br />}
				</span>
			))}
		</p>
		<p className='header__note'>
			{affiliations.map((affiliation, index) => (
				<span key={index}>
					<sup>{index + 1}</sup>{affiliation}
					{index !== affiliations.length - 1 && ", "}
					{index == 2 && <br />}
				</span>
			))}
		</p>
		<br />
	</div>

	const [activeKey, setActiveKey] = useState(['0']);
	const onCollapseChange = (key) => {
		setActiveKey(key);
	};

	const githubLink = "https://github.com/andyzoujm/representation-engineering"
	const paperLink = "https://arxiv.org/abs/2310.01405"



	return (
		<div className='header'>
			<h1 className='header__title'>
				How Safety Benchmarks Measure{' '}
				<span style={capabilitiesStyle}>Capabilities</span> Instead of{' '}
				<span style={safetyStyle}>Safety</span>
			</h1>

			<Collapse ghost className="custom-collapse" bordered={false} onChange={onCollapseChange}>
				<Panel header={
					<Button ghost className="customDashedButton">
						<div className='header__button' style={{ textAlign: 'center', color: 'black' }}>
							<span >Team</span>
							<span style={{ marginLeft: "5px" }}>{activeKey.includes('1') ? <CaretUpOutlined style={{ color: 'black' }} /> : <CaretDownOutlined style={{ color: 'black' }} />}</span>
						</div>

					</Button>
				} key="1" showArrow={false}>
					<div style={{ margin: "0 auto", maxWidth: "1024px" }} >
						{author_component}
					</div>
				</Panel>
			</Collapse>

			<div style={{ alignItems: 'center', textAlign: 'center', marginTop: '20px' }}>
				<Space>
					<Button ghost className='customDashedButton' href={paperLink} target="_blank">
						<span className='header__button' style={{ textAlign: 'center', color: 'black' }}>
							<FileOutlined />
						</span>
					</Button>
					<Button ghost className='customDashedButton' href={githubLink} target="_blank">
						<span className='header__button' style={{ textAlign: 'center', color: 'black' }}>
							<GithubOutlined />
						</span>
					</Button>
				</Space>
			</div>
		</div>
	);
};

export default HeaderPage;
