<script>
let name;
let email;
let message = "";
let error = "";

const submitForm = async ()=>{
    try{
const submit = await fetch("/api/contact",{
method: "POST",
body: JSON.stringify({
    name,
    email,
}),
});
const data = await submit.json();
message = data;
name = '';
email = '';
}catch(err){
    error = err;
}
};
</script>


{#if message}
    you are  {message.name} message submit
{:else if error}
{error.name}
{/if}
<br>
<h3>Contact Page</h3>
<div container-md>
    <div class="row">
        <div class="sm-4 col"> <form on:submit|preventDefault={submitForm}>
            <input type="text" name="name" placeholder="name" bind:value={name}>
            <input type="text" name="email" placeholder="email" bind:value={email}>
            <button type="submit" class="btn-secondary">Submit</button>
        </form></div>

      </div>
   
</div>


