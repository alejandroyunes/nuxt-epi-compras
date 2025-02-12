<script setup lang="ts">
import { ref } from 'vue'

const title = 'How to Use a Dental Irrigator with Braces?'
const description = 'Using a dental irrigator with braces is beneficial and widely recommended by dentists.'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/tips/braces-guide',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/tips/braces-guide',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const preCleaningSteps = ref([
  'Clean braces with an orthodontic toothbrush',
  'Use fluoride toothpaste to prevent tartar buildup',
  'Brush using up-and-down movements',
  'Save mouthwash for after irrigator use'
])

const mainSteps = ref([
  {
    title: 'Fill the tank',
    content: 'Use warm water for comfortable cleaning'
  },
  {
    title: 'Attach orthodontic tip',
    content: 'Place the orthodontic tip on the handle with light pressure until it clicks'
  },
  {
    title: 'Select pressure',
    content: 'Start with the lowest pressure and gradually increase as needed'
  },
  {
    title: 'Position properly',
    content: 'Lean over sink and place tip in mouth without touching teeth'
  },
  {
    title: 'Begin cleaning',
    content: 'Press ON and clean with lips slightly closed to prevent splashing'
  },
  {
    title: 'Clean systematically',
    content: 'Point jet at gum line first, then move down to clean entire tooth'
  }
])

const tips = ref([
  {
    title: 'Use Standard Nozzle First',
    content: 'Start with the standard nozzle for powerful cleaning of debris between teeth and braces'
  },
  {
    title: 'Pain Management',
    content: 'Use low pressure (levels 1-3) or SOFT/Pulse mode with warm water to massage sore areas'
  },
  {
    title: 'Water Temperature',
    content: 'Always use warm water to avoid discomfort. Hot water can be used with lowest power for sensitivity'
  },
  {
    title: 'Mouthwash Usage',
    content: 'Avoid mixing mouthwash with irrigator water regularly. Use mouthwash separately after irrigation'
  },
  {
    title: 'Cleaning Frequency',
    content: 'Clean twice daily, limiting contact to 2 seconds per tooth area'
  }
])

const dentalVisits = ref([
  'Visit if pain persists after several days',
  'Get braces adjusted if loose',
  'Seek advice on proper cleaning techniques',
  'Get recommendations for suitable irrigator models'
])
</script>

<template>
  <article class="blog-post">
    <h1>How to Use a Dental Irrigator with Braces?</h1>

    <section class="intro">
      <p>Using a dental irrigator with braces is beneficial and widely recommended by dentists. This guide will help you
        use your irrigator effectively with your orthodontic appliances.</p>
    </section>

    <section class="pre-cleaning">
      <h2>Pre-cleaning Your Braces</h2>
      <div class="steps-list">
        <div v-for="(step, index) in preCleaningSteps" :key="index" class="step-item">
          <div class="step-number">{{ index + 1 }}</div>
          <p>{{ step }}</p>
        </div>
      </div>
    </section>

    <section class="main-steps">
      <h2>Step-by-Step Guide</h2>
      <div class="steps-grid">
        <div v-for="(step, index) in mainSteps" :key="index" class="step-card">
          <div class="step-header">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
          </div>
          <p>{{ step.content }}</p>
        </div>
      </div>
    </section>

    <section class="cleaning-note">
      <div class="note-box">
        <h3>Important Cleaning Note</h3>
        <p>Clean the periodontal pocket (line between tooth and gum) first, then clean around the bracket to prevent
          trapped debris. Never keep the water jet on one spot for more than 2 seconds, and remember to pause
          occasionally to spit out accumulated water.</p>
      </div>
    </section>

    <section class="tips">
      <h2>Pro Tips for Braces Cleaning</h2>
      <div class="tips-grid">
        <div v-for="(tip, index) in tips" :key="index" class="tip-card">
          <h3>{{ tip.title }}</h3>
          <p>{{ tip.content }}</p>
        </div>
      </div>
    </section>

    <section class="dental-visits">
      <h2>When to Visit Your Dentist</h2>
      <div class="visits-box">
        <ul>
          <li v-for="(visit, index) in dentalVisits" :key="index">
            {{ visit }}
          </li>
        </ul>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.blog-post {
  max-width: 1200px;
  margin: 0 auto;
  line-height: 1.6;
  padding: 7rem 0 2rem;


  h1 {
    font-size: 2.5rem;
    color: var(--heading);
    margin-bottom: 1.5rem;
    text-align: center;
  }

  h2 {
    font-size: 1.8rem;
    color: var(--heading);
    margin: 2rem 0 1rem;
    text-align: center;
  }

  section {
    margin-bottom: 3rem;
  }

  .intro {
    font-size: 1.2rem;
    color: var(--text);
    text-align: center;
    margin-bottom: 2rem;
  }

  .steps-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .step-item {
      display: flex;
      align-items: center;
      gap: 1rem;
      background: var(--background-soft);
      padding: 1rem;
      border-radius: 8px;

      .step-number {
        background: var(--primary);
        color: var(--white);
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
      }

      p {
        margin: 0;
        font-size: 1.125rem;
      }
    }
  }

  .steps-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;

    .step-card {
      background: var(--background-soft);
      padding: 1.2rem;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-left: 4px solid var(--primary);

      .step-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1rem;

        .step-number {
          background: var(--primary);
          color: var(--white);
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        h3 {
          margin: 0;
          color: var(--heading);
          font-size: 1.5rem;
        }
      }

      p {
        margin: 0;
        color: var(--text);
        font-size: 1.125rem;

      }
    }
  }

  .note-box {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--warning);

    h3 {
      color: var(--heading);
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    p {
      margin: 0;
      color: var(--text);
      font-size: 1.125rem;
    }
  }

  .tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;

    .tip-card {
      background: var(--background-soft);
      padding: 1.5rem;
      border-radius: 12px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      h3 {
        color: var(--heading);
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
        border-bottom: 2px solid var(--primary);
        padding-bottom: 0.5rem;
      }

      p {
        margin: 0;
        color: var(--text);
        font-size: 1.125rem;
      }

      &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
      }
    }
  }

  .visits-box {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--success);

    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 0;
        color: var(--text);
        font-size: 1.125rem;
        position: relative;
        padding-left: 1.5rem;

        &:before {
          content: "•";
          color: var(--success);
          font-weight: bold;
          position: absolute;
          left: 0;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .blog-post {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    .steps-grid,
    .tips-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>