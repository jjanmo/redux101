import './index.css';
import { createStore } from 'redux';

(function () {
    const $result = document.querySelector('.result');
    const $plusButton = document.querySelector('.plus');
    const $minusButton = document.querySelector('.minus');

    const countModifier = (count = 0, action) => {
        switch (action.type) {
            case 'PLUS': {
                return count + 1;
            }
            case 'MINUS': {
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
        counterStore.dispatch({ type: 'PLUS' });
    };

    const handleMinus = () => {
        counterStore.dispatch({ type: 'MINUS' });
    };

    $plusButton.addEventListener('click', handlePlus);
    $minusButton.addEventListener('click', handleMinus);
})();
