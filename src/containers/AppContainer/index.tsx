import React from 'react';
import { Layout, Flex } from 'antd';
import { styles } from '../../styles';

interface AppContainerProps {
    content: React.ReactElement;
}

export function AppContainer(props: AppContainerProps) {
    return (
        <Flex gap="middle" wrap>
            <Layout style={styles.layout}>
                {props.content}
            </Layout>
        </Flex>
    );
}
