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
import Button from '../../../../../Button';
import { createStyledComponent } from '../../../../../styles';
import Tooltip from '../../../../../Tooltip';

const DemoLayout = createStyledComponent('div', {
  height: '350px',
  position: 'relative'
});

const TopStartTooltip = createStyledComponent(Tooltip, {
  left: '35%',
  position: 'absolute',
  top: '30%',
  transform: 'translate(-50%, -50%)'
});
const TopTooltip = createStyledComponent(Tooltip, {
  left: '50%',
  position: 'absolute',
  top: '30%',
  transform: 'translate(-50%, -50%)'
});
const TopEndTooltip = createStyledComponent(Tooltip, {
  left: '65%',
  position: 'absolute',
  top: '30%',
  transform: 'translate(-50%, -50%)'
});
const BottomStartTooltip = createStyledComponent(Tooltip, {
  left: '35%',
  position: 'absolute',
  top: '70%',
  transform: 'translate(-50%, -50%)'
});
const BottomTooltip = createStyledComponent(Tooltip, {
  left: '50%',
  position: 'absolute',
  top: '70%',
  transform: 'translate(-50%, -50%)'
});
const BottomEndTooltip = createStyledComponent(Tooltip, {
  left: '65%',
  position: 'absolute',
  top: '70%',
  transform: 'translate(-50%, -50%)'
});

export default {
  id: 'placement',
  title: 'Placement',
  description: `The \`placement\` prop determines the initial placement of the Tooltip content relative to the trigger.
The Tooltip will still react to viewport edges and scrolling.`,
  scope: {
    Button,
    DemoLayout,
    BottomStartTooltip,
    BottomTooltip,
    BottomEndTooltip,
    TopStartTooltip,
    TopTooltip,
    TopEndTooltip
  },
  source: `
    <DemoLayout>
      <TopStartTooltip content="t" placement="top-start" isOpen>
        <Button>top-start</Button>
      </TopStartTooltip>

      <TopTooltip content="t" placement="top" isOpen>
        <Button>top</Button>
      </TopTooltip>

      <TopEndTooltip content="t" placement="top-end" isOpen>
        <Button>top-end</Button>
      </TopEndTooltip>

      <BottomStartTooltip content="b" placement="bottom-start" isOpen>
        <Button>bottom-start</Button>
      </BottomStartTooltip>

      <BottomTooltip content="b" placement="bottom" isOpen>
        <Button>bottom</Button>
      </BottomTooltip>

      <BottomEndTooltip content="b" placement="bottom-end" isOpen>
        <Button>bottom-end</Button>
      </BottomEndTooltip>
    </DemoLayout>`
};
