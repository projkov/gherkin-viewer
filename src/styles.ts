import type { CSSProperties } from 'react';

const headerStyle: CSSProperties = {
    backgroundColor: '#f4f8fb',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '1px solid #e0e0e0',
};

const contentStyle: CSSProperties = {
    textAlign: 'left',
    flex: 1,
    padding: '1rem',
    margin: '0.5rem',
    borderRadius: '0.75rem',
    backgroundColor: '#FFF',
    overflowY: 'auto',
};

const siderStyle: CSSProperties = {
    backgroundColor: '#f4f8fb',
    overflowY: 'auto',
    width: 300,
    boxShadow: 'inset -1px 0 0 #e0e0e0',
};

const layoutStyle: CSSProperties = {
    overflow: 'hidden',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#f4f6f9',
};

const editorWrapper: CSSProperties = {
    height: '100vh',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    paddingRight: '16px',
};

const editor: CSSProperties = {
    backgroundColor: '#f4f8fb',
    padding: '1rem 0.75rem',
    display: 'flex',
    height: 'calc(100vh - 64px - 48px)',
    overflow: 'hidden',
};

export const styles = {
    header: headerStyle,
    content: contentStyle,
    sider: siderStyle,
    layout: layoutStyle,
    editorWrapper,
    editor,
};
