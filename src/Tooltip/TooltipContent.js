/**
 * Copyright 2017 CA
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow */
import React, { Component } from 'react';
import { Popper } from 'react-popper';
import { createStyledComponent } from '../styles';
import { createThemedComponent } from '../themes';
import PopoverArrow from '../Popover/PopoverArrow';

type Props = {
  /** Content of the Tooltip */
  children: React$Node,
  /** Placement of the Popover */
  placement?:
    | 'auto'
    | 'auto-end'
    | 'auto-start'
    | 'bottom'
    | 'bottom-end'
    | 'bottom-start'
    | 'left'
    | 'left-end'
    | 'left-start'
    | 'right'
    | 'right-end'
    | 'right-start'
    | 'top'
    | 'top-end'
    | 'top-start',
};

export const componentTheme = (baseTheme: Object) => ({
  TooltipContent_backgroundColor: baseTheme.color_gray_90,
  TooltipContent_borderRadius: baseTheme.borderRadius_1,
  TooltipContent_boxShadow: baseTheme.shadow_2,
  TooltipContent_color: baseTheme.color_white,
  TooltipContent_fontSize: baseTheme.fontSize_ui,
  TooltipContent_lineHeight: baseTheme.lineHeight_prose,
  TooltipContent_paddingVertical: baseTheme.space_inset_sm,
  TooltipContent_paddingHorizontal: baseTheme.space_inset_md,
  TooltipContent_zIndex: baseTheme.zIndex_100,

  ...baseTheme
});

const TooltipArrow = createThemedComponent(PopoverArrow, ({ theme }) => {
  const tooltipTheme = componentTheme(theme);

  return {
    PopoverArrow_backgroundColor: tooltipTheme.TooltipContent_backgroundColor,
    PopoverArrow_borderColor: 'none'
  };
});


const arrowSize = '8px'; // TODO: prop

const Root = createStyledComponent(
  Popper,
  ({ theme: baseTheme }) => {
    const theme = componentTheme(baseTheme);

    return {
      backgroundColor: theme.TooltipContent_backgroundColor,
      borderRadius: theme.TooltipContent_borderRadius,
      boxShadow: theme.TooltipContent_boxShadow,
      color: theme.TooltipContent_color,
      fontSize: theme.TooltipContent_fontSize,
      lineHeight: theme.TooltipContent_lineHeight,
      padding: `${theme.TooltipContent_paddingVertical} ${theme.TooltipContent_paddingHorizontal}`,
      zIndex: theme.TooltipContent_zIndex,

      '&[data-placement^="top"]': {
        marginBottom: arrowSize
      },
      '&[data-placement^="bottom"]': {
        marginTop: arrowSize
      },
      '&[data-placement^="left"]': {
        marginRight: arrowSize
      },
      '&[data-placement^="right"]': {
        marginLeft: arrowSize
      },
      '&[data-x-out-of-boundaries]': {
        visibility: 'hidden'
      }
    };
  },
  {
    displayName: 'TooltipContent',
    includeStyleReset: true
  }
);

export default class TooltipContent extends Component<Props> {
  props: Props;

  render() {
    const {
      children,
      placement,
      ...restProps
    } = this.props;

    const rootProps = {
      placement,
      ...restProps
    };
    const tooltipArrow = {
      size: arrowSize,
      placement
    };

    return (
      <Root {...rootProps}>
        {({ popperProps, restProps }) => {
          const wrapperProps = {
            ...popperProps,
            ...restProps
          };
          tooltipArrow.placement = wrapperProps['data-placement'];

          return (
            <div {...wrapperProps}>
              {children}
              <TooltipArrow {...tooltipArrow} />
            </div>
          );
        }}
      </Root>
    );
  }
}
