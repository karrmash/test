export const API_DATA = "API_DATA";
export const GET_DATA = "GET_DATA";
export const FILTER = "FILTER";

/**
 * Получение данных из API
 * @returns {{type: string}}
 * @constructor
 */
export function ApiData() {
    return {
        type: API_DATA,
    };
}

/**
 * Запись данных в хранилище
 * @param data
 * @returns {{type: string, data: *}}
 */
export function getData(data) {
    return {
        type: GET_DATA,
        data
    }
}

/**
 * Работа с фильтром
 * @param isFilter
 * @param data
 * @returns {{type: string, isFilter: *, data: *}}
 */
export function filter(isFilter, data) {
    return {
        type: FILTER,
        isFilter,
        data
    }
}


