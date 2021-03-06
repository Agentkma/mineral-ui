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
import { mineralTheme } from '../../../../../../themes';
import Button from '../../../../../../Button';
import Card, {
  CardActions,
  CardBlock,
  CardFooter
} from '../../../../../../Card';
import DemoLayout from '../../components/DemoLayout';
import loremIpsum from '../../components/loremIpsum';

export default {
  id: 'basic',
  title: 'Basic Usage',
  // $FlowFixMe
  backgroundColor: mineralTheme.color_gray_10,
  description: `CardFooter is used to add an extension to a Card. It can
contain any children, but is best used with [CardActions](../card-actions) and
[CardBlock](../card-block).`,
  scope: {
    Button,
    Card,
    CardActions,
    CardBlock,
    CardFooter,
    loremIpsum,
    DemoLayout
  },
  source: `
    <DemoLayout>
      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Footer Title Only" />
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter>
          <CardActions>
            <Button minimal>Button 1</Button>
            <Button primary>Button 2</Button>
          </CardActions>
        </CardFooter>
      </Card>

      <Card>
        <CardBlock>{loremIpsum}</CardBlock>
        <CardFooter title="Footer Title">
          <CardBlock>{loremIpsum}</CardBlock>
          <CardActions>
            <Button minimal>Button 1</Button>
            <Button primary>Button 2</Button>
          </CardActions>
        </CardFooter>
      </Card>
    </DemoLayout>`
};
