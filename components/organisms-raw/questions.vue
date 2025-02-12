<script setup lang="ts">
import { ref } from 'vue'
import ChevronDownSvg from '~/components/icons/arrows/chevron/ChevronDownSvg.vue'
import ChevronUpSvg from '~/components/icons/arrows/chevron/ChevronUpSvg.vue'

interface FAQ {
  question: string
  answer: string
  link?: string
}

const questions = ref<FAQ[]>([
  {
    question: 'How to use the Dental Irrigator?',
    answer: 'The most important thing is to lean over the sink before starting to shoot the stream of water onto the teeth. We have written a step-by-step User Guide that will assist you with the process.',
    link: '/tips/how-to-use'
  },
  {
    question: 'What should I pay attention to when comparing them?',
    answer: "Pay attention to the power, the number of replaceable nozzles, the battery life (if it's a travel model), the water tank capacity, and the reviews from other buyers.",
  },
  {
    question: 'How many times a day can the oral irrigator be used?',
    answer: "It is advisable to use it after each meal to ensure the removal of any remaining food and dirt that may be left on the teeth.",
  },
  {
    question: 'Can a dental irrigator help eliminate stains on the teeth?',
    answer: 'It can be effective in removing small stains caused by food, aiding in teeth whitening. However, keep in mind that it may not eliminate stains from coffee or tobacco. It will reduce them but not make them disappear completely.',
  },
  {
    question: 'If I have fillings or implants, what type of dental irrigator should I choose?',
    answer: 'Choose one that does not have too much power, as a too powerful stream could weaken the filling. For use with implants, we recommend a model specifically designed for that purpose.',
  },
  {
    question: 'Is it important for the oral irrigator to have many accessories?',
    answer: "When buying an oral irrigator, don't focus on the number of accessories it comes with, but rather on the use you intend for it. The greater the number of accessories, the higher the price will be.",
  },
  {
    question: 'Is there any alternative to dental irrigators?',
    answer: 'The only existing alternative is to visit the dentist, who can use a professional oral irrigator. This will provide a deeper cleaning but will involve a higher cost for your budget.',
  },
  {
    question: 'What are the risks of using a dental irrigator?',
    answer: 'The main risk is thinking that it is a tool that can be used as the sole cleaning instrument. If we neglect brushing, we will be engaging in improper oral hygiene because dental irrigators should be used as a complement to other cleaning methods. If you are interested in knowing the contraindications it may have, follow the link below.',
  }
])

</script>

<template>
  <section class="questions-and-answers-container">
    <details v-for="(item, index) in questions" :key="index" open>
      <summary>

        <div class='summary-title'>
          <h2>{{ item.question }}</h2>
        </div>

        <div class='summary-chevron-up'>
          <ChevronUpSvg />
        </div>
      </summary>

      <div class='summary-content'>
        <p>{{ item.answer }}</p>
        <NuxtLink v-if="item.link" :to="item.link" class="link">read more</NuxtLink>
      </div>

      <div class='summary-chevron-down'>
        <ChevronDownSvg />
      </div>
    </details>
  </section>
</template>

<style lang="scss" scoped>
.questions-and-answers-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px;
  margin-top: 40px;

  details summary::-webkit-details-marker {
    display:none;
  }

  details > summary {
    list-style: none;
  }

  details {
    font-size: 1.2rem;
    box-shadow: var(--shadow-card);
    width: 100%;
    border-radius: 8px;
    position: relative;
    max-width: 800px;
    margin: 8px 0;
    padding: 10px;
    border: 1px solid var(--border);
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: var(--shadow-hover);
      cursor: pointer;
    }

    summary {
      font-size: 1.2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: background-color 0.3s ease, color 0.3s ease;
      list-style: none;
      padding: 8px;

      &:focus {
        outline: none;
      }

      summary::-webkit-details-marker {
        display: none;
      }

      .summary-title {
        user-select: none;
        padding-right: 12px;
        color: var(--primary);

        @media (max-width: 900px) {
          font-size: 0.9rem;
          margin-right: 24px;
        }
      }

      &:hover {
        background-color: var(--light-hover);
        color: var(--hover-primary);
      }
    }

    .summary-content {
      overflow: hidden;
      opacity: 0;
      border-top: 1px solid var(--border);
      cursor: default;
      padding: 8px;
      line-height: 1.5;
      color: var(--heading);
      max-height: 0;
      transform: scaleY(0.95);
      transform-origin: top;
      transition: max-height 0.4s ease, opacity 0.3s ease, transform 0.4s ease;

      .link {
        color: var(--primary);
        text-decoration: underline;
        cursor: pointer;
        font-weight: bold;
      }
    }

    &[open] .summary-content {
      max-height: 500px;
      opacity: 1;
      transform: scaleY(1);
    }

    .summary-chevron-up,
    .summary-chevron-down {
      pointer-events: none;
      position: absolute;
      top: 1.5em;
      right: 1em;
      background-color: var(--primary);
      color: var(--white);
      transition: transform 0.3s ease;

      svg {
        display: block;
      }
    }
  }
}
</style>