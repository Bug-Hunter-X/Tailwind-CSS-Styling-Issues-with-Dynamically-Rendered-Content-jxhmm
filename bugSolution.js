The solution depends on the specific framework and implementation.  For Next.js, ensure that your dynamically rendered content is within a component that's rendered within the `pages` directory or appropriately included in a layout that uses Tailwind directives.  For Nuxt.js,  make sure your components are within the scope of the Nuxt application's rendering process.  If using server-side rendering (SSR) and client-side hydration, ensure proper hydration occurs. One common method is to make sure your server-side rendered content is within a component that also contains the Tailwind directives; the hydration process will then properly apply the styles.

Example (Next.js):

```javascript
// bug.js (incorrect)
function MyComponent() {
  return (
    <div>
      <p className="bg-red-500 text-white p-4">This text is not styled.</p> // This is outside the main app rendering and directive scope
    </div>
  );
}

// bugSolution.js (corrected)
function MyComponent() {
  return (
    <div>
      <div className="bg-blue-100 p-4">   {/*Here the directive is properly applied, so next.js will inject the styles at build time for this div block.*/}      <p className="bg-red-500 text-white p-4">This text is styled correctly.</p>
      </div>
    </div>
  );
}
```