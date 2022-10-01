export enum EnableErrors {
    Required = 'required',
    Email = 'email',
    Strong = 'strong',
}

export const errorMessages: Record<EnableErrors, string> = {
    [EnableErrors.Required]: 'Обязательное поле',
    [EnableErrors.Email]: 'Неверный формат Email',
    [EnableErrors.Strong]: 'Пароль не достаточно надежный',
};
