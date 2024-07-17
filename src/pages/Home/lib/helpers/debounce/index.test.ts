import { debounce } from './index';

jest.useFakeTimers();

describe('debounce', () => {
    it('should call the main function after the specified delay', () => {
        const mainFunction = jest.fn();
        const debouncedFunction = debounce(mainFunction, 1000);

        debouncedFunction();

        // Убедимся, что функция не вызывается сразу
        expect(mainFunction).not.toBeCalled();

        // Перемотаем таймеры на 1000 мс
        jest.advanceTimersByTime(1000);

        // Убедимся, что функция вызывается после задержки
        expect(mainFunction).toBeCalled();
        expect(mainFunction).toHaveBeenCalledTimes(1);
    });

    it('should reset the delay if the function is called again within the delay period', () => {
        const mainFunction = jest.fn();
        const debouncedFunction = debounce(mainFunction, 1000);

        debouncedFunction();
        debouncedFunction();

        // Перемотаем таймеры на 500 мс, функция не должна быть вызвана
        jest.advanceTimersByTime(500);
        expect(mainFunction).not.toBeCalled();

        // Перемотаем таймеры еще на 500 мс, функция должна быть вызвана только один раз
        jest.advanceTimersByTime(500);
        expect(mainFunction).toBeCalled();
        expect(mainFunction).toHaveBeenCalledTimes(1);
    });

    it('should pass the arguments to the main function', () => {
        const mainFunction = jest.fn();
        const debouncedFunction = debounce(mainFunction, 1000);

        debouncedFunction('argument1', 'argument2');

        // Перемотаем таймеры на 1000 мс
        jest.advanceTimersByTime(1000);

        // Убедимся, что функция вызывается с правильными аргументами
        expect(mainFunction).toBeCalledWith('argument1', 'argument2');
    });
});
