<script setup lang="ts">
</script>
<template>

  <section class="ads-skeleton">
    <ul>
      <li v-for="index in 5" :key="index">

        <div class="li-container">
          <div class="li-item">
            <div class="shine-line card-img">
              <span class="circle"></span>
            </div>
            <div class="ads-info-inner">
              <p class="shine-line card-title"></p>
              <p class="shine-line card-description-long"></p>
              <p class="shine-line card-description-medium"></p>
              <p class="shine-line card-description-short"></p>

              <p class="shine-line card-description-shorter margin-top-24 "></p>
              <p class="shine-line card-description-shorter"></p>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </section>

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

  @media (max-width: 1290px) {
    padding: 0 .6rem .7rem;
  }

  ul {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
    list-style: none;
    overflow-x: scroll;
    overflow-y: hidden;
    scroll-snap-type: x mandatory;
    margin: 0 auto;
    max-width: var(--max-width);

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
      display: block;
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--border);
      border-radius: 10px;
    }

    li {
      .li-container {
        scroll-snap-align: start;
      }

      .li-item {
        position: relative;
        margin-left: 5px;
        margin-right: 16px;
        list-style-type: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        border-bottom-left-radius: 12px;
        border-bottom-right-radius: 12px;
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

        .ads-info-inner {
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
}
</style>