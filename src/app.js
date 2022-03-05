"use strict";

// ---------- Like Button -------------

// class LikeButton extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { liked: false };
//   }

//   render() {
//     if (this.state.liked) {
//       return (
//         <button onClick={() => this.setState({ liked: false })}>
//           You liked this
//         </button>
//       );
//     }

//     return <button onClick={() => this.setState({ liked: true })}>Like</button>;
//   }
// }

// let domContainer = document.querySelector("#root");
// ReactDOM.render(<LikeButton />, domContainer);

// --------- Clock ------------

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, World!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// }
// setInterval(() => {
//   tick();
// }, 1000);

// ----------- Multiple Components ------------

// function Welcome(props) {
//   return <h1>Привет, {props.name}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Алиса" />
//       <Welcome name="Базилио" />
//       <Welcome name="Буратино" />
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// ------------ CLock with Components --------------

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       date: new Date(),
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick() {
//     this.setState({ date: new Date() });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Привет, мир!</h1>
//         <h2>Сейчас {this.state.date.toLocaleTimeString()}</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

// ---------- CLock Constructor ------------

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   render() {
//     return (
//       <div>
//         <h1>Привет, мир!</h1>
//         <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Clock />, document.getElementById("root"));

// ----------- State ----------------

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     console.log(this.state);

//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "Включено" : "Выключено"}
//       </button>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

// ----------- Conditional render --------------

// function UserGreeting(props) {
//   return <h1>С возвращением!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Войдите, пожалуйста.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;

//   {
//     return isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
//   }
// }

// ReactDOM.render(
//   <Greeting isLoggedIn={false} />,
//   document.getElementById("root")
// );

// ------------- Conditional render of login buttons ----------------

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function UserGreeting(props) {
//   return <h1>С возвращением!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Войдите, пожалуйста.</h1>;
// }

// function LoginButton(props) {
//   return <button onClick={props.onClick}>Войти</button>;
// }

// function LogoutButton(props) {
//   return <button onClick={props.onClick}>Выйти</button>;
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {
//       isLoggedIn: false,
//     };
//   }

//   handleLoginClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogoutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     let button;
//     if (isLoggedIn) {
//       button = <LogoutButton onClick={this.handleLogoutClick} />;
//     } else {
//       button = <LoginButton onClick={this.handleLoginClick} />;
//     }

//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         {button}
//       </div>
//     );
//   }
// }

// ReactDOM.render(<LoginControl />, document.getElementById("root"));

// ---------- Ternary operators ------------

// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Здравствуйте!</h1>
//       {unreadMessages.length > 0 && (
//         <h2>У вас {unreadMessages.length} непрочитанных сообщений.</h2>
//       )}
//     </div>
//   );
// }

// const messages = ["React", "Re: React", "Re:Re: React"];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById("root")
// );

// ----------- Prevent element from render -----------

// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;
//   }

//   return <div className="warning">Предупреждение!</div>;
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { showWarning: true };
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick() {
//     this.setState((state) => ({
//       showWarning: !state.showWarning,
//     }));
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? "Спрятать" : "Показать"}
//         </button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Page />, document.getElementById("root"));

// ----------- Lists and keys --------------

// function ListItem(props) {
//   return <li>{props.value}</li>;
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) => (
//     <ListItem key={number.toString()} value={number} />
//   ));
//   return <ul>{listItems}</ul>;
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById("root")
// );

// ------------- Same keys in different lists ----------------

// function Blog(props) {
//   const sidebar = (
//     <ul>
//       {props.posts.map((post) => (
//         <li key={post.id}>{post.title}</li>
//       ))}
//     </ul>
//   );
//   const content = props.posts.map((post) => (
//     <div key={post.id}>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   ));
//   return (
//     <div>
//       {sidebar}
//       <hr />
//       {content}
//     </div>
//   );
// }

// const posts = [
//   {
//     id: 1,
//     title: "Привет, мир",
//     content: "Добро пожаловать в документацию React!",
//   },
//   { id: 2, title: "Установка", content: "React можно установить из npm." },
// ];
// ReactDOM.render(<Blog posts={posts} />, document.getElementById("root"));

// ---------- Form submit value -----------

// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Отправленное имя: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Имя:
//           <input
//             type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<NameForm />, document.getElementById("root"));

// ---------- Form Select -----------

// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "coconut" };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

//   handleSubmit(event) {
//     alert("Ваш любимый вкус: " + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Выберите ваш любимый вкус:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Грейпфрут</option>
//             <option value="lime">Лайм</option>
//             <option value="coconut">Кокос</option>
//             <option value="mango">Манго</option>
//           </select>
//         </label>
//         <input type="submit" value="Отправить" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<FlavorForm />, document.getElementById("root"));

// ------------ Handling inputs of different types && Computed property names-----------

// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2,
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.type === "checkbox" ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       // Computed property name
//       [name]: value,
//     });
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           Пойдут:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange}
//           />
//         </label>
//         <br />
//         <label>
//           Количество гостей:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange}
//           />
//         </label>
//       </form>
//     );
//   }
// }

// ReactDOM.render(<Reservation />, document.getElementById("root"));

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>Вода закипит.</p>;
  }
  return <p>Вода не закипит.</p>;
}
