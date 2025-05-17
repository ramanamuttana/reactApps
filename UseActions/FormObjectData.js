import "./src/App.css";

function FormObjectData() {
  function submitAction(formData) {
    
   
    const credentials = {
      emailData: formData.get("email"),
      passwordData: formData.get("password"),
    };
    console.log(credentials);
    console.log("Submitted!");
  }

  return (
    <form action={submitAction}>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="emailRef" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="passwordRef" />
      </p>
      <p className="actions">
        <button>Login</button>
      </p>
    </form>
  );
}

export default FormObjectData;
