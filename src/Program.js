import Wonders from 'wonders';
import screenSaver from 'screen-saver';
import pkg from '../package';

export default function Program() {
    return (
        <program name={pkg.name} version={pkg.version} parse={process.argv}>
            <command name="start" onAction={screenSaver} />
        </program>
    );
}
