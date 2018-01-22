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
import { Box as _Box } from '../../../../../layout';

export default createStyledComponent(_Box, ({ inline, padding, theme }) => ({
  alignItems: 'center',
  backgroundColor: theme.color_theme_10,
  color: theme.color_theme_70,
  display: inline ? 'inline-flex' : 'flex',
  justifyContent: 'center',
  outline: `1px solid ${theme.color_theme_20}`,
  padding: padding ? null : theme.space_inset_sm
}));
