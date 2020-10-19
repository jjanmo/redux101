import './index.css';
import { createStore } from 'redux';

(function () {
    const $result = document.querySelector('.result');
    const $plusButton = document.querySelector('.plus');
    const $minusButton = document.querySelector('.minus');

    const PLUS_STR = 'PLUS';
    const MINUS_STR = 'MINUS';

    const countModifier = (count = 0, action) => {
        switch (action.type) {
            case PLUS_STR: {
                return count + 1;
            }
            case MINUS_STR: {
                return count - 1;
            }
            default: {
                return count;
            }
        }
    };

    const counterStore = createStore(countModifier);

    const onChange = () => {
        $result.textContent = counterStore.getState();
    };

    counterStore.subscribe(onChange);

    const handlePlus = () => {
        counterStore.dispatch({ type: PLUS_STR });
    };

    const handleMinus = () => {
        counterStore.dispatch({ type: MINUS_STR });
    };

    $plusButton.addEventListener('click', handlePlus);
    $minusButton.addEventListener('click', handleMinus);
})();
