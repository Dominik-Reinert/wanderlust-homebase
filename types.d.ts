

declare type Delegate<U, V> = (payload: U) => V;

declare type Callback<T> = Delegate<T, void>;

declare type Predicate<T> = (value: T) => boolean;