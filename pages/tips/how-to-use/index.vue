<script setup lang="ts">
import { ref } from 'vue'

const title = 'How to Use a Dental Irrigator?'
const description = 'This guide shows the correct procedure to follow to effectively use a dental irrigator.'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/tips/how-to-use',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/tips/how-to-use',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const setupSteps = ref([
  {
    title: 'Connect or charge the irrigator',
    content: 'The first thing after taking it out of the box is to connect the irrigator to a power source, in the case of a desktop model, or charge it for about 4-5 hours if it is a cordless irrigator. Faucet irrigators do not need to be charged, you will only have to install the filter on the faucet to be able to connect the tube.'
  },
  {
    title: 'Fill the tank',
    content: 'Fill the tank using warm water. The reason? Pressurized water can be very annoying, if cold or hot water is used it can produce a very unpleasant sensation during cleaning.'
  },
  {
    title: 'Choose the nozzle',
    content: 'Select the appropriate nozzle for your needs.'
  },
  {
    title: 'Remove the air from the irrigator tubes',
    content: 'Select the maximum pressure level and press the irrigator button to remove the air from the tubes. Otherwise, the first time you use it, even if you have selected the lowest level, the pressure of the jet can be very strong.'
  },
  {
    title: 'Get into position',
    content: 'Lean over the sink, to avoid the jet or splashes falling to the floor, and place the irrigator with the tip pointing down in your mouth.'
  },
  {
    title: 'Select the pressure level',
    content: 'For tabletop irrigators, you can choose the level by turning a wheel. For cordless models, you will have to press a button choosing from level 1 to 5.'
  },
  {
    title: 'Choose the mode of use',
    content: 'Tabletop irrigators have a wheel to choose which mode to use. Portable irrigators have a second button (in smaller models it is the same power button) to choose between three modes.'
  },
  {
    title: 'Turn on the irrigator',
    content: 'Press the ON button or, if applicable, the power button to start the irrigator.'
  },
  {
    title: 'Perform the cleaning',
    content: 'Direct the water jet along the line that the gums draw on the tooth, covering the top of the tooth, the base of the gum, and all the interdental spaces. The jet should come into contact with each tooth for approximately 2 seconds.'
  },
  {
    title: 'Turn off the irrigator and empty the tank',
    content: 'Turn it off and empty the tank after each use. Leaving water in the tank could generate germs and toxins, which contaminate the container and reduce the effectiveness of the device.'
  }
])

const nozzleTypes = ref([
  {
    name: 'Standard',
    description: 'Used to clean teeth and remove food debris from between teeth.'
  },
  {
    name: 'Pick Pocket',
    description: 'Used for gum care after periodontal treatment. Due to its design, it helps to better reach the gums, periodontal pockets or around implants.'
  },
  {
    name: 'Orthodontic',
    description: 'It is specially designed to clean between the metal filaments of dental appliances or brackets, thanks to its filaments at the tip.'
  },
  {
    name: 'Plaque',
    description: 'At the tip it has three tufts of bristles that help to gently remove plaque around implants, bridges or crowns.'
  },
  {
    name: 'Periodontal',
    description: 'It shoots a jet through its rubber tip that helps to clean the affected area, avoiding damaging sensitive areas of the mouth.'
  },
  {
    name: 'Oxyjet',
    description: 'These are exclusive to the Oral-B brand, projecting microbubbles that improve cleaning while reducing the feeling of discomfort. It also serves to massage the gums.'
  },
  {
    name: 'Tongue',
    description: 'It has a flat shape and is used to remove the white spot on the tongue, removing all the toxins and germs from it.'
  }
])

const tips = ref([
  'The irrigator is not a substitute for the toothbrush: Always use it after brushing, so that it is more effective.',
  'Never overuse the irrigator: Experts recommend not using the irrigator for more than 5 minutes every 2 hours, to avoid damaging your teeth.',
  'Detection of wounds or canker sores: If you have a wound or canker sore in your mouth or tongue, you should not use an irrigator.',
  'Irrigator maintenance: Clean the reservoir after each use to avoid bacteria, and store the nozzle in its compartment.',
  'Flossing: If you\'re going to floss, always do it after using the irrigator.',
  'Cleaning the dental irrigator: Clean the device at least twice a month.'
])
</script>

<template>
  <article class="blog-post">
    <h1>How to Use a Dental Irrigator?</h1>

    <section class="intro">
      <p>This guide shows the correct procedure to follow to effectively use a dental irrigator.</p>
    </section>

    <section class="setup-steps">
      <h2>Step-by-Step Guide</h2>
      <div class="steps-container">
        <div v-for="(step, index) in setupSteps" :key="index" class="step-card">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-content">
            <h3>{{ step.title }}</h3>
            <p>{{ step.content }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="nozzle-types">
      <h2>Types of Nozzles</h2>
      <div class="nozzle-grid">
        <div v-for="nozzle in nozzleTypes" :key="nozzle.name" class="nozzle-card">
          <h3>{{ nozzle.name }}</h3>
          <p>{{ nozzle.description }}</p>
        </div>
      </div>
    </section>

    <section class="usage-tips">
      <h2>Important Tips</h2>
      <div class="tips-container">
        <div v-for="(tip, index) in tips" :key="index" class="tip-card">
          <p>
            {{ tip }}
          </p>
        </div>
      </div>
    </section>

    <section class="dental-checkup">
      <h2>Regular Dental Check-ups</h2>
      <div class="checkup-box">
        <p>Make an appointment for a check-up at least once a year. The irrigator helps reduce dental plaque and reach
          corners of your mouth that you couldn't reach with a toothbrush or dental floss.</p>
        <p>If you notice discomfort or excessive dental sensitivity despite using the lowest power, visit your dentist
          to check your gums and prevent periodontitis or gingivitis.</p>
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

  h3 {
    font-size: 1.4rem;
    color: var(--heading);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.125rem;
  }

  section {
    margin-bottom: 3rem;
  }

  .intro {
    p {
      text-align: center;
    }
  }

  .steps-container {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    .step-card {
      display: flex;
      gap: 1rem;
      background: var(--background-soft);
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

      .step-number {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 40px;
        background: var(--primary);
        color: var(--white);
        border-radius: 50%;
        font-weight: bold;
      }

      .step-content {
        flex: 1;
      }

      &:hover {
        transform: translateX(5px);
        transition: transform 0.2s ease;
      }
    }
  }

  .nozzle-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;

    .nozzle-card {
      background: var(--background-soft);
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-left: 4px solid var(--primary);

      h3 {
        color: var(--heading);
        margin-bottom: 0.5rem;
      }

      &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
      }
    }
  }

  .tips-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;

    .tip-card {
      background: var(--background-soft);
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-left: 4px solid var(--primary);

      &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
      }
    }
  }

  .checkup-box {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    border-left: 4px solid var(--warning);

    p {
      margin: 0.5rem 0;

      &:first-child {
        margin-top: 0;
      }

      &:last-child {
        margin-bottom: 0;
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

    .nozzle-grid,
    .tips-container {
      grid-template-columns: 1fr;
    }
  }
}
</style>