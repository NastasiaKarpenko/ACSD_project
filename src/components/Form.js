import { useState } from 'react';

function Form() {
  const[name, setName] = useState("");
  const[email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    // Валідація імені
    if (!name.trim()) {
        newErrors.name = 'Name is required';
      }
  
      // Валідація електронної пошти
      if (!email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'Email is invalid';
      }
  
      return newErrors;
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    // Перевірка валідації
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {

      // Є помилки, оновити стан
      setErrors(formErrors);
    } else {

      // Форма валідна, можна надсилати дані
      alert(`Thank you, ${name}. Check your email to get discount`);
      // Очистити форму (необов'язково)
      setName('');
      setEmail('');
      setErrors({});
    }
  };
  

    return (
      <div>
       <form onSubmit={handleSubmit} noValidate>
        <label> Enter your name:
            <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <div style={{ color: 'red' }}>{errors.name}</div>}
        </label>
        <label> Enter your email:
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
        </label>
        <input type="submit" />  
        </form>
  

      </div>
    );
  }
  
  export default Form;