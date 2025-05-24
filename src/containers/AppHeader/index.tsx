import logo from '../../assets/logo.png';
import version from '../../version'
import {
    GithubOutlined
} from '@ant-design/icons';

export function AppHeader() {
    return (
        <div style={{ height: '98vh', marginTop: '16px', marginLeft: '8px', marginRight: '8px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <img src={logo} alt="Logo" style={{ borderRadius: '12px' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'center' }}>
                <a href="https://github.com/projkov/gherkin-viewer" rel="noreferrer" target="_blank"><GithubOutlined style={{ fontSize: 24 }} /></a>
                {version}
            </div>
        </div>
    );
}
