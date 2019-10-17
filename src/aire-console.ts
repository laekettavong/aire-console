import moment from 'moment';

enum ColorCode {
  Red = '31m',
  Green = '32m',
  Yellow = '33m',
  Blue = '34m',
  Magenta = '35m',
  Cyan = '36m',
  White = '37m',
  Gray = '90m',
  LightBlue = '94m'
};

class AireConsole {
  private colorCode: string;
  private color: string;
  private flick: boolean = true;
  private format: string = '';

  constructor(code: ColorCode = ColorCode.White) {
    this.colorCode = code;
    this.color = `\x1b[${code}%s\x1b[0m`;
  }

  private group(color: string, header: string | null): void {
    if (header) console.group(color, `\n***[ ${header} ]********************[ ${moment().format(this.format)} ]***`);
  }

  private groupEnd(): void {
    console.groupEnd();
    console.log();
  }

  private trace(color: string, header: string | null, ...output: any[]): void {
    if (this.flick) {
      this.group(color, header);
      for (let indx in output) {
        console.log(color, `(${+indx + 1}) ${output[indx]}`)
      }
      this.groupEnd();
    }
  }

  public toggle(): void {
    this.flick = !this.flick;
  }

  public setDateFormat(format: string): void {
    this.format = format;
  }

  public log(header: string | null, ...output: any[]): void {
    this.trace(this.color, header, ...output);
  }

  public bold(header: string | null, ...output: any[]): void {
    this.trace(`\x1b[1m[${this.colorCode}%s\x1b[0m[22m`, header, ...output);
  }

  public italic(header: string | null, ...output: any[]): void {
    this.trace(`\x1b[3m[${this.colorCode}%s\x1b[0m[23m`, header, ...output);
  }

  public underline(header: string | null, ...output: any[]): void {
    this.trace(`\x1b[4m[${this.colorCode}%s\x1b[0m[24m`, header, ...output);
  }

  public fill(header: string | null, ...output: any[]): void {
    this.trace(`\x1b[7m[${this.colorCode}%s\x1b[0m[27m`, header, ...output);
  }
}

export const Console = (() => {

  let redConsole: AireConsole;
  let greenConsole: AireConsole;
  let yellowConsole: AireConsole;
  let blueConsole: AireConsole;
  let lightBlueConsole: AireConsole;
  let magentaConsole: AireConsole;
  let cyanConsole: AireConsole;
  let whiteConsole: AireConsole;
  let grayConsole: AireConsole;

  const getRed = (): AireConsole => {
    if (!redConsole) {
      redConsole = new AireConsole(ColorCode.Red);
    }
    return redConsole;
  }

  const getGreen = (): AireConsole => {
    if (!greenConsole) greenConsole = new AireConsole(ColorCode.Green);
    return greenConsole;
  }

  const getYellow = (): AireConsole => {
    if (!yellowConsole) yellowConsole = new AireConsole(ColorCode.Yellow);
    return yellowConsole;
  }

  const getBlue = (): AireConsole => {
    if (!blueConsole) blueConsole = new AireConsole(ColorCode.Blue);
    return blueConsole;
  }

  const getLightBlue = (): AireConsole => {
    if (!lightBlueConsole) lightBlueConsole = new AireConsole(ColorCode.LightBlue);
    return lightBlueConsole;
  }

  const getMagenta = (): AireConsole => {
    if (!magentaConsole) magentaConsole = new AireConsole(ColorCode.Magenta);
    return magentaConsole;
  }

  const getCyan = (): AireConsole => {
    if (!cyanConsole) cyanConsole = new AireConsole(ColorCode.Cyan);
    return cyanConsole;
  }

  const getWhite = (): AireConsole => {
    if (!whiteConsole) whiteConsole = new AireConsole(ColorCode.White);
    return whiteConsole;
  }

  const getGray = (): AireConsole => {
    if (!grayConsole) grayConsole = new AireConsole(ColorCode.Gray);
    return grayConsole;
  }

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
  }
})();