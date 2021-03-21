import React, { useState } from 'react';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function SignupForm() {
  const [email, setEmail] = useState('');

  // const handleChangeEmail = e => {
  //   setEmail(e.target.value);
  // };

  const [password, setPassword] = useState('');

  // const handleChangePassword = e => {
  //   setPassword(e.target.value);
  // };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  };

  // 2й способ
  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn('Такой тип поля ${name} не обрабатывается');
    }
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit} autoComplete="off">
      <label style={styles.label}>
        <span>Почта</span>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
        />
      </label>

      <label style={styles.label}>
        <span>Пароль</span>
        <input
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
        />
      </label>

      <button type="submit">Зарегистрироваться</button>
    </form>
  );
}

// export default class SignupForm extends Component {
//   state = {
//     email: '',
//     password: '',
//   };

//   handleChange = evt => {
//     const { name, value } = evt.target;
//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <form style={styles.form} autoComplete="off">
//         <label style={styles.label}>
//           <span>Почта</span>
//           <input
//             type="email"
//             name="email"
//             onChange={this.handleChange}
//             value={this.state.email}
//           />
//         </label>

//         <label style={styles.label}>
//           <span>Пароль</span>
//           <input
//             type="password"
//             name="password"
//             onChange={this.handleChange}
//             value={this.state.password}
//           />
//         </label>

//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     );
//   }
// }
