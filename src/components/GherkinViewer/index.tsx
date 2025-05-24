import React from 'react';
import { Tabs, Progress } from 'antd';

import { useGherkinViewer } from './useGherkinViewer';

export const GherkinCheckboxViewer: React.FC<{ gherkin: string }> = ({ gherkin }) => {
    const { items, overallProgress } = useGherkinViewer(gherkin);

    return (
        <div>
            <Progress
                percent={overallProgress}
                size="default"
            />
            <Tabs items={items} />
        </div>
    );
};
