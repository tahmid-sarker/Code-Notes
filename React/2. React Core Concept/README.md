# Lesson We Learn

- Event Trigger
- State Management
  ```js
  function useState(initialValue){
      let state = initialValue;
      function setState(newValue){
          state = newValue;
      }
      return [state, setState]
  }
  ```
- Different Types of Data fetching
  - use: userPromise > Suspense > promise > use(userPromise)
  - Fetching data using async/await
  - useState + useEffect(() => {}, []) (Less use so far. Worked after Component Ready)
  - Set loader in router definition: Load data before router component rendered.

- Loop through to display data
- Key prop