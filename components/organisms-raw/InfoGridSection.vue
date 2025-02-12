<script setup>
const products = [
  {
    name: 'Waterpik Cordless Advanced, WP-580, 7oz',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700995936/Best/SingleBests/skhiw9t8lpaq1ccghqon.webp',
    characteristics: [
      'Removable Water Reservoir 7oz',
      '4 x 2.8 x 11.6 in, 13 oz',
      '4 tips, 3 pressure settings (45-75 PSI)',
      '2-year limited manufacturer\'s warranty',
      'Satisfaction: 9/10',
      'Different color options',
      '55k reviews on Amazon'
    ],
    amazonLink: '#'
  },
  {
    name: 'Waterpik Aquarius Water Flosser, WP-660, 22oz',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700999294/Best/SingleBests/zliqkbhgjuxjnn0cg9oj.webp',
    characteristics: [
      '90 Seconds of Water Capacity',
      '10 Pressure Settings, 2 pressure settings',
      '3.8 x 4.7 x 10.3 in, 1.46 lbs',
      '3-year limited manufacturer\'s warranty',
      'Satisfaction: 9.5/10',
      'Different color options',
      '129k reviews on Amazon'
    ],
    amazonLink: '#'
  },
  {
    name: 'Nicefeel Water Flosser, Cordless, FC5090, 300ml',
    image: 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700999294/Best/SingleBests/szgwkq7fkaoqkdexrkzn.webp',
    characteristics: [
      '300ml water tank and PX7 Dual Waterproof',
      '4 Adjustable Modes & 4 Jet Tips, Type-C Rechargeable',
      '2.3 x 2.9 x 10 in, 14.07 oz',
      '18 months limited manufacturer\'s warranty',
      'Satisfaction: 8/10',
      'Different color options',
      '20k reviews on Amazon'
    ],
    amazonLink: '#'
  }
]
</script>


<template>
  <section class="info-section" id="info">
    <div class="container">
      <div class="info-content">
        <h2>Brushing Alone Falls Short</h2>
        <p>
          The Dental Irrigator removes plaque that lodges deep in the interdental spaces and below the gums.
          Using a toothbrush or dental floss alone is not sufficient to achieve the best oral hygiene.
          That's why we recommend that you acquire a good Oral Irrigator, and while these high-quality products
          may be a little bit more pricy, they undoubtedly offer superior performance and effectiveness.
        </p>
      </div>

      <div class="products-grid">
        <div class="product-card" v-for="product in products" :key="product.name">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>

          <div class="characteristics">
            <h4>Characteristics</h4>
            <ul>
              <li v-for="(char, index) in product.characteristics" :key="index">
                {{ char }}
              </li>
            </ul>
          </div>

          <a :href="product.amazonLink" class="buy-button" target="_blank" rel="noopener noreferrer">
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.info-section {
  padding: 5rem 20px;
  background-color: var(--gray-base);

  .info-content {
    max-width: 1000px;
    margin: 0 auto 4rem;
    text-align: center;

    h2 {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      color: var(--text-color);
    }
  }

  .products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem 0;
    width: var(--max-width);
    margin: 0 auto;
    max-width: var(--max-width);

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      width: 100%;
    }
  }

  .product-card {
    background: white;
    border-radius: 1rem;
    padding: 2rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;

    &:hover {
      transform: translateY(-5px);
    }

    img {
      width: 100%;
      height: 200px;
      object-fit: contain;
      margin-bottom: 1.5rem;
    }

    h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--primary);
    }

    .characteristics {
      margin: 1.5rem 0;

      h4 {
        font-size: 1.1rem;
        margin-bottom: 1rem;
        color: var(--secondary-color);
      }

      ul {
        list-style: none;

        li {
          margin-bottom: 0.5rem;
          font-size: 0.95rem;

          &:before {
            content: "•";
            color: var(--primary);
            font-weight: bold;
            margin-right: 0.5rem;
          }
        }
      }
    }

    .buy-button {
      display: inline-block;
      width: 100%;
      padding: 1rem;
      background: var(--primary);
      color: white;
      text-align: center;
      text-decoration: none;
      border-radius: 0.5rem;
      font-weight: 600;
      transition: background-color 0.3s ease;

      &:hover {
        background: var(--secondary-color);
      }
    }
  }
}
</style>