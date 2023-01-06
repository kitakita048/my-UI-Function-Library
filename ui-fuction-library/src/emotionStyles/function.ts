import { pcWidth, spWidth } from "./variable"

export class f {
  static vwPc(arg: number, displaySize = pcWidth) {
    return `${arg / displaySize * 100}vw`
  }
  static vwSp(arg: number, displaySize = spWidth) {
    return `${arg / displaySize * 100}vw`
  }
  static pc() {
    return `@media (min-width: ${spWidth + 1}px)`
  }
  static sp() {
      return `@media (max-width: ${spWidth}px)`
  }
}