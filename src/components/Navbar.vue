<template>
    <nav>
        <div>
            <p>Hi display name</p>
            <p class="email">logged in as email</p>
        </div>
        <button @click="logout">Logout</button>
    </nav>
</template>

<script>

import { ref } from '@vue/reactivity';
import useLogout from "../composables/useLogout"
export default {
    setup(){
        let {error, logOut}= useLogout();
        let logout=async()=>{
                
           await logOut();
            console.log("user logged out");
          
        }
        return {logout, error};
    }
}
</script>

<style>
 nav{
     display: flex;
     justify-content:space-between;
     align-items: center;
     border-bottom: 1px solid #eee;
     padding: 20px;
 }
 nav p{
     margin: 2px auto;
     font-size: 16px;
     color: #444;
 }
 nav p.email{
     font-size: 14px;
     color: #999;
 }
</style>