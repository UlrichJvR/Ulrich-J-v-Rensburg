<template>
  <!-- tsParticles Repository: https://github.com/matteobruni/tsparticles -->
  <!-- tsParticles Website: https://particles.js.org -->
  <Particles id="tsparticles" :options="options" :particlesInit="particlesInit" />
</template>

<script lang="ts">
import { Size, type Engine } from 'tsparticles-engine'
import { loadFull } from 'tsparticles' // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles

export default {
  data() {
    return {
      // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
      // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
      options: {
        background: {
          color: '#292929' // this sets a background color for the canvas
        },
        fullScreen: {
          enable: false, // enabling this will make the canvas fill the entire screen, it's enabled by default
          zIndex: -10 // this is the z-index value used when the fullScreen is enabled, it's 0 by default
        },
        interactivity: {
          events: {
            onClick: {
              enable: false, // enables the click event, it's disabled by default
              mode: 'push' // adds the particles on click
            },
            onHover: {
              enable: true, // enables the mouse hover event, it's disabled by default
              mode: 'repulse' // repulse the particles on mouse hover
            }
          },
          modes: {
            push: {
              quantity: 15 // number of particles to add on click
            },
            repulse: {
              distance: 50 // distance of the particles from the cursor
            }
          }
        },
        particles: {
          color: {
            value: '#945252'
          },
          links: {
            color: '#4F8C81',
            distance: 200,
            enable: true,
            opacity: 0.6,
            width: 0.5
          },
          collisions: {
            enable: true
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 4,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 1000
            },
            value: 80
          },
          opacity: {
            value: 0.5
          },
          shape: {
            random: true,
            type: 'circle'
          },
          size: {
            random: true,
            value: 6
          }
        },
        detectRetina: true
      }
    }
  },
  methods: {
    async particlesInit(engine: Engine) {
      // await loadSlim(engine)
      const particles = loadFull(engine) // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
      return particles
    }
  }
}
</script>
