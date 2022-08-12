<template>
  <div id="app">
    <!-- <bind-component/> -->
    <!-- <dyanamic-component/> -->
    <!-- <provide-inject/> -->
    <!-- <filter-component/> -->
    <!-- <customSearch-filter/> -->
    <!-- <mixin-component/> -->
    <!-- <immediate-deepWatcher/> -->
    <!-- <classStyle-binding/> -->
    <!-- <home-view/> -->
    <!-- <parentPopup-component/> -->
    <!-- <provide-inject/> -->
    <!-- <slot-component/> -->
    <!-- <custom-directives/> -->
    <!-- <eventBus-component /> -->
    <!-- <add-com/> -->
    <!-- <transition-component/> -->
    <RegForm/>

    <!-----------------------------------Router---------------------------------->
 <pre>
  {{$route.query}}
</pre>
    <nav>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="{name:contact}">Contact</router-link></li>
      </ul>
    </nav>
    <router-view :key="$route.fullPath" />

    <div>
      <h1>Dynamic Route Matching</h1>
      <ul>
        <li><router-link to="/">/</router-link></li>
        <li><router-link to="/params/foo/bar">/params/foo/bar</router-link></li>
        <li><router-link :to="{ name: 'Bar' }">bar</router-link></li>
        <li>
          <router-link to="/optional-params">/optional-params</router-link>
        </li>
        <li>
          <router-link to="/params-with-regex/123"
            >/params-with-regex/123</router-link
          >
        </li>
        <li>
          <router-link to="/params-with-regex/abc"
            >/params-with-regex/abc</router-link
          >
        </li>
        <li><router-link to="/asterisk/foo">/asterisk/foo</router-link></li>
        <li>
          <router-link to="/asterisk/foo/bar">/asterisk/foo/bar</router-link>
        </li>
        <li>
          <router-link to="/optional-group/bar"
            >/optional-group/bar</router-link
          >
        </li>
        <li>
          <router-link to="/optional-group/foo/bar"
            >/optional-group/foo/bar</router-link
          >
        </li>
      </ul>
    </div>

     <div>
      <h1>Name Routes</h1>
      <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link :to="{ name: 'Home2' }">Home 2</router-link></li>
        <li><router-link :to="{ name: 'Foo' }">Foo</router-link></li>
        <li><router-link :to="{ name: 'Bar' }">bar</router-link></li>
      </ul>
    </div>

    <div>
      <h1>Named View</h1>
      <ul>
        <li><router-link to="/all">/</router-link></li>
        <li><router-link to="/other">/other</router-link></li>

        <router-view class="view one"></router-view>
        <router-view class="view two" name="a"></router-view>
        <router-view class="view three" name="b"></router-view>
      </ul>
    </div>

    <div>
      <h1>Redirect</h1>

       <p>Current route name: {{ $route.name }}</p>
      <ul>
        <li><router-link to="/relative-redirect">
          /relative-redirect (redirects to /foo)
        </router-link></li>

        <li><router-link to="/relative-redirect?rfoo=rbar&m=l">
          /relative-redirect?foo=bar (redirects to /foo?foo=bar)
        </router-link></li>

        <li><router-link to="/absolute-redirect">
          /absolute-redirect (redirects to /bar)
        </router-link></li>

        <li><router-link to="/dynamic-redirect">
          /dynamic-redirect (redirects to /bar)
        </router-link></li>

        <li><router-link to="/dynamic-redirect/123">
          /dynamic-redirect/123 (redirects to /with-params/123)
        </router-link></li>

        <li><router-link to="/dynamic-redirect?to=rfoo">
          /dynamic-redirect?to=foo (redirects to /foo)
        </router-link></li>

        <li><router-link to="/dynamic-redirect#rbaz">
          /dynamic-redirect#baz (redirects to /baz)
        </router-link></li>

        <li><router-link to="/named-redirect">
          /named-redirect (redirects to /baz)
        </router-link></li>

        <li><router-link to="/redirect-with-params/123">
          /redirect-with-params/123 (redirects to /with-params/123)
        </router-link></li>

        <li><router-link to="/rfoobar">
          /foobar
        </router-link></li>

        <li><router-link to="/rFooBar">
          /FooBar
        </router-link></li>

        <li><router-link to="/not-found">
          /not-found (redirects to /)
        </router-link></li>
      </ul>
    </div>

   

    <div>
      <h1>Passing Props Routes</h1>
      <p><router-view /></p>
      <ul>
        <li><router-link to="/hello">/hello</router-link></li>
        <li><router-link to="/hello/you">/hello/you</router-link></li>
        <li><router-link to="/static">/static</router-link></li>
        <li><router-link to="/dynamic/1">/dynamic/1</router-link></li>
        <li><router-link to="/attrs">/attrs</router-link></li>
      </ul>
    </div> 
  </div>
</template>

<script>
//import TransitionComponent from './components/Build-In-Transition/TransitionComponent.vue';
import RegForm from './components/Introduction/RegForm.vue'
export default {
  components: { //TransitionComponent,
   RegForm },
  name: "App",
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul li {
  list-style: none;
}
</style>