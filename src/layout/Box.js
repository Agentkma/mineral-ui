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
import React from 'react';
import { createStyledComponent } from '../styles';
import { componentTheme as layoutComponentTheme } from './Flex';

type Props = {
  /** Rendered root HTML element */
  element?: string,
  /** TODO */
  inline?: boolean,
  /** TODO */
  margin?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | string | number,
  /** TODO */
  marginBottom?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | string
    | number,
  /** TODO */
  marginLeft?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | string
    | number,
  /** TODO */
  marginHorizontal?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | string
    | number,
  /** TODO */
  marginRight?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | string
    | number,
  /** TODO */
  marginTop?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | string
    | number,
  /** TODO */
  marginVertical?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | 'xxl'
    | string
    | number,
  /** TODO */
  padding?: 'sm' | 'md' | 'lg' | string | number,
  /** TODO */
  paddingBottom?: 'sm' | 'md' | 'lg' | string | number,
  /** TODO */
  paddingLeft?: 'sm' | 'md' | 'lg' | string | number,
  /** TODO */
  paddingHorizontal?: 'sm' | 'md' | 'lg' | string | number,
  /** TODO */
  paddingRight?: 'sm' | 'md' | 'lg' | string | number,
  /** TODO */
  paddingTop?: 'sm' | 'md' | 'lg' | string | number,
  /** TODO */
  paddingVertical?: 'sm' | 'md' | 'lg' | string | number,
  /** TODO */
  width?: string | number
};

const styles = {
  root: ({ inline, theme: baseTheme, width: propsWidth, ...props }) => {
    const theme = layoutComponentTheme(baseTheme);

    // TODO:
    // Replace with `reduce`?
    // Should this support an array of values that matches the CSS shorthand?
    const getSpacingStyles = property => {
      const properties = Object.keys(props).filter(
        prop => prop.indexOf(property) != -1
      );
      const styles = {};
      const spacingType = property === 'margin' ? 'stack' : 'inset';

      const value = style =>
        theme[`space_${spacingType}_${props[style]}`] || props[style];

      properties &&
        properties.map(style => {
          if (style !== undefined) {
            if (style.indexOf('Horizontal') != -1) {
              styles[`${property}Left`] = value(style);
              styles[`${property}Right`] = value(style);
            } else if (style.indexOf('Vertical') != -1) {
              styles[`${property}Bottom`] = value(style);
              styles[`${property}Top`] = value(style);
            } else {
              styles[style] = value(style);
            }
          }
        });

      return styles;
    };

    const width =
      typeof propsWidth === 'number' && propsWidth < 1
        ? `${propsWidth * 100}%`
        : propsWidth;

    return {
      display: inline ? 'inline-block' : 'block',
      ...getSpacingStyles('margin'),
      ...getSpacingStyles('padding'),
      width
    };
  }
};

/**
 * Box. TODO
 */
export default function Box({ element = 'div', ...restProps }: Props) {
  // TODO: Need to adopt pattern from Button here?
  const Root = createStyledComponent(element, styles.root, {
    displayName: 'Box',
    includeStyleReset: true
  });
  const rootProps = {
    ...restProps
  };

  return <Root {...rootProps} />;
}
