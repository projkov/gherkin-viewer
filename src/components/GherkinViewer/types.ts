export interface GherkinFeature {
    title: string;
    description?: string[];
    background?: GherkinBackground;
    scenarios: GherkinScenario[];
}

export interface GherkinBackground {
    steps: GherkinStep[];
}

export interface GherkinScenario {
    title: string;
    steps: GherkinStep[];
    examples?: GherkinExampleTable[];
}

export interface GherkinStep {
    keyword: string;
    text: string;
    line: number;
    table?: GherkinTable;
}

export interface GherkinTable {
    rows: string[][];
}

export interface GherkinExampleTable {
    rows: string[][];
}

export type CalcProgressType = (steps: GherkinStep[]) => number;

export type CheckedStepsType = Record<number, boolean>;

export type OnStepChangeType = (line: number, checked: boolean) => void

interface WithStepControl {
    checkedSteps: CheckedStepsType;
    onStepChange: OnStepChangeType;
}

export interface ScenarioContentProps extends WithStepControl {
    calcProgress: CalcProgressType;
    scenario: GherkinScenario;
    sIdx: number;
}

export interface FeatureTabContentProps extends WithStepControl {
    calcProgress: CalcProgressType;
    feature: GherkinFeature;
    fIdx: number;
}

export interface ScenarioStepListProps extends WithStepControl {
    scenario: GherkinScenario;
}
