<template>
  <div class="welcome container">
    <div v-if="showLoginForm">
      <Login></Login>
      <p>not a member? <span @click="showLoginForm= !showLoginForm">create account?</span></p>
      
    </div>
    <div v-else>
      <SignUp></SignUp>
      <p>already member? <span @click="showLoginForm= !showLoginForm">login account?</span></p>
    </div>
      
      
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
export default {
  components: {
    Login, SignUp },
    setup(){
      let showLoginForm = ref(true);
      let showToggle=()=>{
        showLoginForm.value= !showLoginForm.value;
}

    return {showLoginForm, showToggle}
    }

}
</script>

<style>
 .welcome{
     text-align: center;
     padding: 20px 0;
 }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>