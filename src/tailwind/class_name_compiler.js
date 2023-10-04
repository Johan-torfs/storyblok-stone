function getClassName(blok, options) {
    var className = options.className || '';
    options.decorators = options.decorators || [];

    options.decorators.forEach(decorator => {
        const decoratorOptions = decorator.options || {};
        className += ' ' + decorator.decorator(blok, decoratorOptions);
    });
    return className.replace(/\s+/g, ' ').trim();
}


import { getPaddingYClasses } from './decorators/padding_y';
import { getPaddingXClasses } from './decorators/padding_x';
import { getMarginYClasses } from './decorators/margin_y';
import { getMarginXClasses } from './decorators/margin_x';
import { getBackgroundColorClasses } from './decorators/background_color';
import { getGapClasses } from './decorators/gap';
import { getColumnsClasses } from './decorators/columns';
import { getAlignContentClasses } from './decorators/grid_align_content';
import { getAlignItemsClasses } from './decorators/grid_align_items';
import { getJustifyContentClasses } from './decorators/grid_justify_content';
import { getJustifyItemsClasses } from './decorators/grid_justify_items';
import { getContainerSizeClasses } from './decorators/container_size';
import { getColSpanClasses } from './decorators/columns_col_span';
import { getVisibilityClasses } from './decorators/visibility';
import { getBreakpointClasses } from './decorators/breakpoint';
import { getBorderClasses } from './decorators/border';
import { getShadowClasses } from './decorators/shadow';
import { getBorderRadiusClasses } from './decorators/border_radius';
import { getTextColorClasses } from './decorators/text_color';
import { getFontClasses } from './decorators/text_font';
import { getFontSizeClasses } from './decorators/text_size';
import { getTextCenterClasses } from './decorators/text_center';
import { getMarginBottomClasses } from './decorators/margin_bottom';
import { getTextWidthClasses } from './decorators/text_width';

export {
    getClassName,
    getPaddingXClasses,
    getPaddingYClasses,
    getMarginXClasses,
    getMarginYClasses,
    getBackgroundColorClasses,
    getGapClasses,
    getColumnsClasses,
    getAlignContentClasses,
    getAlignItemsClasses,
    getJustifyContentClasses,
    getJustifyItemsClasses,
    getContainerSizeClasses,
    getColSpanClasses,
    getVisibilityClasses,
    getBreakpointClasses,
    getBorderClasses,
    getShadowClasses,
    getBorderRadiusClasses,
    getTextColorClasses,
    getFontClasses,
    getFontSizeClasses,
    getTextCenterClasses,
    getMarginBottomClasses,
    getTextWidthClasses,
}