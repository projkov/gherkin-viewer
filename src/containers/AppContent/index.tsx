import React from 'react';
import { Layout } from 'antd';
import { styles } from '../../styles';
import { GherkinCheckboxViewer } from '../../components/GherkinViewer/index';
import { EditorContainer } from '../../components/Editor/index';
import { defaultEditorValue } from '../../consts';
import { AppHeader } from '../AppHeader/';

const { Sider, Content } = Layout;

export function AppContent() {
    const [content, setContent] = React.useState<string>(defaultEditorValue)

    return (
        <Layout style={{ backgroundColor: '#f4f8fb' }}>
            <Sider width="3%" style={styles.sider}>
                <AppHeader />
            </Sider>
            <Sider width="40%" style={styles.sider}>
                <EditorContainer content={content} setContent={setContent} />
            </Sider>
            <Content style={styles.content}>
                <GherkinCheckboxViewer gherkin={content} />
            </Content>
        </Layout>
    );
}
