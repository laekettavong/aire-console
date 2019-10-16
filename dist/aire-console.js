"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
exports.Console = (() => {
    let Color;
    (function (Color) {
        Color["Red"] = "\u001B[31m%s\u001B[0m";
        Color["Green"] = "\u001B[32m%s\u001B[0m";
        Color["Yellow"] = "\u001B[33m%s\u001B[0m";
        Color["Blue"] = "\u001B[34m%s\u001B[0m";
        Color["Cyan"] = "\u001B[35m%s\u001B[0m";
        Color["LightBlue"] = "\u001B[36m%s\u001B[0m";
        Color["White"] = "\u001B[37m%s\u001B[0m";
    })(Color || (Color = {}));
    class AireConsole {
        constructor(color = Color.White) {
            this.flick = true;
            this.color = color;
        }
        toggle() {
            this.flick = !this.flick;
        }
        group(header) {
            if (header)
                console.group(this.color, `\n***[ ${header} ]******************[ ${moment_1.default().format()} ]***`);
        }
        groupEnd() {
            console.groupEnd();
            console.log();
        }
        log(header, ...output) {
            if (this.flick) {
                this.group(header);
                for (let indx in output) {
                    console.log(this.color, `(${+indx + 1}) ${output[indx]}`);
                }
                this.groupEnd();
            }
        }
    }
    let redConsole;
    let greenConsole;
    let yellowConsole;
    let blueConsole;
    let lightBlueConsole;
    let cyanConsole;
    const getRed = () => {
        if (!redConsole) {
            redConsole = new AireConsole(Color.Red);
        }
        return redConsole;
    };
    const getGreen = () => {
        if (!greenConsole)
            greenConsole = new AireConsole(Color.Green);
        return greenConsole;
    };
    const getYellow = () => {
        if (!yellowConsole)
            yellowConsole = new AireConsole(Color.Yellow);
        return yellowConsole;
    };
    const getBlue = () => {
        if (!blueConsole)
            blueConsole = new AireConsole(Color.Blue);
        return blueConsole;
    };
    const getLightBlue = () => {
        if (!lightBlueConsole)
            lightBlueConsole = new AireConsole(Color.LightBlue);
        return lightBlueConsole;
    };
    const getCyan = () => {
        if (!cyanConsole)
            cyanConsole = new AireConsole(Color.Cyan);
        return cyanConsole;
    };
    return {
        Color,
        red: getRed,
        green: getGreen,
        yellow: getYellow,
        blue: getBlue,
        lightblue: getLightBlue,
        cyan: getCyan
    };
})();
//# sourceMappingURL=aire-console.js.map