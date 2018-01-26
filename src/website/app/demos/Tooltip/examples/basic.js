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
import IconHelp from 'mineral-ui-icons/IconHelp';
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
  scope: { Button, DemoLayout, IconAdd, IconDelete, IconHelp, Tooltip },
  source: `
    <DemoLayout>
      <Tooltip content="whoophaskldfjlaksdjfalksdjflaksjdflaksjdf asdlfkj asldkfj asldkfj asldkfj asldkfj asldkjf alksdjf alskdjf laskdjf laskjdf laksjd flkasjd flaksjd flkajs dflkjas df;lkajs df;lkajs d;flkjas d;flkjas ;dflkja s;dlfkj as;ldfkj as;lkj " defaultIsOpen>
        <IconHelp title="help" />
      </Tooltip>

      <Tooltip content="Delete">
        <Button minimal variant="danger" iconStart={<IconDelete title="delete" />} />
      </Tooltip>

      <Tooltip content="Add new" isOpen>
        <Button primary circular iconStart={<IconAdd title="add new" />} />
      </Tooltip>

      here's some prose with a
      <Tooltip content="Tooltip">
        <span>Tooltip</span>
      </Tooltip>
      in the middle of it.
    </DemoLayout>`
};
