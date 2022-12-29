import Head from 'next/head';
import { Htag } from '../components';

const Home = () => {
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
		</>
	);
};

export default Home;