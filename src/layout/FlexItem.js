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
import Box from './Box';

type Props = {
  /** TODO */
  alignSelf?: 'start' | 'end' | 'center' | 'stretch',
  /** TODO */
  grow?: number,
  /** TODO */
  shrink?: number
};

const styles = {
  root: ({ alignSelf, grow, shrink, width: propsWidth }) => {
    const getAlignmentValue = style => {
      if (style === 'start' || style === 'end') {
        return `flex-${style}`;
      } else {
        return style;
      }
    };
    const width =
      typeof propsWidth === 'number' && propsWidth < 1
        ? `${propsWidth * 100}%`
        : propsWidth;

    return {
      alignSelf: getAlignmentValue(alignSelf),
      flex: `${grow} ${shrink} ${width || 'auto'}`
    };
  }
};

const Root = createStyledComponent(Box, styles.root, {
  displayName: 'FlexItem',
  includeStyleReset: true,
  filterProps: ['inline', 'width']
});

/**
 * FlexItem. TODO
 */
export default function FlexItem({
  grow = 0,
  shrink = 0,
  ...restProps
}: Props) {
  const rootProps = { grow, shrink, ...restProps };
  return <Root {...rootProps} />;
}
