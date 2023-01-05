import { FunctionComponent } from 'react';

import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';
import { Footer } from './Footer/Footer';
import { LayoutProps } from './Layout.props';

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(
	Component: FunctionComponent<T>
) => {
	const withLayoutComponent = (props: T) => {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
	return withLayoutComponent;
};