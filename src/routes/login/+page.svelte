<script>
  import Button from "../../components/Button.svelte";
  import Input from "../../components/Input.svelte";
  let email = "";
  let password = "";

  function submit(event) {
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (response.ok) {
        event.locals.token = response.body.get("token");
        window.location.href = "/dashboard";
      } else {
        alert("Invalid email or password");
      }
    });
  }
</script>

<form>
  <Input type="email" placeholder="Email" required bind:value={email} />
  <Input
    type="password"
    placeholder="Password"
    required
    bind:value={password}
  />
  <Button type="submit" text="Click me" onClick={submit} />
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
</style>
