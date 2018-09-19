import { debounce } from '../async-utils';

describe('async-utils', () => {
    describe('debounce', () => {
        it('should return a function that will be called with delay', () => {
            let delayPassedToSetTimeout = -1;
            let setTimeoutFn = jest.fn().mockImplementation((fn, setTimeoutDelay) => {
                delayPassedToSetTimeout = setTimeoutDelay;
                fn();
            });
            global.setTimeout = setTimeoutFn;
        
            const fn = jest.fn();
            const delay = 500;
            const debouncedFn = debounce(fn, delay);

            const arg1 = 'here is an argument';
            const arg2 = 23581321;
            debouncedFn(arg1, arg2);
            
            expect(delayPassedToSetTimeout).toBe(delay);
            expect(fn).toHaveBeenCalledTimes(1);
            expect(fn).toHaveBeenLastCalledWith(arg1, arg2);
        });
        it('should clearTimer if exists', () => {
            const clearTimeoutFn = jest.fn();
            const timer = 3;
            global.setTimeout = () => timer;
            global.clearTimeout = clearTimeoutFn;

            const debouncedFn = debounce(() => {}, 100);
            debouncedFn();
            debouncedFn();
            
            expect(clearTimeoutFn).toHaveBeenCalledTimes(1);
            expect(clearTimeoutFn).toHaveBeenLastCalledWith(timer);
        });
    });
});