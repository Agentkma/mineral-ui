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
import Tooltip from '../../../../../Tooltip';
import IconAdd from 'mineral-ui-icons/IconAdd';
import IconDelete from 'mineral-ui-icons/IconDelete';
import { createStyledComponent } from '../../../../../styles';

const DemoLayout = createStyledComponent('div', {
  '& > *': {
    marginBottom: '0.5rem',
    marginRight: '0.5rem'
  }
});

export default {
  id: 'basic',
  title: 'Basic Usage',
  description: `Tooltips wrap the triggering component.
Placement is relative to the location of the trigger.
Tooltips will change position relative to the trigger automatically depending on viewport constraints.`,
  scope: { Button, DemoLayout, IconAdd, IconDelete, Tooltip },
  source: `
    <DemoLayout>
      <Tooltip content="Delete">
        <Button minimal variant="danger" iconStart={<IconDelete />} />
      </Tooltip>

      <Tooltip content="Add new">
        <Button primary circular iconStart={<IconAdd />} />
      </Tooltip>
    </DemoLayout>`
};
