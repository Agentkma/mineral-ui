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
import React, { Children, cloneElement } from 'react';
import { withTheme } from 'glamorous';
import { createStyledComponent } from '../styles';

type Props = {
  /** TODO */
  alignItems?: 'start' | 'end' | 'center' | 'stretch',
  /** Must be [Box](./box) or Flex */
  children: React$Element<*>,
  /** flex-direction, TODO */
  direction?: 'column' | 'row',
  /** Rendered root HTML element */
  element?: string,
  /** TODO */
  gutters?: boolean,
  /** TODO */
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly',
  /** flex-direction, TODO */
  reverseOrder?: boolean,
  /** flex-wrap, TODO */
  wrap?: boolean
};

export const componentTheme = (baseTheme: Object) => ({
  Flex_gutterWidth: baseTheme.space_inline_md,

  ...baseTheme
});

const styles = {
  root: ({
    alignItems,
    direction,
    gutters,
    justifyContent,
    reverseOrder,
    theme: baseTheme,
    wrap
  }) => {
    const theme = componentTheme(baseTheme);

    const getAlignmentValue = style => {
      if (style === 'start' || style === 'end') {
        return `flex-${style}`;
      } else {
        return style;
      }
    };

    // TODO: Prevent default values from applying?
    return {
      alignItems: getAlignmentValue(alignItems),
      display: 'flex',
      flexDirection: reverseOrder ? `${direction}-reverse` : direction,
      flexWrap: wrap && 'wrap',
      justifyContent: getAlignmentValue(justifyContent),
      margin: gutters ? `-${parseFloat(theme.Flex_gutterWidth) / 2}em` : null
    };
  }
};

const ThemedRoot = withTheme(
  ({ children, element, gutters, theme: baseTheme, ...restProps }) => {
    const theme = componentTheme(baseTheme);

    // TODO: Need to adopt pattern from Button here?
    const Root = createStyledComponent(element, styles.root, {
      displayName: 'Flex',
      includeStyleReset: true
    });

    const rootProps = {
      gutters,
      ...restProps
    };

    // TODO:
    // Should we enforce that children are only FlexItems?
    // (or Flexs? Could be easy if Flex styled FlexItem)
    let boxes = Children.map(children, child => {
      const { alignSelf, grow, shrink } = child.props;

      return cloneElement(child, {
        alignSelf,
        grow,
        margin: gutters && `${parseFloat(theme.Flex_gutterWidth) / 2}em`,
        shrink
      });
    });

    return <Root {...rootProps}>{boxes}</Root>;
  }
);

/**
 * Flex. TODO
 */
export default function Flex({
  alignItems = 'stretch',
  direction = 'row',
  element = 'div',
  gutters = true,
  justifyContent = 'start',
  ...restProps
}: Props) {
  const rootProps = {
    alignItems,
    direction,
    element,
    gutters,
    justifyContent,
    ...restProps
  };

  return <ThemedRoot {...rootProps} />;
}
