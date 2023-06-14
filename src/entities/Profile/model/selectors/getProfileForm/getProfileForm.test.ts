import { StateSchema } from '@/app/providers/StoreProvider';
import { Currency } from '@/entities/Currency';
import { getProfileForm } from './getProfileForm';
import { Country } from '../../../../Country';

describe('getProfileForm.test', () => {
    test('should return right', () => {
        const data = {
            username: 'Denah',
            age: 32,
            country: Country.Ukraine,
            lastname: 'Di',
            firstname: 'diane',
            city: 'Reni',
            currency: Currency.USD,
        };
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: data,
            },
        };
        expect(getProfileForm(state as StateSchema)).toEqual(data);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getProfileForm(state as StateSchema)).toEqual(undefined);
    });
});
