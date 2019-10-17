"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
var ColorCode;
(function (ColorCode) {
    ColorCode["Red"] = "31m";
    ColorCode["Green"] = "32m";
    ColorCode["Yellow"] = "33m";
    ColorCode["Blue"] = "34m";
    ColorCode["Magenta"] = "35m";
    ColorCode["Cyan"] = "36m";
    ColorCode["White"] = "37m";
    ColorCode["Gray"] = "90m";
    ColorCode["LightBlue"] = "94m";
})(ColorCode || (ColorCode = {}));
;
class AireConsole {
    constructor(code = ColorCode.White) {
        this.flick = true;
        this.format = '';
        this.colorCode = code;
        this.color = `\x1b[${code}%s\x1b[0m`;
    }
    group(color, header) {
        if (header)
            console.group(color, `\n***[ ${header} ]********************[ ${moment_1.default().format(this.format)} ]***`);
    }
    groupEnd() {
        console.groupEnd();
        console.log();
    }
    trace(color, header, ...output) {
        if (this.flick) {
            this.group(color, header);
            for (let indx in output) {
                console.log(color, `(${+indx + 1}) ${output[indx]}`);
            }
            this.groupEnd();
        }
    }
    toggle() {
        this.flick = !this.flick;
    }
    setDateFormat(format) {
        this.format = format;
    }
    log(header, ...output) {
        this.trace(this.color, header, ...output);
    }
    bold(header, ...output) {
        this.trace(`\x1b[1m[${this.colorCode}%s\x1b[0m[22m`, header, ...output);
    }
    italic(header, ...output) {
        this.trace(`\x1b[3m[${this.colorCode}%s\x1b[0m[23m`, header, ...output);
    }
    underline(header, ...output) {
        this.trace(`\x1b[4m[${this.colorCode}%s\x1b[0m[24m`, header, ...output);
    }
    fill(header, ...output) {
        this.trace(`\x1b[7m[${this.colorCode}%s\x1b[0m[27m`, header, ...output);
    }
}
exports.Console = (() => {
    let redConsole;
    let greenConsole;
    let yellowConsole;
    let blueConsole;
    let lightBlueConsole;
    let magentaConsole;
    let cyanConsole;
    let whiteConsole;
    let grayConsole;
    const getRed = () => {
        if (!redConsole) {
            redConsole = new AireConsole(ColorCode.Red);
        }
        return redConsole;
    };
    const getGreen = () => {
        if (!greenConsole)
            greenConsole = new AireConsole(ColorCode.Green);
        return greenConsole;
    };
    const getYellow = () => {
        if (!yellowConsole)
            yellowConsole = new AireConsole(ColorCode.Yellow);
        return yellowConsole;
    };
    const getBlue = () => {
        if (!blueConsole)
            blueConsole = new AireConsole(ColorCode.Blue);
        return blueConsole;
    };
    const getLightBlue = () => {
        if (!lightBlueConsole)
            lightBlueConsole = new AireConsole(ColorCode.LightBlue);
        return lightBlueConsole;
    };
    const getMagenta = () => {
        if (!magentaConsole)
            magentaConsole = new AireConsole(ColorCode.Magenta);
        return magentaConsole;
    };
    const getCyan = () => {
        if (!cyanConsole)
            cyanConsole = new AireConsole(ColorCode.Cyan);
        return cyanConsole;
    };
    const getWhite = () => {
        if (!whiteConsole)
            whiteConsole = new AireConsole(ColorCode.White);
        return whiteConsole;
    };
    const getGray = () => {
        if (!grayConsole)
            grayConsole = new AireConsole(ColorCode.Gray);
        return grayConsole;
    };
    return {
        red: getRed,
        green: getGreen,
        yellow: getYellow,
        blue: getBlue,
        lightblue: getLightBlue,
        magenta: getMagenta,
        cyan: getCyan,
        white: getWhite,
        gray: getGray
    };
})();
//# sourceMappingURL=aire-console.js.map