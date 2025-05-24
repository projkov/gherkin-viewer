import { Layout, Typography } from 'antd';

import { styles } from '../../styles';
import version from '../../version'
import {
    GithubOutlined
} from '@ant-design/icons';

const { Header } = Layout;

export function AppHeader() {
    const titles = [
        "😊 Have a nice day!",
        "⏳ Take your time.",
        "🧘 Chill out",
        "✅ Have a great test session!",
        "🥒 Gherkin viewer.",
        "🌟 Keep up the good work!",
        "🧠 Stay focused.",
        "📚 Learn something new today.",
        "🎯 You’ve got this!"
    ]
    const title = titles[Math.floor(Math.random() * titles.length)]

    return (
        <Header style={styles.header}>
            <Typography.Title level={2}>{title}</Typography.Title>
            <div>
                <GithubOutlined />
                {version}
            </div>
        </Header>
    );
}
