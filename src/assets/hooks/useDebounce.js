import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    // lần 1 thì value này là chuỗi rỗng
    // sau lần 1 thì value ở hàng dưới ko thay đổi
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value]);

    return debouncedValue;
}

export default useDebounce;
