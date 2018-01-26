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
import { generateId } from '../utils';
import Popover from '../Popover';

type Props = {
  /** Trigger for the Tooltip */
  children: React$Node
  /** Content of the Tooltip */
  , content: string // TODO: enforce
  /** For use with uncontrolled components, in which the Tooltip is immediately upon initialization */
  , defaultIsOpen?: boolean
  /** For use with controlled components, in which the app manages Dropdown state */
  , isOpen?: boolean
  /** Called when Tooltip is closed */
  , onClose?: (event: SyntheticEvent<>) => void
  /** Called when Tooltip is opened */
  , onOpen?: (event: SyntheticEvent<>) => void
};

type State = {
  isOpen?: boolean
};

/**
 * Tooltips hold supporting information for user controls.
 * Tooltips float over page content.
 * You can control placement and open/close actions to customize your implementation.
 * Tooltips can be toggled on a user action or a state change.
 */
export default class Tooltip extends Component<Props, State> {
  props: Props;

  state: State = {
    isOpen: Boolean(this.props.defaultIsOpen)
  };

  id: string = `tooltip-${generateId()}`;

  render() {
    const {
      children,
      ...restProps
    } = this.props;

    const isControlled = this.isControlled();
    console.log('tooltip controlled?', isControlled);
    const { isOpen } = isControlled ? this.props : this.state;

    const popoverProps = {
      ...restProps
      , isOpen
      , getTriggerProps: this.getTriggerProps
    };

    return <Popover {...popoverProps}>{children}</Popover>;
  }

  getTriggerProps = (props: Object) => ({
    ...props
    , 'aria-describedby': props.contentId
    , onBlur: this.close
    , onFocus: this.open
    , onKeyDown: this.onTriggerKeyDown
    , onMouseEnter: this.open
    , onMouseLeave: this.close
    , tabIndex: 0
  });


  onTriggerKeyDown = (event: SyntheticEvent<>) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      this.close(event);
    }
  };

  open = (event: SyntheticEvent<>) => {
    if (this.isControlled()) {
      this.openActions(event);
    } else {
      this.setState(
        { isOpen: true },
        () => {
          this.openActions(event);
        }
      );
    }
  };

  openActions = (event: SyntheticEvent<>) => {
    this.props.onOpen && this.props.onOpen(event);
  };

  close = (event: SyntheticEvent<>) => {
    if (this.isControlled()) {
      this.closeActions(event);
    } else {
      this.setState(
        { isOpen: false },
        () => {
          this.closeActions(event);
        }
      );
    }
  };

  closeActions = (event: SyntheticEvent<>) => {
    this.props.onClose && this.props.onClose(event);
  };

  isControlled = () => {
    return this.props.isOpen !== undefined ;
  };
}
