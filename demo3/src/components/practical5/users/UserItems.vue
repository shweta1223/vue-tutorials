<template>

<li>
        <h2 v-randomColor>{{name}}</h2>      

        <div class="userDetails">
        <p><span class="title">  
          User Id --</span> {{ id }}
        </p>
        <p><span class="title">  
          Username --</span> {{ username }}
        </p>
        <p><span class="title">
          Email --</span>  {{ email }}
        </p>
        <p><span class="title"> 
          Phone -- </span>{{ phone }}
        </p>
        <p><span class="title">
          Website -- </span> {{ website }}
        </p>
        </div>  
    <router-link :to="'/users/' + this.id  "  >View Article</router-link>
  </li>
</template>

<script>
export default {
  props: ['id','name','username', 'email','phone','website','company','address' ],
   directives: {
    randomColor: {
      bind: function (el) {
        el.style.color = `#${((Math.random() * 0xffffff) << 0).toString(16)}`;
        //console.log(el);
      },
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>