<script setup lang="ts">
import { ref } from 'vue';

const title = 'Dental Irrigator Guide for Bleeding Gums'
const description = 'The irrigator is very useful to reduce bleeding gums, since the jet penetrates the periodontal pockets and removes any remaining dirt.'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/tips/gum-bleed-care',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/tips/gum-bleed-care',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const steps = ref([
  'First brush your teeth using a soft-bristled toothbrush.',
  'Fill the reservoir with warm water (use hot water if you have very sensitive teeth).',
  'Select the lowest pressure level or, if applicable, the SOFT mode of the water flosser.',
  'Insert the nozzle to be used into the handle of the water flosser.',
  'Place the nozzle inside your mouth.',
  'Activate the jet, directing it towards the gum line above the teeth.',
  'For approximately 2 seconds, clean each tooth, slightly increasing the power of the jet to the normal level or level 3-4 at most.',
  'Rinse your mouth with a mouthwash that does not contain alcohol, to eliminate bacteria. Remember not to drink or eat anything for the next 30 minutes.'
])

const tips = ref([
  'Start using a soft-bristled toothbrush at least twice a day, ideally after meals.',
  'Stop smoking, as tobacco aggravates bleeding gums and can hide the causes of bleeding.',
  'Use gauze soaked in cold water to control bleeding frequency.',
  'Introduce vitamin K-rich foods like green leafy vegetables (cabbage, spinach, broccoli), meat, and fish.',
  'Visit your dentist if bleeding persists after several days of using the irrigator.',
  'Have braces adjusted if you wear them.',
  'Consult a specialist before using any specific mouthwash.'
])

const bleedingCauses = ref([
  'Accumulation of bacterial plaque on the gum line',
  'Bleeding disorders',
  'Hormonal changes during pregnancy',
  'Misuse of dental floss',
  'Brushing teeth too hard',
  'Using hard-bristled toothbrushes',
  'Poorly fitted dentures or dental appliances'
])
</script>

<template>
  <article class="blog-post">
    <h1>Dental Irrigator Guide for Bleeding Gums</h1>

    <section class="intro">
      <p>The irrigator is very useful to reduce bleeding gums, since the jet penetrates the periodontal pockets and removes any remaining dirt.</p>
    </section>

    <section class="causes">
      <h2>Why Do My Gums Bleed?</h2>
      <p>The main cause of bleeding gums is the accumulation of bacterial plaque on the gum line. If it is not removed in time, a hard plaque forms that accumulates bacteria, protecting them from any dental hygiene product, leading to a disease known as gingivitis or inflamed gums.</p>
      <p>If not removed, it will harden until it becomes tartar, which will increase bleeding, and the disease will become periodontitis, with which you could lose the tooth.</p>
      
      <div class="causes-list">
        <h3>Common Causes of Bleeding Gums:</h3>
        <ul>
          <li v-for="(cause, index) in bleedingCauses" :key="index">
            {{ cause }}
          </li>
        </ul>
      </div>
    </section>

    <section class="usage-guide">
      <h2>How to Use a Water Flosser to Reduce Bleeding Gums</h2>
      <p>The water flosser jet is not only more effective at removing plaque than a toothbrush, it also helps reduce, and in some cases eliminate, bleeding gums, as it penetrates deep into the gum, removing bacteria and food debris.</p>
      
      <div class="steps">
        <h3>Follow these steps:</h3>
        <ol>
          <li v-for="(step, index) in steps" :key="index">
            {{ step }}
          </li>
        </ol>
      </div>

      <div class="tip-box">
        <p>💡 <strong>Pro Tip:</strong> To improve the effect, add a little mouthwash to the water. For a 600ml tank, add 25ml of mouthwash (or 10-15ml for portable devices). Remember to clean the tank thoroughly after use.</p>
      </div>
    </section>

    <section class="troubleshooting">
      <h2>Why Do My Gums Bleed When I Use the Irrigator?</h2>
      <p>Bleeding during irrigator use can occur due to:</p>
      <ul>
        <li>Applying too much pressure</li>
        <li>Incorrect angle of the water jet</li>
        <li>Existing gingivitis or periodontitis</li>
      </ul>
      <p>To prevent this, use the irrigator at 90 degrees to the gums, start with low pressure and gradually increase, and move the tip gently along the gum line.</p>
    </section>

    <section class="prevention">
      <h2>Tips to Reduce Bleeding Gums</h2>
      <div class="tips-grid">
        <div v-for="(tip, index) in tips" :key="index" class="tip-card">
          {{ tip }}
        </div>
      </div>
    </section>

    <section class="conclusion">
      <h2>Go to Your Dentist for a Check-up</h2>
      <div class="warning-box">
        <p>⚠️ If bleeding persists, seek professional dental care immediately. Don't wait for tartar to form, as the damage may become irreversible. Always consult a specialist before using any new oral care products.</p>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
.blog-post {
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  padding: 7rem 1.25rem 2rem;

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
    font-size: 1.5rem;
    color: var(--heading);
    margin: 1.5rem 0 1rem;
  }

  p {
    font-size: 1.125rem;
  }

  section {
    margin-bottom: 3rem;
    padding: 0;
  }

  .intro {
    text-align: center;
    font-size: 1.25rem;
  }

  .causes {
    h2 {
      text-align: center;
      font-size: 1.5rem;
    }
  }

  .causes-list {
    background: var(--background-soft);
    padding: .8rem 1.5rem 1.5rem;
    border-radius: 8px;
    margin: 1rem 0;

    ul {
      list-style-type: disc;
      padding-left: 1.5rem;
      
      li {
        margin: 0.5rem 0;
        font-size: 1.125rem;
      }
    }
  }

  .steps {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1rem 0;

    ol {
      padding-left: 1.5rem;
      
      li {
        margin: 0.8rem 0;
        font-size: 1.25rem;
      }
    }
  }

  .tip-box {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    border-left: 4px solid var(--primary);
  }

  .tips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;

    .tip-card {
      background: var(--background-soft);
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      border-left: 4px solid #4caf50;
      font-size: 1.25rem;
      &:hover {
        transform: translateY(-2px);
        transition: transform 0.2s ease;
      }
    }
  }

  .troubleshooting {
    background-color: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1rem 0;

    ul {
      padding-left: 1.5rem;
      
      li {
        margin: 0.8rem 0;
        font-size: 1.25rem;
      }
    }
  }

  .warning-box {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    margin: 1.5rem 0;
    border-left: 4px solid #ff9800;
    font-size: 1.25rem;
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

    .tips-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>