<script setup lang="ts">
</script>
<template>

  <ul class="ads-skeleton">
    <li v-for="index in 5" :key="index">

      <div class="item">
        <div class="card-img shine-line ">
          <span class="circle"></span>
        </div>
        <div class="details">
          <p class="shine-line card-title"></p>
          <p class="shine-line card-description-long"></p>
          <p class="shine-line card-description-medium"></p>
          <p class="shine-line card-description-short"></p>

          <p class="shine-line card-description-shorter margin-top-24 "></p>
          <p class="shine-line card-description-shorter"></p>
        </div>
      </div>
    </li>
  </ul>

</template>

<style scoped lang="scss">
.shine-line {
  background-image: linear-gradient(90deg, rgba(#fff, 0), rgba(#fff, 0.5), rgba(#fff, 0));
  background-size: 40px 100%;
  background-repeat: no-repeat;
  background-position: left -40px top 0;
  animation: shine-animation 1s ease infinite;
}

@keyframes shine-animation {
  to {
    background-position: right -40px top 0;
  }
}

.ads-skeleton {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  justify-content: space-between;
  list-style: none;
  max-width: var(--max-width);
  margin: 1.2rem auto 1rem;
  padding-bottom: .7rem;

  // @media (max-width: 1314px) {
  //   padding: 0 .6rem .7rem;
  // }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--border);
    border-radius: 10px;
  }

  li {
    padding: 0 .5rem;
    scroll-snap-align: start;

    &:first-child {
      padding-left: .5rem;
    }

    .item {
      position: relative;
      list-style-type: none;
      box-shadow: var(--shadow);
      border-radius: .8rem;
      background-color: var(--background);
      min-width: 260px;
      height: 100%;

      .card-img {
        height: 165px;
        min-width: 260px;
        position: relative;
        background-color: var(--card-background);
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;

        .circle {
          height: 75px;
          width: 75px;
          background-color: var(--text-soft);
          border-radius: 50%;
          display: inline-block;
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          margin-left: auto;
          margin-right: auto;
        }
      }

      .details {
        padding: 16px;

        .card-title {
          min-height: 18px;
          max-width: 180px;
          margin: 16px 0 20px;
          border-radius: 8px;
          background-color: var(--text-soft);
        }

        .card-description-long {
          min-height: 8px;
          max-width: 230px;
          border-radius: 8px;
          background-color: var(--text-soft);
        }

        .card-description-medium {
          margin-top: 8px;
          min-height: 8px;
          max-width: 200px;
          margin: 10px 0;
          border-radius: 8px;
          background-color: var(--text-soft);
        }

        .card-description-short {
          margin-top: 8px;
          border-radius: 8px;
          min-height: 8px;
          max-width: 160px;
          margin: 10px 0 36px;
          background-color: var(--text-soft);
        }

        .card-description-shorter {
          margin-top: 8px;
          min-height: 6px;
          max-width: 128px;
          margin: 10px 0;
          border-radius: 8px;
          background-color: var(--text-soft);

          &.margin-top-24 {
            margin-top: 24px;
          }
        }
      }
    }
  }
}
</style>