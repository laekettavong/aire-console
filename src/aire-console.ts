import moment from 'moment';

enum Color {
  Red = '\x1b[31m%s\x1b[0m',
  Green = '\x1b[32m%s\x1b[0m',
  Yellow = '\x1b[33m%s\x1b[0m',
  Blue = '\x1b[34m%s\x1b[0m',
  Cyan = '\x1b[35m%s\x1b[0m',
  LightBlue = '\x1b[36m%s\x1b[0m',
  White = '\x1b[37m%s\x1b[0m'
}

class AireConsole {
  private color: string;
  private flick: boolean = true;
  constructor(color: Color = Color.White) {
    this.color = color;
  }

  public toggle(): void {
    this.flick = !this.flick;
  }

  private group(header: string | null): void {
    if (header) console.group(this.color, `\n***[ ${header} ]******************[ ${moment().format()} ]***`);
  }

  private groupEnd(): void {
    console.groupEnd();
    console.log();
  }

  public log(header: string | null, ...output: any[]): void {
    if (this.flick) {
      this.group(header);
      for (let indx in output) {
        console.log(this.color, `(${+indx + 1}) ${output[indx]}`)
      }
      this.groupEnd();
    }
  }
}

export const Console = (() => {

  let redConsole: AireConsole;
  let greenConsole: AireConsole;
  let yellowConsole: AireConsole;
  let blueConsole: AireConsole;
  let lightBlueConsole: AireConsole;
  let cyanConsole: AireConsole;

  const getRed = (): AireConsole => {
    if (!redConsole) {
      redConsole = new AireConsole(Color.Red);
    }
    return redConsole;
  }

  const getGreen = (): AireConsole => {
    if (!greenConsole) greenConsole = new AireConsole(Color.Green);
    return greenConsole;
  }

  const getYellow = (): AireConsole => {
    if (!yellowConsole) yellowConsole = new AireConsole(Color.Yellow);
    return yellowConsole;
  }

  const getBlue = (): AireConsole => {
    if (!blueConsole) blueConsole = new AireConsole(Color.Blue);
    return blueConsole;
  }

  const getLightBlue = (): AireConsole => {
    if (!lightBlueConsole) lightBlueConsole = new AireConsole(Color.LightBlue);
    return lightBlueConsole;
  }

  const getCyan = (): AireConsole => {
    if (!cyanConsole) cyanConsole = new AireConsole(Color.Cyan);
    return cyanConsole;
  }

  return {
    Color,
    red: getRed,
    green: getGreen,
    yellow: getYellow,
    blue: getBlue,
    lightblue: getLightBlue,
    cyan: getCyan
  }

})();