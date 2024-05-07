const useLocalStorage = (key: any) => {
    const setDataInLocalStorage = (key: string, value: any) => {
        try {
            const serializedValue = JSON.stringify(value);
            window.localStorage.setItem(key, serializedValue);

        } catch (error) {
            console.error("Error on local storage", error)
        }
    };

    const getDataFromLocalStorage = (key: string) => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : undefined;
        } catch (error) {
            console.error("Error on local storage", error);
            return undefined;
        }
    };

    const value = key && getDataFromLocalStorage(key);

    return { setDataInLocalStorage, getDataFromLocalStorage, value }
};

export default useLocalStorage;