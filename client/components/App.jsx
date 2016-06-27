import element from 'magic-virtual-element';
import Counter from './Counter';
require('../css/index.css');

export default {
  render ({props}) {
    return (
      <Counter {...props} />
    );
  }
};
