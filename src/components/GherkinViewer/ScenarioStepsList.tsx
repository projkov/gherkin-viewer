import { Checkbox, Typography, List, Table } from 'antd';
import { ScenarioStepListProps } from './types';

export function ScenarioStepsList(props: ScenarioStepListProps) {
    return <List
        dataSource={props.scenario.steps}
        renderItem={(item) => (
            <List.Item key={item.line}>
                <div>
                    <Checkbox
                        checked={!!props.checkedSteps[item.line]}
                        onChange={(e) =>
                            props.onStepChange(item.line, e.target.checked)
                        }
                    >
                        <Typography.Text strong>{item.keyword}</Typography.Text>{' '}
                        <Typography.Text>{item.text}</Typography.Text>{' '}
                    </Checkbox>
                    {item.table && (
                        <Table
                            size="small"
                            pagination={false}
                            dataSource={item.table.rows.slice(1).map((row, index) => {
                                const obj: Record<string, string> = {};
                                item.table!.rows[0].forEach((header, i) => {
                                    obj[header] = row[i] || '';
                                });
                                return { ...obj, key: index };
                            })}
                            columns={item.table.rows[0].map(header => ({
                                title: header,
                                dataIndex: header,
                                key: header,
                            }))}
                            style={{ marginTop: 8, marginBottom: 8 }}
                        />
                    )}
                </div>
            </List.Item>
        )}
    />;
}
