# Redux101

> Learn vanilla redux and react-redux

## Vanilla Redux

![redux-flow](image/redux-flow.png)

> [Reference](https://medium.com/@aurelie.lebec/redux-and-react-native-simple-login-example-flow-c4874cf91dde)

`Basic Summary of Redux:`

To use redux, we need to create `store` where I put data(In fact, data that change in app is data)

> Store has four methods, `dispatch() / getState() / replaceReducer() / subscribe()`. To use redux, I need that methods. Check it out.

Once, make store, store requires `reducer`.

`const store = createStore(reducer)`

> What is reducer?

`const reducer = (state, action) => { }`

Reducer is a `FUNCTION` that modifies my data. And if reducer return <u>something</u>, something becomes <u>data in my app</u>. Only reducer can change data. Reducer has two parameters, `state and action`

> What is action?

Action is `OBJECT`.I can use dispatch method with action as parameter to call reducer.

`store.dispatch(action object)`

action object has `type` property. And accroding type property I can make logic of changing state .

It is flow:

**call dispatch(action) => call reducer => find correct logic of action type => state change**

> How to rerender according to changing state

To do this, I can use subscribe method in store. **Subscribe method allow for me to know current state in store.** If state change, store call subscribe and parameter's function.

`store.subscribe(function)`
