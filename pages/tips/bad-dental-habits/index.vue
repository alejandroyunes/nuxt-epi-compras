<script setup lang="ts">
import { ref } from 'vue'

const title = '5 Bad Dental Habits to Avoid'
const description = 'Your dental health is crucial, and avoiding these common bad habits can make a significant difference in maintaining a healthy smile.'

useSeoMeta({
  title: title,
  description: description,
  ogSiteName: 'https://dental-irrigator.net/tips/bad-dental-habits',
  ogTitle: title,
  ogDescription: description,
  ogImage: '/open-graph.webp',
  ogUrl: 'https://dental-irrigator.net/tips/bad-dental-habits',
  ogLocale: 'en_US',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/open-graph.webp',
  twitterCard: 'summary_large_image',
})


const habits = ref([
  {
    title: 'Bad Eating Habits',
    content: `When eating popcorn, quickly chewing the hard kernels of corn that were left unbroken can cause fractures and microcracks in the teeth, weakening them. Similarly, chewing ice or hard things can be damaging.

Sugary soft drinks are highly harmful because they damage the enamel and increase the risk of cavities.

Instead, try eating healthier snacks like carrots or apples, which are not only nutritious but also help clean teeth. While some recommend using a straw for sugary drinks to reduce contact with teeth, it's better to avoid these drinks altogether.

It's advisable to brush your teeth and clean them with a Water Flosser after every meal for better oral hygiene.`
  },
  {
    title: 'Using Teeth as Tools',
    content: `Using teeth as instruments to open packages, break seals, or tear off labels is a harmful practice. These improper uses can cause serious damage, such as fractures or even tooth loss. Remember that teeth are designed to chew food, not to function as tools.`
  },
  {
    title: 'Grinding Teeth and its Consequences',
    content: `Bruxism, or teeth grinding, is a common problem usually caused by stress, anxiety, or an abnormal bite. This often unconscious habit causes excessive wear on teeth and can lead to jaw problems and headaches.

To address this problem:
- Wear a night guard to relieve pressure and prevent tooth wear
- Adopt stress reduction strategies like relaxation techniques or meditation
- Reduce caffeine consumption
- Avoid chewing non-food objects
- Place the tip of the tongue between teeth to prevent involuntary grinding
- Apply a warm towel to the jaw to relax muscles`
  },
  {
    title: 'Incorrect Use of Toothbrushes',
    content: `Using a hard-bristle toothbrush might seem like it cleans better, but it can actually damage your gums and make teeth sensitive.

Choose a toothbrush with soft or medium bristles and consult your dentist about the most suitable type for your needs.

Brushing should be gentle and cover all surfaces of your teeth, including the gum line and hard-to-reach areas. An electric toothbrush can be excellent, as many models feature pressure sensors that prevent aggressive brushing.`
  },
  {
    title: 'Poor Oral Hygiene',
    content: `Neglecting your oral hygiene routine is a serious mistake. It's essential to:
- Brush at least twice a day
- Change your toothbrush or electric toothbrush head every three or four months
- Use a dental irrigator daily to remove food debris and plaque between teeth
- Use appropriate mouthwash

Mouthwashes play an important role:
- Antiseptics help eliminate bacteria and prevent bad breath
- Fluoride rinses strengthen enamel and help prevent tooth decay

Choose a mouthwash suited to your specific needs and use it as a complement to brushing and flossing, not as a substitute.`
  }
])
</script>

<template>
  <article class="blog-post">
    <h1>5 Bad Dental Habits to Avoid</h1>
    
    <section class="intro">
      <p>Your dental health is crucial, and avoiding these common bad habits can make a significant difference in maintaining a healthy smile.</p>
    </section>

    <section class="habits">
      <div v-for="(habit, index) in habits" :key="index" class="habit-card">
        <div class="habit-number">{{ index + 1 }}</div>
        <div class="habit-content">
          <h2>{{ habit.title }}</h2>
          <div class="habit-text" v-html="habit.content.replace(/\n\n/g, '<br><br>')"></div>
        </div>
      </div>
    </section>

    <section class="conclusion">
      <div class="conclusion-box">
        <h2>Take Care of Your Smile!</h2>
        <p>Avoiding these bad habits can make a big difference in your dental health. Remember to maintain good oral hygiene practices and visit your dentist regularly for check-ups.</p>
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

  section {
    margin-bottom: 3rem;
  }

  .intro {
    font-size: 1.2rem;
    color: var(--text);
    text-align: center;
    margin-bottom: 2rem;
  }

  .habits {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .habit-card {
      display: flex;
      gap: 1.5rem;
      background: var(--background-soft);
      padding: 2rem;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: transform 0.2s ease;

      &:hover {
        transform: translateY(-2px);
      }

      .habit-number {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 40px;
        height: 40px;
        background: var(--danger);
        color: var(--white);
        border-radius: 50%;
        font-weight: bold;
        font-size: 1.2rem;
        padding: 8px;
      }

      .habit-content {
        flex: 1;

        h2 {
          color: var(--heading);
          font-size: 1.5rem;
          margin-bottom: 1rem;
          border-bottom: 2px solid var(--danger);
          padding-bottom: 0.5rem;
        }

        .habit-text {
          color: var(--text);
          font-size: 1.125rem;
        }
      }
    }
  }

  .conclusion {
    margin-top: 3rem;

    .conclusion-box {
      background: var(--background-soft);
      padding: 2rem;
      border-radius: 12px;
      border-left: 4px solid var(--success);
      text-align: center;

      h2 {
        color: var(--heading);
        font-size: 1.8rem;
        margin-bottom: 1rem;
      }

      p {
        color: var(--text);
        font-size: 1.125rem;
      }
    }
  }
}

@media (max-width: 768px) {
  .blog-post {
    
    h1 {
      font-size: 2rem;
    }

    .habits {
      .habit-card {
        flex-direction: column;
        padding: 1.5rem;

        .habit-number {
          margin: 0 auto;
        }

        .habit-content {
          h2 {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>