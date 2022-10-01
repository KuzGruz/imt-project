export interface SelectItem<T = string, R = any> {
    code: T;
    title: string;
    data?: R;
}
