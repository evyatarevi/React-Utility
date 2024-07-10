// ex 1

// When you see React.FC<Props>, it means that React.FC is a generic type, and Props is the type parameter being passed to it.
// This allows you to specify the type of props that the functional component will receive.
const Greeting: React.FC<Props> = ({ name, age }) => {
  interface Props {
    //Defines the shape of the props the component expects.
    name: string;
    age?: number; // Optional prop
  }

  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;

// Benefits of Using React.FC:
// Type Checking: Ensures that the props passed to the component match the expected types.
// Children Prop: Automatically includes the children prop. If you want to specify that a component does not accept children,
//  you need to explicitly declare it.
// Default Props and Prop Types: Provides better support for default props and prop typ

// Example 2: with children

interface Props {
  name: string;
}

const Welcome: React.FC<Props> = ({ name, children }) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {children}
    </div>
  );
};

export default Welcome;

// Alternative Without React.FC:

interface Props {
  name: string;
  children?: ReactNode; // Explicitly defining the children prop
}

const Welcome = ({ name, children }: Props) => {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {children}
    </div>
  );
};

export default Welcome;

// Key Points to Remember:
// React.FC<Props> is a convenient way to type functional components, ensuring that props are correctly passed and used.
// Includes children by default: This might be useful or unnecessary depending on your component.
// Flexibility: You can opt not to use React.FC if you pref
