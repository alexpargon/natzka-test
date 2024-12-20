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

## Answer to question about production ready:

To create a production ready component, the following topics need to be addressed:

1. **Code quality**: Ensure that the code follows best practices.

2. **Performance optimization (simple optimizations)**: Optimize the component for performance by minimizing unnecessary re-renders and avoiding expensive operations.

3. **Accessibility**: Add accesibility features to make the component more usable by people with disabilities.

4. **Testing**: Write comprehensive unit tests to verify the functionality of the component, these tests can include graphical tests with tools such as storybook.

5. **Documentation**: Provide good documentation for the component, including usage instructions, props descriptions, and examples.

6. **Security (not implemented)**: Follow security best practices to prevent common vulnerabilities, such as cross-site scripting (XSS) and injection attacks. Sanitize user input and avoid using unsafe methods or libraries if required.

7. **Versioning and release management (not implemented)**: Create repository or use any other way to deliver the component to any project that requires it's use, the simplest way is creating a monorepo, but there are package managers such as npm and github packages that you can leverage to address this.
