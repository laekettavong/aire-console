declare enum Color {
    Red = "\u001B[31m%s\u001B[0m",
    Green = "\u001B[32m%s\u001B[0m",
    Yellow = "\u001B[33m%s\u001B[0m",
    Blue = "\u001B[34m%s\u001B[0m",
    Cyan = "\u001B[35m%s\u001B[0m",
    LightBlue = "\u001B[36m%s\u001B[0m",
    White = "\u001B[37m%s\u001B[0m"
}
declare class AireConsole {
    private color;
    private flick;
    constructor(color?: Color);
    toggle(): void;
    private group;
    private groupEnd;
    log(header: string | null, ...output: any[]): void;
}
export declare const Console: {
    Color: typeof Color;
    red: () => AireConsole;
    green: () => AireConsole;
    yellow: () => AireConsole;
    blue: () => AireConsole;
    lightblue: () => AireConsole;
    cyan: () => AireConsole;
};
export {};
//# sourceMappingURL=aire-console.d.ts.map