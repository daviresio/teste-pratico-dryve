export const toLower = (value: any) => {
    if(!value) return value

    if(Array.isArray(value)) {
        return value.map(v => convertToLower(v))
    }

    return convertToLower(value)
}

const convertToLower = (value: any) => {
    return Object.keys(value).reduce((newObj, key) => {
        const val = value[key];
        const newKey = key.charAt(0).toLowerCase() + key.slice(1)
        // @ts-ignore
        newObj[snakeToCamel(newKey)] = (typeof val === 'object') ? convertToLower(val) : val;
        return newObj;
    }, {});
}

const snakeToCamel = (str: string) => str.replace(/([-_]\w)/g, g => g[1].toUpperCase())
