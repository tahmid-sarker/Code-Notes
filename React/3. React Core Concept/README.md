# The Lesson We Have Learned

- e.target.[name of the input field].vale
- Use form action an fromData in the action handler. formData.get('name of the input field')
- Controlled Component. One per each field. Use State onChange of the field. Useful to dynamically handle error.
- Handle all controlled field on one state object
  ```js
  const [formData, setFormData] = useState({
    name: '',
    password: '',
    phone: ''
  })
  ```
- Uncontrolled using useRef
- Hook Form
- Create a context using createContext with a default value make sure you export the context to be used in other files.