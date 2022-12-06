import { Form, Label } from "./RegisterForm.styles";

const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    form.reset();
}

export default function RegisterForm() {
  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
}
