import pino, {TransportTargetOptions} from "pino";

console.log("Hello world.");

function createLogger() {
    const targets: TransportTargetOptions[] = [
        {target: 'pino/file'} as TransportTargetOptions,
        {target: 'pino/file', options: {}, level: 'info'}
    ];
    const levels = {
        apple: 80,
        banana: 75,
        cherry: 70,
        dates: 65,
        eggplant: 60,
    };
    return pino({
        transport: {targets: targets},
        customLevels: levels
    })
}

const logger = createLogger();
logger.info("echo");
