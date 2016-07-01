import element from 'magic-virtual-element';
import {observer} from 'mobx-deku';

export default observer({
  render ({props}) {
    const {state} = props;

    return (
      <div class='counter'>
        <div class='counter__display'>{state.counter}</div>
        <div>
          <button class='button' onClick={state.decreaseCounter.bind(state)}>-</button>
          <button class='button' onClick={state.increaseCounter.bind(state)}>+</button>
        </div>
      </div>
    );
  }
});
