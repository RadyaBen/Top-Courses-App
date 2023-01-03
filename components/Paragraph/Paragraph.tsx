import cn from 'classnames';

import { ParagraphProps } from './Paragraph.props';

import styles from './Paragraph.module.css';

export const Paragraph = ({
	size = 'm',
	children,
	className,
	...props
}: ParagraphProps) => {
	return (
		<p
			className={cn(className, {
				[styles.s]: size === 's',
				[styles.m]: size === 'm',
				[styles.l]: size === 'l',
			})}
			{...props}
		>
			{children}
		</p>
	);
};