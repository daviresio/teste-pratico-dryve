export const formatValue = (value: any): string => {
    if (!value) return '0,00'

    let data: string = '' + value
    data = data.replace('.', ',');
    data = data.match(/,\d{1}$/g) ? data + '0' : data.match(/,\d{2}/g) ? data : data + ',00'
    let index = data.indexOf(',')

    while (index > 3) {
        let temp = data.split('')
        temp.splice(index - 3, 0, '.')
        data = temp.join('')
        index = data.indexOf('.')
    }

    return data
}
