<script>
    export let placeholder = "";
    export let required = false;
    export let type = "text";
</script>

<input {type} {placeholder} {required}/>

<style>
    input {
        border-radius: 4px;
        border: 1px solid #d3d3d3;
        padding: 5px;
        background-color: #e6e6fa;
        color: #333;
        font-size: 1em;
        width: 150px;
    }
</style>