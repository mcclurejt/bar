import { element } from "../lib/style.js";

// returns the icon matching the window name or the name by default
const getIconForWindow = name => {
  let iconClass = "";
  switch (name.trim().toLowerCase()) {
    case "google chrome":
      iconClass = "fab fa-chrome";
      break;
    case "safari":
      iconClass = "fab fa-safari";
      break;
    case "firefox":
      iconClass = "fab fa-firefox";
      break;
    case "firefox nightly":
      iconClass = "fab fa-firefox";
      break;
    case "iterm2":
      iconClass = "fas fa-terminal";
      break;
    case "code":
      iconClass = "fas fa-code-branch";
      break;
    default:
      return <span>{name}</span>;
  }
  return (
    <span
      style={{
        height: "23px",
        display: "inline-block",
        padding: "0 8px"
      }}
    >
      <i className={iconClass} />
    </span>
  );
};

const render = ({ config, output, error, side, data }) => {
  var style = {
    ...element,
    ...config.style,
    float: side,
    height: "23px"
  };

  return (
    <span style={style}>
      {data.filter(w => w != undefined).map(w => getIconForWindow(w))}
    </span>
  ); //error ? errorContent : data ? workspaces : noChunkwm
};

export default render;
