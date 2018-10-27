export default {
    stringify(params: any): string {
        return '?' + Object.keys(params).map((key: string) => `${key}=${params[key]}`).join('&');
    },
};
