<script setup>
</script>

<template>
  <section class="waterpik-section" id="waterpik">
    <div class="container">
      <div class="waterpik-header">
        <h2>The Best of Waterpik Model WF-02 Professional Water Flosser</h2>
        <p>
          Waterpik's Cordless Express Water Flosser, featuring a battery-operated, portable, and waterproof design,
          is perfect for on-the-go oral care. With 2 pressure settings, a water on/off slider, 30 seconds of flossing
          time,
          and included AA batteries, it's easy to use anytime, anywhere, for healthier gums and brighter teeth.
        </p>
      </div>

      <div class="waterpik-content">
        <div class="product-image">
          <img
            src="https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700500931/Best/WaterPicWF02/hpp82kmw3yjoyjbira9h.webp"
            alt="Waterpik Water Flosser Model WF-02">
        </div>

        <div class="product-info">
          <h3>Waterpik Water Flosser Model WF-02, 5oz</h3>
          <p>
            Clinically proven to remove up to 99.9% of plaque, the Cordless Express combines water pressure
            with pulsating action for an exceptional clean that traditional methods can't match.
          </p>

          <div class="characteristics">
            <h4>Characteristics</h4>
            <ul>
              <li>Portable and waterproof design.</li>
              <li>2 pressure settings (45-75 PSI) for customizable cleaning.</li>
              <li>1200 water pulses per minute.</li>
              <li>Easy-to-fill, removable 5-ounce reservoir for 30 seconds of flossing time.</li>
              <li>2 JT-450E water flossing tips.</li>
              <li>Compact dimension.</li>
            </ul>
          </div>

          <a href="#" class="buy-button">Buy on Amazon</a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.waterpik-section {
  padding: 5rem 24px;
  background: var(--light-bg);

  .waterpik-header {
    text-align: center;
    max-width: 800px;
    margin: 0 auto 4rem;

    h2 {
      font-size: 2.5rem;
      color: var(--primary);
      margin-bottom: 1.5rem;
    }

    p {
      font-size: 1.1rem;
      color: var(--text-color);
      line-height: 1.7;
    }
  }

  .waterpik-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
    background: white;
    padding: 3rem;
    border-radius: 1rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    width: var(--max-width);
    margin: 0 auto;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 2rem;
      padding: 2rem;
      width: 100%;
    }

    .product-image {
      justify-self: flex-start;
      margin-left: 80px;

      img {
        width: 100%;
        max-width: 400px;
        height: auto;
        border-radius: 0.5rem;
      }
    }

    .product-info {
      h3 {
        font-size: 1.75rem;
        color: var(--primary);
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 2rem;
        line-height: 1.7;
      }

      .characteristics {
        margin-bottom: 2rem;

        h4 {
          font-size: 1.25rem;
          color: var(--secondary-color);
          margin-bottom: 1rem;
        }

        ul {
          list-style: none;

          li {
            margin-bottom: 0.75rem;
            padding-left: 1.5rem;
            position: relative;

            &:before {
              content: "✓";
              position: absolute;
              left: 0;
              color: var(--primary);
              font-weight: bold;
            }
          }
        }
      }

      .buy-button {
        display: inline-block;
        background: var(--primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        text-decoration: none;
        font-weight: 600;
        transition: all 0.3s ease;

        &:hover {
          background: var(--secondary-color);
          transform: translateY(-2px);
        }
      }
    }
  }
}
</style>