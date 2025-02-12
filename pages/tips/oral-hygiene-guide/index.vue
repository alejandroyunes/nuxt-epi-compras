<script setup lang="ts">
import { ref } from 'vue'
import FoodList from './FoodList.vue'
import TipsList from './TipsList.vue'

const title = 'The three key elements for a good hygiene routine'
const description = 'Maintaining good oral hygiene is essential for overall health, and an effective daily routine is key to achieving it.'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/tips/oral-hygiene-guide',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/tips/oral-hygiene-guide',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})

const keyElements = ref([
  {
    title: 'Effective Brushing',
    content: 'For effective brushing, it is recommended to brush your teeth at least twice a day for two minutes. Use an appropriate size of fluoride toothpaste and brush at a 45-degree angle towards the gum line, using gentle, circular movements. It is important to choose a soft-bristled toothbrush and change it every three to four months.'
  },
  {
    title: 'Using an Oral Irrigator',
    content: 'The dental irrigator, also known as a hydropulsor, is an effective tool for cleaning between teeth and below the gum line. It uses a pressurized stream of water to remove food debris and plaque in areas where the toothbrush cannot reach. It is especially helpful for people with braces, implants, crowns or bridges.'
  },
  {
    title: 'Mouthwash',
    content: 'Antibacterial and fluoride mouthwashes are great additions to daily cleaning. They help reduce plaque, prevent cavities and freshen breath. Follow the directions on the label and avoid rinsing with water immediately afterward to maximize its benefits.'
  }
])

const healthyFoods = ref([
  { name: 'Milk', description: 'It is a very important source of calcium, the mineral responsible for strengthening our bones, including teeth.' },
  { name: 'Cheese', description: 'A food produced using dairy products, which helps strengthen teeth due to its calcium and phosphate content. In addition, it contains a protein called casein, which helps stabilize and repair enamel.' },
  { name: 'Apple', description: 'As we have said before, it serves to clean the surface of the teeth and helps produce more saliva, preventing dry mouth.' },
  { name: 'Carrots', description: 'When chewed raw, they strengthen teeth and keep them clean, preventing the formation of bacteria and dental plaque. As if that were not enough, they are rich in fiber, which helps produce more saliva to protect the mucous membranes and regulate the pH of the mouth.' },
  { name: 'Salmon', description: 'Food rich in omega-3 and vitamin D, helping the body absorb calcium.' },
  { name: 'Blue fish', description: 'Fish that belong to the "blue" category, such as tuna, trout, anchovy or horse mackerel are rich in vitamin D, which facilitates the absorption of calcium and phosphorus from other foods.' },
  { name: 'Eggs', description: 'A food very rich in phosphorus and vitamin D, which are essential for the absorption of calcium to strengthen teeth. It also contributes to the formation of enamel.' },
  { name: 'Orange', description: 'This is a food that should not be abused for oral care. However, it is a source of calcium, vitamin C and D, helping to eliminate harmful bacteria, preventing the formation of plaque and cavities. Remember; As it is an acidic food, after a few minutes rinse your mouth with water.' },
  { name: 'Nuts', description: 'Especially cashews, almonds and walnuts are a very important source of calcium and minerals. If you are going to eat hard nuts, crush or grind them so that they are not difficult to chew and thus not damage your teeth. Avoid those that are toasted or fried.' },
  { name: 'Kiwi', description: 'This fruit is very rich in vitamin C, which helps maintain collagen in the gums and prevents the appearance of periodontal diseases.' },
  { name: 'Strawberries', description: 'This is a food that contains xylitol, a natural sweetener that is similar to sugar, but less harmful to your oral health.' },
  { name: 'Green leafy vegetables', description: 'All green leafy vegetables are very rich in fiber and easy to chew, having a purifying and mouth-cleaning effect.' },
  { name: 'Celery', description: 'Very rich in malic acid, which promotes saliva production, removes stains and keeps teeth clean.' },
  { name: 'Blueberries', description: 'Due to their components, they help keep gums healthy, fighting periodontal diseases such as gingivitis or periodontitis.' },
  { name: 'Dark chocolate', description: 'Chocolates with a high percentage of cocoa, at least 80%, are rich in theobromine, a substance that strengthens tooth enamel and protects teeth against bacteria responsible for cavities.' }
])

const tips = ref([
  {
    title: 'Eat licorice',
    content: 'According to this study, published in the British Dental Journal, some components of the dried licorice root help prevent cavities, tooth decay and gum disease. The nutritional properties of this plant help fight the bacteria that cause periodontitis, helping to prevent it.'
  },
  {
    title: 'Clean your teeth and gums with foods',
    content: 'Some foods are used to remove food residue that has been left between the teeth and gums, acting as a cleaner. An example of this is the apple. When you bite into it, it produces a cleaning effect that helps eliminate harmful agents from plaque, and its liquid penetrates between the gums, eliminating any residue that may be trapped.'
  },
  {
    title: 'Avoid alcohol and tobacco consumption',
    content: 'Prolonged consumption of alcoholic beverages and tobacco is not only harmful to the liver, lungs or our digestive system, but also to the oral cavity. These are substances that promote the appearance of infections, increasing irritation and inflammation of the gums. What\'s more, they are responsible for a multitude of diseases, such as throat cancer or dry mouth.'
  },
  {
    title: 'Reduce the consumption of acidic drinks',
    content: 'Acidic drinks are very harmful to the mouth, as they have a very high sugar content. What\'s more, it is customary to drink them cold, which makes them have an even more damaging effect on the mouth, as the damage is even greater. It is advisable to avoid them or, at least, moderate their consumption.'
  },
  {
    title: 'Be very careful with citrus foods',
    content: 'Citrus fruits have many nutritional properties for our health, however, their abuse is very harmful to the teeth. In fact, if you look for home or natural remedies, you will see that some recommend, for example, lemon juice. Nothing could be further from the truth, they can severely damage the teeth, so they must be consumed with great care, without abusing them.'
  }
])
</script>

<template>
  <article class="blog-post">
    <h1>Oral Hygiene Guide</h1>
    
    <p class="intro">
      Maintaining good oral hygiene is essential for overall health, and an effective daily routine is key to achieving it.
    </p>

    <section class="key-elements">
      <h2>The three key elements for a good hygiene routine</h2>
      <p>To keep your teeth and gums clean, it is very important to establish a daily hygiene routine, as we will explain below:</p>
      
      <div class="elements-grid">
        <div v-for="(element, index) in keyElements" :key="index" class="element-card">
          <h3>{{ element.title }}</h3>
          <p>{{ element.content }}</p>
        </div>
      </div>
    </section>

    <section class="tips">
      <h2>Tips for tooth and gum care</h2>
      <p>Having a good oral hygiene routine is very important, but you should also eliminate certain foods from your diet and try to reduce, although it would be better to eliminate, the consumption of products that are harmful to your teeth.</p>
      <TipsList :tips="tips" />
    </section>

    <section class="food-choice">
      <h2>Food Choice</h2>
      <p>In addition to routine, we can also be careful with the foods we eat, after all, before reaching the stomach, they pass through the teeth.</p>
      <p>Food choice plays an important role in oral health. It is advisable to limit sugars and starches and opt for healthier foods such as:</p>
      <FoodList :foods="healthyFoods" />
    </section>

    <section class="checkups">
      <h2>Regular Dental Checkups and Disease Prevention</h2>
      <div class="checkup-content">
        <p>Visit your dentist regularly for checkups and professional cleanings. During these visits, problems like cavities and gum disease can be detected in their early stages. Staying informed about oral care best practices and the latest recommendations can be a huge benefit to your oral health. Ask about dental sealants, which can offer an extra protective layer against cavities.</p>
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

  p {
    font-size: 1.25rem;
  }

  .intro {
    font-size: 1.2rem;
    color: var(--text);
    margin-bottom: 2rem;
    text-align: center;
  }

  .key-elements {
    text-align: center;
  }

  .elements-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
  }

  .element-card {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: var(--shadow);

    h3 {
      color: var(--heading);
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    p {
      color: var(--text);
    }
  }

  .tips {
    h2 {
      text-align: center;
      font-size: 1.8rem;

    }
    p {
      font-size: 1.25rem;
      text-align: center;
    }
  }

  .food-choice {
    h2 {
      text-align: center;
      font-size: 1.8rem;

    }
    p {
      font-size: 1.25rem;
      text-align: center;
    }
  }

  section {
    margin-bottom: 3rem;
  }

  .checkup-content {
    background: var(--background-soft);
    padding: 1.5rem;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    border-left: 4px solid var(--primary);

    p {
      margin: 0;
      color: var(--text);
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

    .elements-grid {
      grid-template-columns: 1fr;
    }
  }
}
</style>