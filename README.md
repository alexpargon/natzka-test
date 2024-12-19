# Natza hiring process test

Front-end task coded in the 19th and to be handed on the 20th of december

### Front-end engineer interview assignment

Given an arbitrary list of strings (paths), which represent a (directory/file) tree structure separated by a forward slash, present that same tree
using react components. The tree structure should be expandable/collapsible.

### Requirements

- Input list is an array of strings. Those strings have a forward slash as separator to indicate the depth of the tree.

- Use react components and typescript to construct a solution. We usually do not shy away from existing component libraries, but for the purpose of this exercise: please build your own components.

- Use styled components to style your solution to your own preference.

- Think about what is required to make this a production ready solution. There is no need to implement in full detail the actual production ready requirements, but ensure at least the scaffolding is there.

- Do not spend more than 1 working day on this solution.

### Input example

An example of the given strings

```javascript
["/root/test", "/dev/null", "/root/something/somewhere"];
```

### Output example

A non-graphical example of the outcome.
Please note that this example is not collapsible and styling is non-existent. However, we expect that the react solution is collapsible and styled.

```
- root
  - test
  - something
    - somewhere
  - dev
    - null
```

### How we will evaluate

Publish the result to a public Github repository, and share the link with us.
We will run your code with different inputs, and see if it behaves as expected.
On top of that we will inspect your code, to see if it matches expectations for a production ready solution.
