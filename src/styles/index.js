import { widthStyles } from './width';
import { heightStyles } from './height';
import { textStyles } from './text';
import {
	marginBottomStyles,
	marginTopStyles,
	marginLeftStyles,
	marginRightStyles,
	marginStyles,
} from './margin';
import {
	paddingBottomStyles,
	paddingTopStyles,
	paddingLeftStyles,
	paddingRightStyles,
	paddingStyles,
} from './padding';
import { flexboxStyles } from './flexbox';
import { borderRadius } from './borderRadius';
import { borderStyles } from './borderStyles';
import { colorStyles, palette } from './colors';

export const styles = Object.assign(
	{},
	paddingBottomStyles,
	paddingTopStyles,
	paddingLeftStyles,
	paddingRightStyles,
	paddingStyles,
	marginBottomStyles,
	marginTopStyles,
	marginLeftStyles,
	marginRightStyles,
	marginStyles,
	textStyles,
	heightStyles,
	widthStyles,
	flexboxStyles,
	borderRadius,
	borderStyles,
	colorStyles,
	palette,
);
