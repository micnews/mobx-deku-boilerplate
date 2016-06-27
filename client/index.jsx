import {render, tree} from 'deku';
import element from 'magic-virtual-element';
import App from './components/App';
import State from './states/State';

const state = new State();
const $root = document.querySelector('.app-root');

function update (Application) {
  render(tree(<Application state={state} />), $root);
}
update(App);

if (module.hot) {
  module.hot.accept('./components/App.jsx', () => {
    const updatedApp = require('./components/App.jsx').default;
    update(updatedApp);
  });
}
