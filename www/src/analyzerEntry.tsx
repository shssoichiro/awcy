import * as React from "react";
import * as ReactDOM from "react-dom";

import { AnalyzerComponent, AnalyzerViewCompareComponent } from "./components/Analyzer";
import { forEachUrlParameter, getUrlParameters } from "./stores/Stores";

let parameters = getUrlParameters();
let decoder = parameters.decoder;
let file = parameters.file;
let playbackFrameRate = parameters.playbackFrameRate;
let layers = parameters.layers;
let maxFrames = parameters.maxFrames;


/**
 * Extracts decoder / file pairs from the url parameter string.
 */
function getDecoderVideoUrls(): {decoderUrl: string, videoUrl: string} [] {
  let currenDecoder = null;
  let pairs = [];
  forEachUrlParameter((key, value) => {
    if (key == "decoder") {
      currenDecoder = value;
    } else if (key == "file") {
      pairs.push({decoderUrl: currenDecoder, videoUrl: value});
    }
  });
  return pairs;
}

let pairs = getDecoderVideoUrls();
{/*<AnalyzerComponent
    decoderUrl={decoder}
    videoUrl={file}
    playbackFrameRate={playbackFrameRate}
    layers={layers}
    maxFrames={maxFrames}/>,
    */}
ReactDOM.render(
  <AnalyzerViewCompareComponent
    decoderVideoUrlPairs={pairs}
    playbackFrameRate={playbackFrameRate}
    layers={layers}
    maxFrames={maxFrames}/>,
  document.getElementById("analyzer-app")
);