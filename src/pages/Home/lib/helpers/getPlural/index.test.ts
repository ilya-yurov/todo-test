import { getPlural, GetPluralTuple } from './index';

describe('getPlural', () => {
    // Проверяем, что функция возвращает правильную строку для единственного элемента (one).
    it('should return the correct string for single items (one)', () => {
        const strings: GetPluralTuple = ['объект', 'объекта', 'объектов'];

        expect(getPlural(1, strings)).toBe('объект');
    });

    // Проверяем, что функция возвращает правильную строку для нескольких элементов (few).
    it('should return the correct string for few items (few)', () => {
        const strings: GetPluralTuple = ['объект', 'объекта', 'объектов'];

        expect(getPlural(2, strings)).toBe('объекта');
        expect(getPlural(3, strings)).toBe('объекта');
        expect(getPlural(4, strings)).toBe('объекта');
    });

    // Проверяем, что функция возвращает правильную строку для многих элементов (many).
    it('should return the correct string for many items (many)', () => {
        const strings: GetPluralTuple = ['объект', 'объекта', 'объектов'];

        expect(getPlural(0, strings)).toBe('объектов');
        expect(getPlural(5, strings)).toBe('объектов');
        expect(getPlural(11, strings)).toBe('объектов');
        expect(getPlural(21, strings)).toBe('объект');
        expect(getPlural(22, strings)).toBe('объекта');
        expect(getPlural(25, strings)).toBe('объектов');
        expect(getPlural(100, strings)).toBe('объектов');
        expect(getPlural(101, strings)).toBe('объект');
        expect(getPlural(111, strings)).toBe('объектов');
        expect(getPlural(121, strings)).toBe('объект');
    });
});
