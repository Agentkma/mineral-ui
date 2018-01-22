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
import { createStyledComponent } from '../../../../../styles';
import { Flex as _Flex } from '../../../../../layout';

export default createStyledComponent(_Flex, ({ gutters, theme }) => {
  const Flex_gutterWidth = '0.5em';

  const offset = gutters === undefined ? `calc(${Flex_gutterWidth} - 4px)` : -4;

  return {
    position: 'relative',

    '&::before': {
      border: `1px dotted ${theme.color_theme_30}`,
      bottom: offset,
      content: '""',
      left: offset,
      position: 'absolute',
      right: offset,
      top: offset,
      zIndex: -1
    }
  };
});
