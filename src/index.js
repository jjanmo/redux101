import './index.css';

(function () {
    const $result = document.querySelector('.result');
    const $plusButton = document.querySelector('.plus');
    const $minusButton = document.querySelector('.minus');
    let count = Number($result.textContent);

    const updateCount = () => {
        $result.textContent = count;
    };

    const handlePlus = () => {
        count = count + 1;
        updateCount();
    };

    const handleMinus = () => {
        count = count - 1;
        updateCount();
    };

    $plusButton.addEventListener('click', handlePlus);
    $minusButton.addEventListener('click', handleMinus);
})();
