/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-no-useless-fragment */
import { ReactNode, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchema, StateSchemaKey }
    from 'app/providers/StoreProvider/config/StateSchema';
import { Reducer } from '@reduxjs/toolkit';

export type ReducersList = {
    // eslint-disable-next-line no-unused-vars
    [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
}

interface DynamicModuleLoaderProps {
    reducers: ReducersList;
    removeAfterUnmount?: boolean;
    children: ReactNode;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
    const {
        children,
        reducers,
        removeAfterUnmount = true,
    } = props;
    const dispatch = useDispatch();
    const store = useStore() as ReduxStoreWithManager;
    useEffect(() => {
        const mountedReducers = store.reducerManager.getMountedReducers();
        Object.entries(reducers).forEach(([name, reducer]) => {
            const mounted = mountedReducers[name as StateSchemaKey];
            // добавляем новый редюсер
            if (!mounted) {
                store.reducerManager.add(name as StateSchemaKey, reducer);
                dispatch({ type: `@INIT ${name} reducer` });
            }
        });
        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `@DESTROY ${name} reducer` });
                });
            }
        };
    }, []);

    return (
        <>
            {children}
        </>
    );
};
