<template>
  <div class="home">
    <h1 class="c-cat-title">Catalogus</h1>
    <div>
      <div class="c-cat-list__container">
        <div class="c-cat-item__container">
          <img src="/img/plants/aloe.png" alt />
          <h2 class="c-cat-item__title">Aloe</h2>
          <p class="c-cat-item__price">€ 29.00</p>
        </div>
        <div class="c-cat-item__container">
          <img src="/img/plants/pachira.png" alt />
          <h2 class="c-cat-item__title">Pachira</h2> 
          <p class="c-cat-item__price">€ 42.00</p>
        </div>
        <div class="c-cat-item__container">
          <a href="/sceneviewer" class="c-cat-item__link">
          <img src="/img/plants/ceita.png" alt />
          <h2 class="c-cat-item__title">Yucca</h2> 
          <p class="c-cat-item__price">€ 35.00</p>
          </a>
        </div>
        <div class="c-cat-item__container">
          <img src="/img/plants/sanseveria.png" alt />
          <h2 class="c-cat-item__title">Sanseveria</h2> 
          <p class="c-cat-item__price">€ 38.00</p>
        </div>
        <div class="c-cat-item__container">
          <img src="/img/plants/pachira.png" alt />
          <h2 class="c-cat-item__title">Pachira</h2> 
          <p class="c-cat-item__price">€ 42.00</p>
        </div>
      </div>
    </div>
  </div>
</template>
 
<style lang="scss" scoped>
.home{
    flex-grow: 1;
}
.c-cat-title {
  text-align: left;
  margin: var(--gutter-2) 0 0 var(--gutter-3);

}
.c-cat-list__container {
  display: flex;
  flex-wrap: wrap;
}
.c-cat-item__container {
  width: calc(50% - 36px);
  margin: var(--gutter-3) 24px 0;
}
.c-cat-item__container:nth-child(2n) {
  margin-left: 0px;
}

.c-cat-item__title {
  font-size: 18px;
  text-align: left;
  margin-top: var(--gutter);
}

.c-cat-item__price {
  font-size: 14px;
  text-align: left;
  margin-top: var(--gutter-half);
}
.c-cat-item__link{
  text-decoration: none;
  color: var(--font-color-primary);
}
</style>

<script>

export default {
  name: "home"
};
</script>
