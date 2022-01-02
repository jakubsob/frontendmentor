import iconMoon from "../assets/icon-moon.svg";
import iconSun from "../assets/icon-sun.svg";

class ThemeManager {
  #mode;
  #modes = {
    light: {
      className: "theme-light",
      text: "dark",
      icon: iconMoon,
    },
    dark: {
      className: "theme-dark",
      text: "light",
      icon: iconSun,
    },
  };

  constructor(mode) {
    this.#mode = mode;
  }

  getCurrent() {
    return this.#modes[this.#mode];
  }

  toggle() {
    this.#mode = this.#mode == "dark" ? "light" : "dark";
    return this.getCurrent();
  }
}

export default ThemeManager;
