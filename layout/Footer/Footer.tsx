import cn from 'classnames';
import { format } from 'date-fns';

import { FooterProps } from './Footer.props';

import styles from './Footer.module.css';

export const Footer = ({ className, ...props }: FooterProps) => {
	return (
		<footer
			className={cn(className, styles.footer)}
			{...props}
		>
			<div>
				Copyright © 2022 - {format(new Date(), 'yyyy')} OwlTop
			</div>
			<a href='#' target='_blank'>Terms of Use</a>
			<a href='#' target='_blank'>Privacy Policy</a>
		</footer>
	);
};