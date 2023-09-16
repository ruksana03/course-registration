# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


- **Question 1**: Add at least 3 Project features

   - **Feature 1**: Course Selection:
     - Users can browse and select courses from a list of available options.
     - Each course has details such as the course name, credit hours, and price.
     - If a user selects a course two or more times a toast message will be displayed saying "already selected".

   - **Feature 2**: Credit Limit Management:
     - The project applies a credit limit of 20 credit hours.
     - Users will receive a message with a toast that they have exceeded the credit limit
     - credit can't be less than 0 and more than 20

   - **Feature 3**: Price Calculation:
     - The project calculates and displays the total price of the selected courses based on their individual prices.

- **Question 2**: Discuss how you managed the state in your assignment project.

  - I have a parent component responsible for managing the state related to course selection. The state is declared and managed in the parent component using React's built-in useState hook.
   - In the parent component, I declare several state variables using the useState hook. For example -
      - const [courses, setCourses] = useState([]);
      - const [selectedCourses, setSelectedCourses] = useState([]);
   - To make the state available to child components, its pass as props. Each child component that needs access to this state as a prop.
   - In the child components, its receive the state props and use them as needed.
   - When a user interacts with the child components, such as selecting or deselecting a course, the child components communicate with the parent component to update the state.
   - The parent component manages state updates, calculate the remaining credit, and passes the updated state back to the child components through props.

