import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return right', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
    test('should return wrong', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '321',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('321');
    });
    test('should return undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginPassword(state as StateSchema)).toEqual('');
    });
});
