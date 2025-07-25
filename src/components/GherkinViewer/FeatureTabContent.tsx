import { FeatureTabContentProps } from './types';
import { Tag } from 'antd';

import { ScenarioContent } from './ScenarioContent';

export function featureTabContent(props: FeatureTabContentProps) {
    const { calcProgress, feature, fIdx, checkedSteps, onStepChange } = props;

    return {
        key: fIdx.toString(),
        label: `${feature.title} (${calcProgress(feature.scenarios.flatMap((s) => s.steps))}%)`,
        children: <div>
            {feature.tags && feature.tags.length > 0 && (
                <div style={{ marginBottom: 8 }}>
                    {feature.tags.map((tag, index) => (
                        <Tag key={index} color="blue">{tag}</Tag>
                    ))}
                </div>
            )}
            {feature.scenarios.map((scenario, sIdx) =>
                <ScenarioContent
                    calcProgress={calcProgress}
                    scenario={scenario}
                    sIdx={sIdx}
                    checkedSteps={checkedSteps}
                    onStepChange={onStepChange}
                />
            )}
        </div>
    };

};
