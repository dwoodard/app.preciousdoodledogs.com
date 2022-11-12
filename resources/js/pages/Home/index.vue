<template>
  <v-main class="pa-0 ma-0">
    <v-container fluid>
      <v-toolbar>
        <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details/>
        <v-spacer/>


        <v-btn text @click="drawerSort = !drawerSort"> Sort </v-btn>
        <v-btn text @click="drawerFilter = !drawerFilter"> Filter </v-btn>
      </v-toolbar>


      <v-card v-scroll.self="onScroll" class="overflow-y-auto" max-height="100%">
        <v-card-text>
          <div v-for="n in 120" :key="n" class="mb-4">
            <v-card>
              <v-card-text>
                <v-row>
                  <v-col cols="12" sm="4" md="3">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png" aspect-ratio="1.75" contain/>
                  </v-col>
                  <v-col cols="12" sm="8" md="9">
                    <div class="text-h5">{{ dogs[0].name }} {{ Math.floor(Math.random(100) * 120) }}</div>
                    <div class="text-subtitle-2">{{ dogs[0].breed }}</div>
                    <div class="text-body-2">
                      {{ dogs[0].description }} {{ Math.random(100) }}
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </div>
        </v-card-text>
      </v-card>
    </v-container>


    <div id="drawers">
      <!-- sort -->
      <v-navigation-drawer v-model="drawerSort" absolute temporary app>
        <template #prepend>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Sort</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>

        <v-list>
          <v-list-item-group>
            <v-list-item>
              <v-select v-model="sortPrice" :items="sortPriceItems" label="Sort Price" outlined dense hide-details/>
            </v-list-item>
          </v-list-item-group>
        </v-list>

        <v-divider/>

        <list-item-group>
          <v-list-item>
            <v-select v-model="sortPosted" :items="sortPostedItems" label="Sort Posted" outlined dense hide-details/>
          </v-list-item>
        </list-item-group>

        <v-divider/>

        <list-item-group>
          <v-list-item>
            <v-select v-model="sortAge" :items="sortAgeItems" label="Sort Age" outlined dense hide-details/>
          </v-list-item>
        </list-item-group>


        <v-divider/>

        <list-item-group>
          <v-list-item>
            <v-select v-model="sortBreed" :items="sortBreedItems" label="Sort Breed" outlined dense hide-details/>
          </v-list-item>
        </list-item-group>


        <!-- reset all sort -->
        <v-divider/>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Clear Sort</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn icon @click="clearSort()">
              <v-icon>mdi-refresh</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        </list-item-group>
      </v-navigation-drawer>


      <!-- filter -->
      <v-navigation-drawer v-model="drawerFilter" absolute temporary right>
        <template #prepend>
          <v-list-item two-line>
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/women/81.jpg"/>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Filter Dogs</v-list-item-title>
              <v-list-item-subtitle>Total Dogs: {{ dogs.length }} / {{ dogs.length }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
        <!--
this.filterType = null;
this.filterBreed = null;
this.filterAge = null;
this.filterGender = null;
this.filterSize = null;
this.filterPrice = null;
-->
        <v-list>
          <v-list-item>
            <v-text-field v-model="filterPriceLow"
                          label="Low"
                          type="tel"
                          min="0" max="5000"
                          hide-details
                          prepend-icon="mdi-currency-usd"/>


            <v-text-field v-model="filterPriceHigh"
                          label="High"
                          type="tel"
                          min="0" max="5000"
                          hide-details
                          prepend-icon="mdi-currency-usd"/>
          </v-list-item>

          <v-list-item>
            <v-select v-model="filterType" :items="filterTypeItems" label="Type" hide-details/>
          </v-list-item>

          <v-list-item>
            <v-select v-model="filterBreed" :items="filterBreedItems" label="Breed" chips multiple hide-details prepend-icon="mdi-dog"/>
          </v-list-item>

          <v-list-item>
            <!-- less than or grater than -->
            <v-range-slider v-model="filterAge" min="0" max="100"/>
          </v-list-item>

          <v-list-item>
            <v-select v-model="filterGender" :items="filterGenderItems" label="Gender"/>
          </v-list-item>

          <v-list-item>
            <v-select v-model="filterSize" :items="filterSizeItems" label="Size" multiple hide-details/>
          </v-list-item>

          <v-divider/>

          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Clear Filter</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon @click="clearFilter()">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>
  </v-main>
</template>

<script>
  export default {
    props: {

    },
    data() {
      return {
        drawerSort: false,
        drawerFilter: true,
        scrollInvoked: 0,


        // Sort
        sortPrice: null,
        sortPosted: null,
        sortPostedItems: [
          {text: 'Posted: Newest', value: 'newest'},
          {text: 'Posted: Oldest', value: 'oldest'}
        ],
        sortPriceItems: [
          {text: 'Price: Low to High', value: 'priceLow'},
          {text: 'Price: High to Low', value: 'priceHigh'}
        ],

        sortAge: null,
        sortAgeItems: [
          {text: 'Age: Youngest', value: 'ageYoung'},
          {text: 'Age: Oldest', value: 'ageOld'}
        ],

        // Filter
        filterType: null,
        filterTypeItems: [
          'puppy',
          'stud'
        ],
        filterBreed: null,
        filterBreedItems: [
          'labradoodle',
          'goldendoodle'
        ],

        filterAge: null,

        filterGender: null,
        filterGenderItems: ['male', 'female'],

        filterSize: null,
        filterSizeItems: ['teacup', 'toy', 'mini'],

        filterPriceLow: null,
        filterPriceHigh: null,


        dogs: [
          {
            name: 'Fido',
            breed: 'labradoodle',
            description: 'Fido is a Labradoodle. He is a very good boy!',
            age: 3
          }
        ]

      };
    },
    methods: {
      clearSort() {
        this.sortPrice = null;
        this.sortPosted = null;
        this.sortAge = null;
      },
      clearFilter() {
        this.filterType = null;
        this.filterBreed = null;
        this.filterAge = null;
        this.filterGender = null;
        this.filterSize = null;
        this.filterPriceLow = null;
        this.filterPriceHigh = null;
      },
      onScroll() {
        this.scrollInvoked++;
      }
    }
  };
</script>

<style scoped>

</style>
