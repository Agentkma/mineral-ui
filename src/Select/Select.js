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
import { createThemedComponent, mapComponentThemes } from '../themes';
import Dropdown, {
  componentTheme as dropdownComponentTheme
} from '../Dropdown/Dropdown';

type Item = {
  iconEnd?: React$Element<*>,
  iconStart?: React$Element<*>,
  disabled?: boolean,
  divider?: boolean,
  onClick?: (event: SyntheticEvent<>) => void,
  render?: (item: Object, props: Object, theme: Object) => React$Element<*>,
  secondaryText?: React$Node,
  text?: React$Node,
  variant?: 'regular' | 'danger' | 'success' | 'warning'
};

type Props = {
  data: Array<{ items: Array<Item>, title?: React$Node }>
};

type State = {};

export const componentTheme = (baseTheme: Object) => {
  return {
    ...mapComponentThemes(
      {
        name: 'Dropdown',
        theme: dropdownComponentTheme(baseTheme)
      },
      {
        name: 'Select',
        theme: {}
      },
      baseTheme
    )
  };
};

const Root = createThemedComponent(Dropdown, ({ theme: baseTheme }) => {
  return {
    ...mapComponentThemes(
      {
        name: 'Select',
        theme: componentTheme(baseTheme)
      },
      {
        name: 'Dropdown',
        theme: {}
      },
      baseTheme
    )
  };
});

/**
 * Select
 */
export default class Select extends Component<Props, State> {
  render() {
    const { data, ...restProps } = this.props;

    const rootProps = {
      data,
      getMenuProps: this.getMenuProps,
      getItemProps: this.getItemProps,
      getTriggerProps: this.getTriggerProps,
      ...restProps
    };

    return (
      <Root {...rootProps}>
        <div>Click Me</div>
      </Root>
    );
  }

  getMenuProps = (props: Object) => {
    console.log('Select.getMenuProps');
    return {
      ...props,
      role: 'listbox'
    };
  };

  getItemProps = (props: Object) => {
    console.log('Select.getItemProps');
    return {
      ...props,
      role: 'option'
    };
  };

  getTriggerProps = (props: Object) => {
    console.log('Select.getTriggerProps');
    return {
      ...props,
      'aria-haspopup': 'listbox',
      tabIndex: 0
    };
  };
}
