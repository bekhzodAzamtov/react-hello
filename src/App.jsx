import React from 'react';

import * as ReactDOM from "react-dom";
import {Main} from "./components/main";


const element =
  <div>
    <Main>
    </Main>
  </div>;

ReactDOM.render(
  element ,
  document.getElementById('root')
);
