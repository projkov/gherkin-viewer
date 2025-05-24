import { FeatureTabContentProps } from './types';

import { ScenarioContent } from './ScenarioContent';

export function featureTabContent(props: FeatureTabContentProps) {
    const { calcProgress, feature, fIdx, checkedSteps, onStepChange } = props;

    return {
        key: fIdx.toString(),
        label: `${feature.title} (${calcProgress(feature.scenarios.flatMap((s) => s.steps))}%)`,
        children: <div>
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
