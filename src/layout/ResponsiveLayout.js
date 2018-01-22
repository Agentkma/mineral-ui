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
import Layout from './Layout';

type Props = {
  /** TODO [Responsive] */
  alignItems?:
    | 'start'
    | 'end'
    | 'center'
    | 'stretch'
    | Array<'start' | 'end' | 'center' | 'stretch'>,
  /** TODO [Responsive] */
  breakpoints?: Array<string>,
  /** Must be [Box](./box) or Layout */
  children: React$Element<*>,
  /** flex-direction, TODO [Responsive] */
  direction?: 'column' | 'row' | Array<'column' | 'row'>,
  /** Rendered root HTML element */
  element?: string,
  /** TODO */
  gutters?: boolean,
  /** TODO [Responsive] */
  justifyContent?:
    | 'start'
    | 'end'
    | 'center'
    | 'space-around'
    | 'space-between'
    | 'space-evenly'
    | Array<
        | 'start'
        | 'end'
        | 'center'
        | 'space-around'
        | 'space-between'
        | 'space-evenly'
      >,
  /** flex-direction, TODO [Responsive] */
  reverseOrder?: boolean | Array<boolean>,
  /** flex-wrap, TODO [Responsive] */
  wrap?: boolean | Array<boolean>
};

const styles = {
  root: ({
    breakpoints: propBreakpoints,
    direction,
    justifyContent,
    reverseOrder,
    alignItems,
    wrap
  }) => {
    const breakpoints =
      propBreakpoints &&
      propBreakpoints.map(breakpoint => `@media(min-width: ${breakpoint})`);

    const getMappedPropertyValue = (property, propItem) => {
      if (propItem === 'start' || propItem === 'end') {
        return `flex-${propItem}`;
      } else if (property === 'flexWrap') {
        return propItem && 'wrap';
      } else if (property === 'flexDirection' && reverseOrder) {
        return `${propItem}-reverse`;
      } else {
        return propItem;
      }
    };

    // TODO: Error handling - e.g. what if prop array doesn't match breakpoints array?
    const getResponsiveStyles = (property, prop) => {
      if (
        prop &&
        Array.isArray(prop) &&
        prop.length === breakpoints.length + 1
      ) {
        const styles = {
          [property]: getMappedPropertyValue(property, prop[0])
        };
        prop.map((propItem, index) => {
          if (propItem && index !== 0) {
            styles[breakpoints[index - 1]] = {
              [property]: getMappedPropertyValue(property, propItem)
            };
          }
        });
        return styles;
      } else if (prop) {
        return { [property]: getMappedPropertyValue(property, prop) };
      }
      return null;
    };

    return {
      ...getResponsiveStyles('alignItems', alignItems),
      ...getResponsiveStyles('flexDirection', direction),
      ...getResponsiveStyles('justifyContent', justifyContent),
      ...getResponsiveStyles('flexWrap', wrap)
    };
  }
};

const Root = createStyledComponent(Layout, styles.root, {
  displayName: 'ResponsiveLayout',
  filterProps: ['direction', 'justifyContent', 'alignItems', 'wrap']
});

/**
 * ResponsiveLayout. TODO
 */
export default function ResponsiveLayout(props: Props) {
  return <Root {...props} />;
}
