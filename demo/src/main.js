import Vue from "vue";
import App from "./App.vue";
import MyPlugin from "./plugin";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

Vue.use(MyPlugin);

export const eventBus = new Vue();

Vue.config.productionTip = false;

/*-------------- Binding------------------ */
import BindComponent from "./components/Template-Syntax/BindComponent";
import TextBinding from "./components/Template-Syntax/TextBinding";
import HTMLBinding from "./components/Template-Syntax/HTMLBinding";
import AttributeBinding from "./components/Template-Syntax/AttributeBinding.vue";
import OnceBinding from "./components/Template-Syntax/OnceBinding";

Vue.component("bind-component", BindComponent);
Vue.component("text-binding", TextBinding);
Vue.component("html-binding", HTMLBinding);
Vue.component("attribute-binding", AttributeBinding);
Vue.component("once-binding", OnceBinding);

/*--------------Class and style Binding------------------ */
import ClassBinding from "./components/Class-Style-BInding/ClassBinding";
import StyleBinding from "./components/Class-Style-BInding/StyleBinding";
import ClassStyleBinding from "./components/Class-Style-BInding/ClassStyleBinding.vue";

Vue.component("class-binding", ClassBinding);
Vue.component("style-binding", StyleBinding);
Vue.component("classStyle-binding", ClassStyleBinding);

/*--------------Watcher------------------ */
import ImmediateandDeepWatcher from "./components/Watchers/ImmediateandDeepWatcher";

Vue.component("immediate-deepWatcher", ImmediateandDeepWatcher);

/*--------------Async Component------------------ */
import ErrorComponent from "./components/AcyncComponent/ErrorComponent.vue";
import LoadingComponent from "./components/AcyncComponent/LoadingComponent.vue";
import HomeView from "./components/AcyncComponent/HomeView.vue";
import MyHome from "./components/AcyncComponent/MyHome.vue";
import MyList from "./components/AcyncComponent/MyList.vue";

Vue.component("error-component", ErrorComponent);
Vue.component("loading-component", LoadingComponent);
Vue.component("home-view", HomeView);
Vue.component("my-home", MyHome);
Vue.component("my-list", MyList);

/*--------------Keep-alive and Dynamic Component------------------ */
import TabA from "./components/DynamicComponent/TabA.vue";
import TabB from "./components/DynamicComponent/TabB.vue";
import TabC from "./components/DynamicComponent/TabC.vue";
import DynamicComponent from "./components/DynamicComponent/DyanamicComponent.vue";

Vue.component("tab-a", TabA);
Vue.component("tab-b", TabB);
Vue.component("tab-c", TabC);
Vue.component("dynamic-component", DynamicComponent);

/*--------------Provide and Inject ------------------ */
import ComponentC from "./components/Provide_Inject/ComponentC.vue";
import ComponentE from "./components/Provide_Inject/ComponentE.vue";
import ComponentF from "./components/Provide_Inject/ComponentF.vue";
import ProvideInject from "./components/Provide_Inject/ProvideInject.vue";

Vue.component("component-c", ComponentC);
Vue.component("component-e", ComponentE);
Vue.component("component-f", ComponentF);
Vue.component("provide-inject", ProvideInject);

/* --------------Filter and Custom  Filter ------------------  */
import FilterComponent from "./components/Filter/FilterComponent.vue";
import CustomSearchFilter from "./components/Filter/CustomSearchFilter.vue";

Vue.component("filter-component", FilterComponent);
Vue.component("customSearch-filter", CustomSearchFilter);

/* --------------Global Filter ------------------  */
Vue.filter("reverseString", function (value) {
  return value.split("").reverse().join("");
});

/* -------------- Mixin ------------------  */
import MixinComponent from "./components/Mixin/MixinComponent.vue";
import ClickCounter from "./components/Mixin/CounterExample/ClickCounter";
import HoverCounter from "./components/Mixin/CounterExample/HoverCounter.vue";
import ModelComponent from "./components/Mixin/ModelExample/ModelComponent";
import ModelCard from "./components/Mixin/ModelExample/ModelCard";
import TheTooltip from "./components/Mixin/TooltipExample/TheTooltip";
import MixinOptionMerge from "./components/Mixin/RandomeExample/MixinOptionMerge";

Vue.component("mixin-component", MixinComponent);
Vue.component("click-counter", ClickCounter);
Vue.component("hover-counter", HoverCounter);
Vue.component("model-component", ModelComponent);
Vue.component("model-card", ModelCard);
Vue.component("the-tooltip", TheTooltip);
Vue.component("mixin-optionMerge", MixinOptionMerge);

/* -------------- Globally  Mixin ------------------  */
// import message from './mixins/message'

// Vue.mixin(message)

/* -------------- Custom Event ------------------  */
import ParentPopupComponent from "./components/CustomEvent/Example2/ParentPopupComponent";
import PopupComponent from "./components/CustomEvent/Example2/PopupComponent";

Vue.component("parentPopup-component", ParentPopupComponent);
Vue.component("popup-component", PopupComponent);


/* --------------Props------------------  */
import NonPropsAttributes from "./components/Props/NonPropsAttributes"
import AddCom from "./components/Props/AddCom"

Vue.component("nonProps-attrubutes",NonPropsAttributes)
Vue.component("add-com",AddCom)

/* -------------- Slot-----------------  */
import SlotComponent from "./components/Slot/SlotComponent";
import BasicSlot from "./components/Slot/BasicSlot";
import SubmitButton from "./components/Slot/SubmitButton";
import NameSlot from "./components/Slot/NameSlot";
import CurrentUser from "./components/Slot/CurrentUser";
import ScopSlot from "./components/Slot/ScopSlot";

Vue.component("basic-slot", BasicSlot);
Vue.component("slot-component", SlotComponent);
Vue.component("submit-button", SubmitButton);
Vue.component("current-user", CurrentUser);
Vue.component("name-slot", NameSlot);
Vue.component("scop-slot", ScopSlot);

/* -------------- Custom Directives ------------------  */
import CustomDirectives from "./components/CustomeDirective/CustomeDirective";

Vue.component("custom-directives", CustomDirectives);

// Register a global custom directive called `v-focus`
Vue.directive("focus", {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus();
  },
});

Vue.directive("rainbow", {
  bind: function (el, binding) {
    el.style.color = "red";
    el.style.fontSize = binding.value;
  },
});

Vue.directive("rainbow", {
  bind: function (el, binding) {
    if (binding.value == "large") {
      el.style.fontSize = "20px";
    } else if (binding.value == "small") {
      el.style.fontSize = "16px";
    } else {
      el.style.fontSize = "12px";
    }
  },
});

Vue.directive("color-swatch", function (el, binding) {
  el.style.backgroundColor = binding.value;
});

/* -------------- Event Bus ------------------  */
import EventBusComponent from "./components/EventBus/EventBusComponent";
import ComponentFirst from "./components/EventBus/ComponentFirst";
import ComponentSecond from "./components/EventBus/ComponentSecond";
import TestFirst from "./components/EventBus/TestFirst";
import TestSecond from "./components/EventBus/TestSecond";

Vue.component("component-first", ComponentFirst);
Vue.component("component-second", ComponentSecond);
Vue.component("test-first", TestFirst);
Vue.component("test-second", TestSecond);
Vue.component("eventBus-component", EventBusComponent);


/* -------------- Built-in Component (Transition) ------------------  */
import TransitionComponent from "./components/Build-In-Transition/TransitionComponent"
import SingleElementComponent from "./components/Build-In-Transition/SingleElementComponent";
import CSSTransition from "./components/Build-In-Transition/CSSTransition"
import CSSAnimation from "./components/Build-In-Transition/CSSAnimation"
import CustomTransitionClasses from "./components/Build-In-Transition/CustomTransitionClasses"
import JavaScriptHookTransition from "./components/Build-In-Transition/JavaScriptHookTransition"
import TransitionModes from "./components/Build-In-Transition/TransitionModes"
import TransitionBetweenComponent from "./components/Build-In-Transition/TransitionBetweenComponent"
import DynamicTransition from "./components/Build-In-Transition/DynamicTransition"
import AnimateStateWithWatcher from "./components/Build-In-Transition/AnimateStateWithWatcher"
import ListTransition from "./components/Build-In-Transition/ListTransition"


Vue.component("single-elementComponent", SingleElementComponent);
Vue.component("transition-component", TransitionComponent);
Vue.component("css-transition", CSSTransition);
Vue.component("css-animation", CSSAnimation);
Vue.component("custom-transitionClasses", CustomTransitionClasses);
Vue.component("javaScript-transition", JavaScriptHookTransition);
Vue.component("transition-modes", TransitionModes);
Vue.component("transition-betweenComponent", TransitionBetweenComponent);
Vue.component("dynamic-transition", DynamicTransition);
Vue.component("animate-stateWithWatcher", AnimateStateWithWatcher);
Vue.component("list-transition", ListTransition);


/* -------------- Router ------------------  */
import VueRouter from "vue-router";

/* ------------------- Name Route ------------------- */
import Home2Component from "./components/router/NameRoute/Home2Component";
import FooComponent from "./components/router/NameRoute/FooComponent";
import BarComponent from "./components/router/NameRoute/BarComponent";


/* ------------------- Named View ------------------- */
import TheFoo from "./components/router/NameView/TheFoo"
import TheBar from "./components/router/NameView/TheBar"
import TheBaz from "./components/router/NameView/TheBaz"

/* ------------------- Redirects View ------------------- */
import RBar from "./components/router/Redirect/RBar"
import RBaz from "./components/router/Redirect/RBaz"
import RDefault from "./components/router/Redirect/RDefault"
import RFoo from "./components/router/Redirect/RFoo"
import RFooBar from "./components/router/Redirect/RFooBar"
import RFoobar from "./components/router/Redirect/RFoobar"
import RHome from "./components/router/Redirect/RHome"
import RWithParams from "./components/router/Redirect/RWithParams"



/* ------------------- Passing Props Route ------------------- */
import  HelloComponent from "./components/router/PropsRoute/HelloComponent"

function dynamicPropsFn (route) {
  const now = new Date()
  return {
    name: (now.getFullYear() + parseInt(route.params.years)) + '!'
  }
}



Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  //Dynamic Route Matching 
  { 
    path:'/'
  },
  { 
    path:'/params/:foo/:bar'   // params are denoted with a colon ":"
  },
  { 
    path: '/optional-params/:foo?'  // a param can be made optional by adding "?"
  },
  { 
    path: '/params-with-regex/:id(\\d+)'  // a param can be followed by a regex pattern in parens
                                          // this route will only be matched if :id is all numbers
  },
  { 
    path: '/asterisk/*'   // asterisk can match anything
  },
  { 
    path: '/optional-group/(foo/)?bar' // make part of the path optional by wrapping with parens and add "?"
  }, 

  // Named Routes
  {
    name: "Home2",
    path: "/home",
    component: Home2Component,
  },
  {
    name: "Foo",
    path: "/foo",
    component: FooComponent,
  },
  {
    name: "Bar",
    path: "/bar",
    component: BarComponent,
  },


  // Named Views
   
  {
    path:'/all',
    components:{
      default:TheFoo,
      a:TheBar,
      b:TheBaz
    }
  },
  {
    path:'/other',
    components:{
      default:TheBaz,
      a:TheBar,
      b:TheFoo
    }
  },

  //Redirect

  { 
    path: '/', component: RHome,
      children: [
        { path: '', component: RDefault },
        { path: 'rfoo', component: RFoo },
        { path: 'rbar', component: RBar },
        { path: 'rbaz', name: 'rbaz', component: RBaz },
        { path: 'rwith-params/:id', component: RWithParams },
        // relative redirect to a sibling route
        { path: 'rrelative-redirect', redirect: 'rfoo' }
      ]
    },

    // absolute redirect
    { path: '/absolute-redirect', redirect: '/rbar' },

    // dynamic redirect, note that the target route `to` is available for the redirect function
    { path: '/dynamic-redirect/:id?',
      redirect: to => {
        const { hash, params, query } = to
        if (query.to === 'foo') {
          return { path: '/foo', query: null }
        }
        if (hash === '#baz') {
          return { name: 'baz', hash: '' }
        }
        if (params.id) {
          return '/with-params/:id'
        } else {
          return '/bar'
        }
      }
    },

    // named redirect
    { path: '/named-redirect', redirect: { name: 'rbaz' }},

    // redirect with params
    { path: '/redirect-with-params/:id', redirect: '/with-params/:id' },

    // redirect with caseSensitive
    { path: '/foobar', component: RFoobar, caseSensitive: true },

    // redirect with pathToRegexpOptions
    { path: '/FooBar', component: RFooBar, pathToRegexpOptions: { sensitive: true }},

    // catch all redirect
    { path: '*', redirect: '/' },

  
  //Props Route
  {
    path:"/hello",               // No props, no nothing , default props
    component:HelloComponent,
  },
  {
    path:"/hello/:name/:title",        // Pass route.params to props
    component:HelloComponent,
    props:true
  },
  {
    path:"/static",             // static values
    component:HelloComponent,
    props:{name:"world", title:"Multiple Prop"}
  },
  {
    path:"/dynamic/:years",     // custom logic for mapping between route and props
    component:HelloComponent,
    props: dynamicPropsFn
  },
  {
    path:"/attrs",     
    component:HelloComponent,
    props: {name:'attrs'}
  },

  {
    path:"/user",
    name:"user",
    component: () => import(/*WebpackChunkName:"User" */"./components/router/Global Before Guards/UserCom.vue"),
    meta:{requiresAuth :true}
  }

];

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   if(to.meta.requiresAuth){
//     //need to login
//   }else{
//     next();
//   }
// } );

const router = new VueRouter({
  mode: "history",
  // base:process.env.BASE_URL,
  routes,
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
