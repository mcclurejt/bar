import { element } from "../lib/style.js";

const render = ({ config, output, error, side, data }) => {
  var style = {
    ...element,
    ...config.style,
    float: side
  };

  var spaceStyle = (position, space) => {
    var style = {
      height: "23px",
      display: "inline-block",
      padding: "0 8px"
    };
    if (position == parseInt(space)) {
      style.borderBottom = "2px solid rgb(130,151,182)";
    }
    return style;
  };

  let errorContent = <span style={style}>!</span>;

  let workspaces = (
    <span style={style}>
      <span style={spaceStyle(1, data)}>1</span>
      <span style={spaceStyle(2, data)}>2</span>
      <span style={spaceStyle(3, data)}>3</span>
      <span style={spaceStyle(4, data)}>4</span>
      <span style={spaceStyle(5, data)}>5</span>
      <span style={spaceStyle(6, data)}>6</span>
    </span>
  );

  let noChunkwm = (
    <span style={{ ...style, opacity: 0.4 }}>ChunkWM not installed</span>
  );

  return workspaces; //error ? errorContent : data ? workspaces : noChunkwm
};

export default render;
