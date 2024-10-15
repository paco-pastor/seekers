<script>
    import Button from "../../components/Button.svelte";
    import Input from "../../components/Input.svelte";

    // TODO
    function submit(event) {
        console.log("Form submitted");
    }
</script>

<form>
    <Input type="email" placeholder="Email" required />
    <Input type="password" placeholder="Password" required />
    <Button type="submit" text="Click me" onClick={submit}/>
</form>

<style>
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }
</style>

