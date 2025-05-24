import { Checkbox, Typography, List } from 'antd';
import { ScenarioStepListProps } from './types';

export function ScenarioStepsList(props: ScenarioStepListProps) {
    return <List
        dataSource={props.scenario.steps}
        renderItem={(item) => (
            <List.Item key={item.line}>
                <Checkbox
                    checked={!!props.checkedSteps[item.line]}
                    onChange={(e) =>
                        props.onStepChange(item.line, e.target.checked)
                    }
                >
                    <Typography.Text strong>{item.keyword}</Typography.Text>{' '}
                    <Typography.Text>{item.text}</Typography.Text>{' '}
                </Checkbox>
            </List.Item>
        )}
    />;
}
