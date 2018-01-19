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
import React, { cloneElement, Component } from 'react';
import { createStyledComponent } from '../styles';
import Popover from '../Popover';

type Props = {
  /** Trigger for the Tooltip */
  children: React$Node,
  /** Content of the Tooltip */
  content: String,
  /** For use with controlled components, in which the app manages Tooltip state */
  isOpen?: boolean
};

/**
 * Popovers hold supporting information or user controls.
 * Popovers float over page content.
 * You can control placement, scroll behavior, and focus management to customize your implementation.
 * Popovers can be toggled on a user action or a state change.
 */
export default class Tooltip extends Component<Props> {
  props: Props;

  render() {
    return (
      <Popover {...this.props} />
    );
  }
}
