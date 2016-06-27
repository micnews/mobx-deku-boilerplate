import element from 'magic-virtual-element';
import {observer} from 'mobx-deku';

export default observer({
  render ({props}) {
    return (
      <div class='counter'>
        <div class='counter__display'>{props.state.counter}</div>
        <div>
          <button class='button' onClick={decreaseCounter}>-</button>
          <button class='button' onClick={increaseCounter}>+</button>
        </div>
      </div>
    );
    function increaseCounter () {
      props.state.increaseCounter();
    }
    function decreaseCounter () {
      props.state.decreaseCounter();
    }
  }
});
