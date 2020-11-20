/*
Copyright 2017 Vector Creations Ltd
Copyright 2020 Resynth <resynth1943.net>

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

import React from 'react';
import { _t } from '../../../languageHandler';
import QuestionDialog from './QuestionDialog';

type IProps = Exclude<
    React.ComponentProps<QuestionDialog>,
    "title" | "danger" | "description"
>;

export default function AccessTokenDialog(props: IProps) {
    return (
        <QuestionDialog
            {...props}
            title="Reveal Access Token"
            danger={true}
            description={_t(
                "Your access token gives full access to your account. Do not share it with anyone."
            )}
        ></QuestionDialog>
    );
}
