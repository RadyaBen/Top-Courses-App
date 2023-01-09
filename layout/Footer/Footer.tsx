import { format } from 'date-fns';

import { FooterProps } from './Footer.props';

export const Footer = ({ ...props }: FooterProps) => {
	return (
		<footer {...props}>
			<div>
				Copyright © 2022 - {format(new Date(), 'yyyy')} OwlTop
			</div>
			<a href="" target='_blank'>Terms of Use</a>
			<a href="" target='_blank'>Privacy Policy</a>
		</footer>
	);
};