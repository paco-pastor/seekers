<script>
    export let text = "Click me";
    export let type = "";
    export let onClick = () => {};
</script>

<button {type} on:click={onClick}>{text}</button>

<style>
  button {
    margin-top: 10px;
    padding: 5px 10px;
    border-radius: 4px;
    border: none;
    background-color: #333;
    color: white;
    font-size: 1em;
    cursor: pointer;
  }
</style>
