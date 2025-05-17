import "./src/App.css";

function FormObjectData() {
  function handleSubmit(event) {
    event.preventDefault();
    const FormObjectDataObj = new FormData(event.currentTaget);
    const credentials = {
      emailData: FormObjectDataObj.get("email"),
      passwordData: FormObjectDataObj.get("password"),
    };
    console.log(credentials);
    console.log("Submitted!");
  }

  return (
    <form onSubmit={handleSubmit}>
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
