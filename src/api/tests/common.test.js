import { checkStatus, request, handleError } from '../common';

describe('common', () => {
    describe('checkStatus', () => {
        it('should return the response', () => {
            const response = { status: 200 };
            expect(checkStatus(response)).toEqual(response);
        });
        it('should throw an error', () => {
            const response = { status: 500 };
            expect(() => { 
                checkStatus(response);
            }).toThrow();
        });
    });
    describe('handleError', () => {
        it('should log the error', () => {
            const consoleLogFn = jest.fn();
            global.console = {
                log: consoleLogFn,
            };

            const error = new Error('something went wrong');
            handleError(error);

            expect(consoleLogFn).toHaveBeenCalledTimes(1);
            expect(consoleLogFn).toHaveBeenLastCalledWith('error!', error);
        });
    });
});