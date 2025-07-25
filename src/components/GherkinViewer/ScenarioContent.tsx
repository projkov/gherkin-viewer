import { Typography, Progress, Tag } from 'antd';

import { ScenarioContentProps } from './types';

import { ScenarioStepsList } from './ScenarioStepsList';

const { Title } = Typography;

export function ScenarioContent(props: ScenarioContentProps) {
    const { calcProgress, scenario, sIdx, checkedSteps, onStepChange } = props;

    return (
        <div key={sIdx} style={{ marginBottom: 24 }}>
            <Title level={4}>
                {scenario.title}{' '}
                <Progress percent={calcProgress(scenario.steps)} size="small" />
            </Title>
            {scenario.tags && scenario.tags.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                    {scenario.tags.map((tag, index) => (
                        <Tag key={index} color="green">{tag}</Tag>
                    ))}
                </div>
            )}
            <ScenarioStepsList scenario={scenario} checkedSteps={checkedSteps} onStepChange={onStepChange} />
        </div>
    );
}
