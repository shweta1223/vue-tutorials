<template>
  <div class="container">

  <div class="column">
      <div class="thumbnail-container">
         <header>
          <slot name="image"></slot>
        </header>
      </div>
  </div>

  <div class="column">
    <div class="details">
      <h1>
          <slot name="title"></slot>
      </h1>

      <p class="price"><slot name="price"></slot></p>
      <p class="description"><slot name="description"></slot></p>



      <div class="container">

      <div class="product-links">
             <slot name="action"></slot>
          </div>

      </div>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name:"ProductDetailsCom",
        
    }
</script>

<style  scoped>

.container{
  display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    flex-direction: row;
    justify-content: space-around;
}
h1 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 5px;
}

.price {
  margin-bottom: 10px;
}

.wrapper {
  margin: 0 auto;
  width: 860px;
}

.columns {
  margin: 0 auto;
  max-width: 900px;
}

.details {
  position: relative;
  width: 100%;
  height: 100%;
  float: left;
}

.thumbnail-container {
  position: relative;
  width: 60%;
  height: 60%;
  float: left;
}

.price {
  font-size: 20px;
  color: #777474;
}

.wishlist-container {
  padding-left: 0;
}

#header {
  width: 100%;
  text-align: center;
  background: white;
  padding: 5px;
  /*box-shadow: 0 10px 17px 0px #c0c0c0;*/
  box-shadow: 0 5px 10px 0px #dbd7d7;
}
#header img {
  max-width: 30px;
}

.columns {
  margin-top: 30px;
}

.button {
  border-radius: 0;
  border: none;
  padding: 12px 12px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}

.select, select {
  width: 100%;
  border-radius: 0 !important;
}

#wishlist-container {
  padding-left: 0;
}

#buy-container {
  padding-right: 0;
}

.small-text {
  font-size: 14px;
}

.small-text span {
  font-weight: bold;
}
 
.buy-button {
  background: #ff6900;
  color: white;
  border: none;
}

.buy-button:hover, .buy-button:active, .buy-button:focus {
  color: white;
  opacity: 0.9;
}

a {
  color: #ff6900;
}
a:hover {
  color: #ff6900;
  opacity: 0.8;
}

@media only screen and (max-width: 769px) {

  #wishlist-container, #buy-container {
    padding: 0 0 15px 0;
  }
}
</style>