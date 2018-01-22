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
import FlexItem from '../../components/FlexItem';
import DemoLayout from '../../components/DemoLayout';
import Flex from '../../components/Flex';

export default {
  id: 'reverse-order',
  title: 'Reverse Order',
  description: ``, // TODO
  scope: { DemoLayout, Flex, FlexItem },
  source: `
    <DemoLayout>
      <Flex reverseOrder>
        <FlexItem>A</FlexItem>
        <FlexItem>B</FlexItem>
        <FlexItem>C</FlexItem>
      </Flex>
      <Flex reverseOrder direction="column">
        <FlexItem>A</FlexItem>
        <FlexItem>B</FlexItem>
        <FlexItem>C</FlexItem>
      </Flex>
    </DemoLayout>`
};