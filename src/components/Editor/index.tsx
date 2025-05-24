import Editor from '@monaco-editor/react';
import { Input } from 'antd';
import { styles } from '../../styles';

export function EditorContainer(props: { setContent: (value: string) => void, content: string }) {
    const { setContent, content } = props;
    const onChange = (value: string | undefined) => setContent(value ?? "");
    const editorOptions = {
        formatOnPaste: true,
        formatOnType: true
    };

    return (
        <div style={styles.resourceBlockWrapper}>
            <Editor
                height="85vh"
                defaultLanguage={"gherkin"}
                value={content}
                onChange={onChange}
                options={editorOptions}
            />
        </div>
    );
}
