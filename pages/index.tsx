import { useState } from 'react';
import Head from 'next/head';

import {
	Button,
	Htag,
	Paragraph,
	Rating,
	Tag
} from '../components';
import { withLayout } from '../layout/Layout';

const Home = () => {
	const [rating, setRating] = useState<number>(4);

	return (
		<>
			<Head>
				<title>Top Courses App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Htag tag='h1'>
				Text
			</Htag>
			<Button appearance='primary' arrow='right'>
				Button
			</Button>
			<Button appearance='ghost' arrow='down'>
				Button
			</Button>
			<Paragraph size='s'>
				Small text
			</Paragraph>
			<Paragraph size='m'>
				Medium text
			</Paragraph>
			<Paragraph size='l'>
				Large text
			</Paragraph>
			<Tag size='s'>
				Ghost
			</Tag>
			<Tag size='s' color='red'>
				Red
			</Tag>
			<Tag size='m' color='green'>
				Green
			</Tag>
			<Tag color='primary'>
				Primary
			</Tag>
			<Rating
				rating={rating}
				isEditable
				setRating={setRating}
			/>
		</>
	);
};

export default withLayout(Home);