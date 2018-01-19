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
import { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { createStyledComponent } from '../../../../../styles';
import Button from '../../../../../Button';
import Tooltip from '../../../../../Tooltip';

const DemoLayout = createStyledComponent('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between'
});

export default {
  id: 'controlled',
  title: 'Controlled',
  description: `Tooltip controls its own state by default,
and can optionally be managed by the application as a controlled component through the \`isOpen\` attribute.
Callbacks for \`onOpen\` and \`onClose\` are also provided.`,
  scope: { Button, Component, DemoLayout, findDOMNode, Tooltip },
  source: `
    class App extends Component {
      constructor(props) {
        super(props);

        this.state = {
          isOpen: false
        };

        this.onOpen = this.onOpen.bind(this);
        this.onClose = this.onClose.bind(this);
        this.toggleTooltip = this.toggleTooltip.bind(this);
      }

      onOpen(event) {
        this.setState({ isOpen: true });
      }

      onClose(event) {
        // Prevent extra call to toggleTooltip when clicking the controlling button.
        // Also avoid interactions with other popovers.
        const demoLayoutNode = findDOMNode(this.demoLayout);
        if (
          !event.nativeEvent &&
          demoLayoutNode &&
          demoLayoutNode.contains(event.target)
        ) {
          event.stopImmediatePropagation();
        }

        this.setState({ isOpen: false });
      }

      toggleTooltip(event) {
        if (this.state.isOpen) {
          this.onClose(event);
        } else {
          this.onOpen(event);
        }
      }

      render() {
        const label = this.state.isOpen ? 'Close Tooltip' : 'Open Tooltip';
        return (
          <DemoLayout ref={node => { this.demoLayout = node }}>
            <Tooltip
              content="This tooltip is controlled"
              isOpen={this.state.isOpen}
              onOpen={this.onOpen}
              onClose={this.onClose}>
              <Button>{label}</Button>
            </Tooltip>
            <Button onClick={this.toggleTooltip}>{label}</Button>
          </DemoLayout>
        );
      }
    }`
};
