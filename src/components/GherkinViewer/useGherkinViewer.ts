import { useState } from 'react';

import { GherkinStep, CheckedStepsType } from './types';

import { parseGherkin } from './parser';

import { featureTabContent } from './FeatureTabContent';

export function useGherkinViewer(gherkin: string) {
    const features = parseGherkin(gherkin);
    const [checkedSteps, setCheckedSteps] = useState<CheckedStepsType>({});
    const calcProgress = (steps: GherkinStep[]) => {
        if (steps.length === 0) return 100;
        const checkedCount = steps.filter((s) => checkedSteps[s.line]).length;
        return Math.round((checkedCount / steps.length) * 100);
    };

    return {
        items: features.map((feature, fIdx) =>
            featureTabContent({
                calcProgress: calcProgress,
                feature: feature,
                fIdx: fIdx,
                checkedSteps: checkedSteps,
                onStepChange: (line: number, checked: boolean) => {
                    setCheckedSteps((prev) => ({
                        ...prev,
                        [line]: checked,
                    }));
                },
            })
        ),
        overallProgress: calcProgress(features.flatMap((f) =>
            f.scenarios.flatMap((s) => s.steps)
        ))
    }
}
