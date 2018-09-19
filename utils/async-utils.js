export const debounce = (fn, delay) => {
    console.log('debounce', this);
    let timer = null;
    return function (...args) {
        const context = this;
        console.log('debounce return', this);
        timer && clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, args);
        }, delay);
    };
}