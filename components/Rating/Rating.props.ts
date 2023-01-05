import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface RatingProps extends DetailedHTMLProps<
	HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement
> {
	isEditable?: boolean;
	rating: number;
	setRating?: (rating: number) => void;
}