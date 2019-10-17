declare enum ColorCode {
    Red = "31m",
    Green = "32m",
    Yellow = "33m",
    Blue = "34m",
    Magenta = "35m",
    Cyan = "36m",
    White = "37m",
    Gray = "90m",
    LightBlue = "94m"
}
declare class AireConsole {
    private colorCode;
    private color;
    private flick;
    private format;
    constructor(code?: ColorCode);
    private group;
    private groupEnd;
    private trace;
    toggle(): void;
    setDateFormat(format: string): void;
    log(header: string | null, ...output: any[]): void;
    bold(header: string | null, ...output: any[]): void;
    italic(header: string | null, ...output: any[]): void;
    underline(header: string | null, ...output: any[]): void;
    fill(header: string | null, ...output: any[]): void;
}
export declare const Console: {
    red: () => AireConsole;
    green: () => AireConsole;
    yellow: () => AireConsole;
    blue: () => AireConsole;
    lightblue: () => AireConsole;
    magenta: () => AireConsole;
    cyan: () => AireConsole;
    white: () => AireConsole;
    gray: () => AireConsole;
};
export {};
//# sourceMappingURL=aire-console.d.ts.map