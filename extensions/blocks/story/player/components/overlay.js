/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */

/**
 * External dependencies
 */
import GridiconFullscreen from 'gridicons/dist/fullscreen';

/**
 * WordPress dependencies
 */
import { createElement, useCallback } from '@wordpress/element';

/**
 * Internal dependencies
 */
import { DecoratedButton } from './button';
import { NavigateBeforeIcon, NavigateNextIcon } from './icons';

export default function Overlay( {
	ended,
	hasPrevious,
	hasNext,
	onNextSlide,
	onPreviousSlide,
	icon,
	slideCount,
} ) {
	const onPreviousSlideHandler = useCallback(
		event => {
			if ( ended ) {
				return;
			}
			event.stopPropagation();
			onPreviousSlide();
		},
		[ onPreviousSlide, ended ]
	);

	const onNextSlideHandler = useCallback(
		event => {
			if ( ended ) {
				return;
			}
			event.stopPropagation();
			onNextSlide();
		},
		[ onNextSlide, ended ]
	);

	return (
		<div className="wp-story-overlay">
			{ icon && (
				<div className="wp-story-embed-icon">
					{ icon }
					<span>{ slideCount }</span>
				</div>
			) }
			{ ! icon && (
				<div className="wp-story-embed-icon-expand">
					<GridiconFullscreen role="img" />
				</div>
			) }
			{ hasPrevious && (
				<div className="wp-story-prev-slide" onClick={ onPreviousSlideHandler }>
					<DecoratedButton size={ 44 } label="Previous Slide" className="outlined-w">
						<NavigateBeforeIcon size={ 24 } />
					</DecoratedButton>
				</div>
			) }
			{ hasNext && (
				<div className="wp-story-next-slide" onClick={ onNextSlideHandler }>
					<DecoratedButton size={ 44 } label="Next Slide" className="outlined-w">
						<NavigateNextIcon size={ 24 } />
					</DecoratedButton>
				</div>
			) }
		</div>
	);
}
