import './index.css';

(function () {
    const $input = document.querySelector('.todo-input');
    const $button = document.querySelector('.todo-button');
    const $list = document.querySelector('.todos');

    const updateList = (content) => {
        const $li = document.createElement('li');
        $li.textContent = content;
        $list.appendChild($li);
    };

    const handleClick = (e) => {
        e.preventDefault();
        const _content = $input.value;
        updateList(_content);
    };

    $button.addEventListener('click', handleClick);
})();
