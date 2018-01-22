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
import React from 'react';
import { componentTheme as flexComponentTheme } from '../../../../layout/Flex';
import bestPractices from './bestPractices';
import boxExamples from './examples/box';
import flexExamples from './examples/flex';
import flexItemExamples from './examples/flex-item';

const boxDoc = require('!!react-docgen-loader!../../../../layout/Box');
const flexDoc = require('!!react-docgen-loader!../../../../layout/Flex');
const flexItemDoc = require('!!react-docgen-loader!../../../../layout/FlexItem');

export default [
  {
    bestPractices: bestPractices.box,
    doc: boxDoc,
    examples: boxExamples,
    slug: 'box',
    title: 'Box',
    whenHowToUse: `TODO`
  },
  {
    bestPractices: bestPractices.flex,
    componentTheme: flexComponentTheme,
    doc: flexDoc,
    examples: flexExamples,
    slug: 'flex',
    title: 'Flex',
    whenHowToUse: `TODO`
  },
  {
    bestPractices: bestPractices.flexItem,
    doc: flexItemDoc,
    examples: flexItemExamples,
    propsComment: (
      <p>
        In addition to the props above, FlexItem also accepts all props for{' '}
        <a href="./box" key={0}>
          Box
        </a>.
        <br key={1} />
        <br key={2} />
        <em key={3}>
          Undocumented properties will be applied to the root element.
        </em>
      </p>
    ),
    slug: 'flex-item',
    title: 'FlexItem',
    whenHowToUse: `TODO`
  }
];
