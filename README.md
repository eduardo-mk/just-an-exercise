# just-an-exercise

This is just an execise to handle the state of a table and some of its props.

## Installation

```console
npm install
```

## Execute the project

```console
npm start
```

## Run test

WIP

```console
npm run test
```

## Run prettier

WIP

```console
npm run prettier
```

### Briefly explanation of my thinking

-   Handle the state of the exercise with reducers. This will make it easier to trigger actions and share the dispatch object.
-   Centralize logic. In this case, in the App component. This helped me to deal with presentational components, handling data, and updating separately, making it a little bit easier to maintain.
-   I did not add CSS (just the basic).
-   I tried to add tests to the code to make it more protected for future regression issues.
-   I added TypeScript to contribute to the overall documentation of the project.
-   I assumed that names are unique, so I took advantage of it.
-   There is one state I couldn't figure out in the select all button but I guess we can clarify that later.

### Day - 2

-   Better unit test added
-   State of select-all button clarified.
