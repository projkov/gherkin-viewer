import {
    GherkinFeature, GherkinBackground,
    GherkinScenario, GherkinStep, GherkinExampleTable
} from './types';


export function parseGherkin(gherkin: string): GherkinFeature[] {
    const lines = gherkin.split('\n');
    const features: GherkinFeature[] = [];
    let currentFeature: GherkinFeature | null = null;
    let currentScenario: GherkinScenario | null = null;
    let currentBackground: GherkinBackground | null = null;
    let currentExamples: GherkinExampleTable | null = null;
    let inExamples = false;

    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmed = line.trim();

        if (!trimmed || trimmed.startsWith('#')) continue; // Skip empty lines and comments

        if (trimmed.startsWith('Feature:')) {
            // Push previous feature if exists
            if (currentFeature) {
                if (currentScenario) {
                    currentFeature.scenarios.push(currentScenario);
                    currentScenario = null;
                }
                features.push(currentFeature);
            }
            currentFeature = {
                title: trimmed.slice(8).trim(),
                scenarios: [],
            };
        }
        else if (trimmed.startsWith('Background:')) {
            if (!currentFeature) {
                throw new Error(`Background found without Feature at line ${i + 1}`);
            }
            currentBackground = {
                steps: [],
            };
            currentFeature.background = currentBackground;
        }
        else if (trimmed.startsWith('Scenario:') || trimmed.startsWith('Scenario Outline:')) {
            if (!currentFeature) {
                throw new Error(`Scenario found without Feature at line ${i + 1}`);
            }

            if (currentScenario) {
                currentFeature.scenarios.push(currentScenario);
            }
            currentScenario = {
                title: trimmed.split(':')[1].trim(),
                steps: [],
            };
            inExamples = false;
        }
        else if (trimmed.startsWith('Examples:')) {
            if (!currentScenario) {
                throw new Error(`Examples found without Scenario at line ${i + 1}`);
            }
            inExamples = true;
            currentExamples = { rows: [] };
            if (!currentScenario.examples) {
                currentScenario.examples = [];
            }
            currentScenario.examples.push(currentExamples);
        }
        else if (/^(Given|When|Then|And|But)/i.test(trimmed)) {
            if (!currentFeature) {
                throw new Error(`Step found without Feature at line ${i + 1}`);
            }
            if (inExamples) {
                throw new Error(`Step found inside Examples block at line ${i + 1}`);
            }

            const match = trimmed.match(/^(Given|When|Then|And|But)\s+(.*)/i);
            if (match) {
                const step: GherkinStep = {
                    keyword: match[1],
                    text: match[2],
                    line: i + 1,
                };

                // Check if the next line is a table
                if (i + 1 < lines.length && lines[i + 1].trim().startsWith('|')) {
                    const tableRows: string[][] = [];
                    let j = i + 1;
                    while (j < lines.length && lines[j].trim().startsWith('|')) {
                        const row = lines[j].trim().split('|').map(cell => cell.trim()).filter(cell => cell);
                        tableRows.push(row);
                        j++;
                    }
                    step.table = { rows: tableRows };
                    i = j - 1; // Skip processed table lines
                }

                if (currentBackground && !currentScenario) {
                    currentBackground.steps.push(step);
                } else if (currentScenario) {
                    currentScenario.steps.push(step);
                } else {
                    throw new Error(`Step found without Scenario or Background at line ${i + 1}`);
                }
            }
        }
        else if (inExamples && trimmed.startsWith('|')) {
            if (!currentExamples) {
                throw new Error(`Example row found without Examples block at line ${i + 1}`);
            }
            const row = trimmed.split('|').map(cell => cell.trim()).filter(cell => cell);
            currentExamples.rows.push(row);
        }
    }

    // Clean up any remaining scenarios/features
    if (currentScenario && currentFeature) {
        currentFeature.scenarios.push(currentScenario);
    }
    if (currentFeature) {
        features.push(currentFeature);
    }

    return features;
}
