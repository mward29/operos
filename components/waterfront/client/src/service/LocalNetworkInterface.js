/*
Copyright 2018 Pax Automa Systems, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import {graphql} from 'graphql';
import {printAST} from 'apollo-client';

export default class LocalNetworkInterface {
  constructor(schema, context) {
    this.schema = schema;
    this.context = context;
  }

  query(request) {
    return graphql(
      this.schema,
      printAST(request.query),
      null,
      this.context,
      request.variables,
      request.operationName
    );
  }
}
