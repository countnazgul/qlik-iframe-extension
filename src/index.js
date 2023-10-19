import { useElement, useLayout } from "@nebula.js/stardust";
import properties from "./object-properties";
import ext from "./ext";
/**
 * Entrypoint for your sense visualization
 * @param {object} galaxy Contains global settings from the environment.
 * Useful for cases when stardust hooks are unavailable (ie: outside the component function)
 * @param {object} galaxy.anything Extra environment dependent options
 * @param {object=} galaxy.anything.sense Optional object only present within Sense,
 * see: https://qlik.dev/extend/build-extension/in-qlik-sense
 */
export default function supernova(galaxy) {
  return {
    qae: {
      properties,
    },
    ext,
    component() {
      const layout = useLayout();
      const element = useElement();

      let innerHTML = "";

      const style = [];
      style.push("display: block");
      style.push("width: 100%");
      style.push("height: 100%");
      style.push("display: flex");
      style.push("align-items: center");
      style.push("justify-content: center");

      const styleFrame = [];
      styleFrame.push("width:100%");
      styleFrame.push("height:100%");

      if (layout.props.src) {
        innerHTML = `<div style="${style.join(
          ";"
        )}" ><iframe style="${styleFrame.join(";")}" src="${
          layout.props.src
        }"></iframe></div>`;
      } else {
        innerHTML = `<div style="${style.join(
          ";"
        )}">Please, set iFrame URL from the settings</div>`;
      }

      element.innerHTML = innerHTML; // eslint-disable-line
    },
  };
}
