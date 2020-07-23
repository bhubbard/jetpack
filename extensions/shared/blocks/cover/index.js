/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */
import { addFilter } from '@wordpress/hooks';

/**
 * Internal dependencies
 */
import coverEditMediaPlaceholder from './cover-media-placeholder';
import coverMediaReplaceFlow from './cover-replace-control-button';
import jetpackCoverBlockEdit from './edit';
import JetpackCoverListBlock from './cover-list-block';

import './editor.scss';

// Take control of Replace button.
addFilter( 'editor.MediaReplaceFlow', 'jetpack/cover-media-replace-flow', coverMediaReplaceFlow );

// Take control of MediaPlaceholder.
addFilter(
	'editor.MediaPlaceholder',
	'jetpack/cover-edit-media-placeholder',
	coverEditMediaPlaceholder
);

// Extend Core CoverEditBlock.
addFilter( 'editor.BlockEdit', 'jetpack/cover-block-edit', jetpackCoverBlockEdit );

addFilter( 'editor.BlockListBlock', 'jetpack/premium-block-with-warning', JetpackCoverListBlock );
