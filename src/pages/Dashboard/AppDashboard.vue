<template>
  <v-container fluid>
    <div class="dashboard-page">
      <v-row no-gutters class="d-flex flex-column justify-center mt-8 mb-6">
        <h1 class="page-title pb-3">Portfolio Summary</h1>
        <v-divider></v-divider>
        <h2 class="page-title pt-3">AE26781-Investment</h2>
        <div class="text-h3 text-center">$100,231</div>
        <!-- <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-bind="attrs"
              v-on="on"
              color="secondary"
              class="text-capitalize button-shadow mr-1"
              >Latest Reports</v-btn
            >
          </template>
        </v-menu> -->
      </v-row>
      <v-row>
        <v-col lg="6" sm="6" md="5" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Profits / Losses</p>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters class="pb-3">
                <v-col cols="7" class="my-auto pl-6">
                  <span
                    class="font-weight-medium card-grey pl-3"
                    style="font-size: 24px"
                    >Daily P & L</span
                  >
                </v-col>
                <v-col cols="3">
                  <v-row no-gutters class="pb-5">
                    <div>
                      <div class="text-h5 green--text">
                        $123
                        <v-icon color="success"> mdi-arrow-top-right</v-icon>
                      </div>
                    </div>
                  </v-row>
                  <v-row no-gutters class="pb-5">
                    <div>
                      <div class="text-h5 green--text">
                        .03%
                        <v-icon color="success"> mdi-arrow-top-right</v-icon>
                      </div>
                    </div>
                  </v-row>
                </v-col>
              </v-row>
              <v-row no-gutters class="pb-5 pt-3">
                <v-col cols="7" class="my-auto pl-6">
                  <span
                    class="font-weight-medium card-grey pl-3"
                    style="font-size: 24px"
                    >Total P & L</span
                  >
                </v-col>
                <v-col cols="3">
                  <v-row no-gutters class="pb-5"
                    ><div class="text-h5 green--text">
                      $523<v-icon color="success"> mdi-arrow-top-right</v-icon>
                    </div></v-row
                  >
                  <v-row no-gutters class="pb-5"
                    ><div class="text-h5 green--text">
                      47.3%
                      <v-icon color="success"> mdi-arrow-top-right</v-icon>
                    </div></v-row
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="6" sm="6" md="5" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="flex-nowrap pa-6 pb-3">
              <p class="text-truncate">Asset Allocation</p>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-6 pt-0 mb-1">
              <v-row no-gutters>
                <v-col cols="12">
                  <ApexChart
                    height="250"
                    type="pie"
                    class="mt-1"
                    :options="mock.apexPie.options"
                    :series="generatePieSeries()"
                  ></ApexChart>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12">
          <v-card class="support-requests mx-1 mb-1">
            <v-card-title class="pa-6 pb-0">
              <v-tabs v-model="tab">
                <v-tab :key="portfolio"> <p>Portfolio</p> </v-tab
                ><v-tab :key="trading">
                  <p>Trading desk</p>
                </v-tab>
              </v-tabs>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text class="pa-0">
              <v-tabs-items v-model="tab">
                <v-tab-item :key="portfolio">
                  <v-card>
                    <v-card-text>
                      <v-row no-gutters>
                        <v-col cols="6">
                          <v-card class="mt-4 ma-2" flat>
                            <ApexChart
                              height="250"
                              type="pie"
                              class="mt-1"
                              :options="mock.apexPie.options"
                              :series="generatePieSeries()"
                            ></ApexChart>
                          </v-card>
                        </v-col>
                        <v-col cols="6">
                          <v-card class="mt-4 ma-2" flat
                            ><ApexChart
                              v-if="apexLoading"
                              height="350"
                              type="area"
                              :options="mock.mainApexArea.options"
                              :series="
                                mainApexAreaSelect === 'Daily'
                                  ? mock.mainApexArea.series
                                  : mainApexAreaSelect === 'Weekly'
                                  ? mock.mainApexArea.series2
                                  : mock.mainApexArea.series3
                              "
                            ></ApexChart
                          ></v-card>
                        </v-col>
                      </v-row>
                      <v-row no-gutters>
                        <v-col cols="12">
                          <v-card class="mt-4" flat>
                            <v-card-title class="pa-6 pb-0"
                              >Portfolio details</v-card-title
                            ><v-simple-table>
                              <template v-slot:default>
                                <thead class="pl-2">
                                  <tr>
                                    <th class="text-left pa-6">Company name</th>
                                    <th class="text-left">ticker</th>
                                    <th class="text-left">Industry</th>
                                    <th class="text-left">MarketCa</th>
                                    <th class="text-left">Share numb</th>
                                    <th class="text-left">Share pri</th>
                                    <th class="text-left">Valu</th>
                                    <th class="text-left">Last 15da</th>
                                    <th class="text-left">Last mont</th>
                                    <th class="text-left">details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="item in mock.table"
                                    :key="item.name"
                                  >
                                    <td class="pa-6">{{ item.name }}</td>
                                    <td>{{ item.ticker }}</td>
                                    <td>{{ item.industry }}</td>
                                    <td>{{ item.market }}</td>
                                    <td>{{ item.sharenum }}</td>
                                    <td>{{ item.shareprice }}</td>
                                    <td>{{ item.value }}</td>
                                    <td>{{ item.last15da }}</td>
                                    <td>{{ item.lastmonth }}</td>
                                    <td>{{ item.details }}</td>
                                  </tr>
                                </tbody>
                              </template>
                            </v-simple-table></v-card
                          >
                        </v-col>
                      </v-row>
                    </v-card-text>
                  </v-card>
                </v-tab-item>
                <v-tab-item :key="trading">
                  <v-card>
                    <v-card-text> Content for trading </v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="4" sm="6" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Light Blue</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="6" class="my-auto">
                  <span class="" style="font-size: 42px"
                    >199 <span class="caption error--text">-3.7%</span>
                  </span>
                </v-col>
                <v-col cols="6">
                  <ApexChart
                    height="100"
                    type="bar"
                    v-if="apexLoading"
                    :options="mock.apexBar1.options"
                    :series="mock.apexBar1.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="subtext">
                    33 <v-icon color="success"> mdi-arrow-top-right</v-icon>
                  </div>
                  <div class="subtext-index">Registrations</div>
                </div>
                <div>
                  <div class="subtext">
                    3.25%<v-icon color="success"> mdi-arrow-top-right</v-icon>
                  </div>
                  <div class="subtext-index">Bounce Rate</div>
                </div>
                <div>
                  <div class="subtext">
                    330<v-icon color="error"> mdi-arrow-bottom-right</v-icon>
                  </div>
                  <div class="subtext-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="4" sm="6" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>Sing App</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="7" class="my-auto">
                  <span class="" style="font-size: 42px"
                    >121 <span class="error--text caption">-3.2%</span>
                  </span>
                </v-col>
                <v-col cols="5">
                  <ApexChart
                    height="100"
                    type="bar"
                    v-if="apexLoading"
                    :options="mock.apexBar2.options"
                    :series="mock.apexBar2.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="subtext">
                    15<v-icon color="success"> mdi-arrow-top-right</v-icon>
                  </div>
                  <div class="subtext-index">Registrations</div>
                </div>
                <div>
                  <div class="subtext">
                    3.01%<v-icon color="success"> mdi-arrow-top-right</v-icon>
                  </div>
                  <div class="subtext-index">Bounce Rate</div>
                </div>
                <div>
                  <div class="subtext">
                    302<v-icon color="success"> mdi-arrow-top-right</v-icon>
                  </div>
                  <div class="subtext-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col lg="4" sm="6" cols="12">
          <v-card class="mx-1 mb-1">
            <v-card-title class="pa-6 pb-3">
              <p>RNS</p>
              <v-spacer></v-spacer>
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs" v-on="on">
                    <v-icon color="textColor">mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in mock.menu"
                    :key="i"
                    @click="() => {}"
                  >
                    <v-list-item-title>{{ item }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </v-card-title>
            <v-card-text class="pa-6 pt-0">
              <v-row no-gutters>
                <v-col cols="7" class="my-auto">
                  <span class="" style="font-size: 42px"
                    >175 <span class="error--text caption">-3.1%</span>
                  </span>
                </v-col>
                <v-col cols="5">
                  <ApexChart
                    height="100"
                    type="bar"
                    v-if="apexLoading"
                    :options="mock.apexBar3.options"
                    :series="mock.apexBar3.series"
                  ></ApexChart>
                </v-col>
              </v-row>
              <v-row no-gutters class="justify-space-between">
                <div>
                  <div class="subtext">
                    31 <v-icon color="error"> mdi-arrow-bottom-right</v-icon>
                  </div>
                  <div class="subtext-index">Registrations</div>
                </div>
                <div>
                  <div class="subtext">
                    3.23%<v-icon color="success"> mdi-arrow-top-right</v-icon>
                  </div>
                  <div class="subtext-index">Bounce Rate</div>
                </div>
                <div>
                  <div class="subtext">
                    301<v-icon color="success"> mdi-arrow-top-right</v-icon>
                  </div>
                  <div class="subtext-index">Views</div>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import mock from "./mock";
import ApexChart from "vue-apexcharts";

export default {
  name: "AppDashboard",
  components: {
    ApexChart,
  },
  data() {
    return {
      mock,
      apexLoading: false,
      value: this.getRandomInt(10, 90),
      value2: this.getRandomInt(10, 90),
      mainApexAreaSelect: "Daily",
      tab: null, // Active tab index
      items: [
        { id: 1, title: "Portfolio" },
        { id: 2, title: "Trading desk" },
      ],
    };
  },
  methods: {
    getRandomDataForTrends() {
      const arr = [];
      for (let i = 0; i < 12; i += 1) {
        arr.push(Math.random().toFixed(1) * 10);
      }
      return arr;
    },
    generatePieSeries() {
      let series = [];

      for (let i = 0; i < 3; i++) {
        let y = Math.floor(Math.random() * (500 - 100 + 100)) + 100;
        series.push(y);
      }
      return series;
    },
    getRandomInt(min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    },
  },
  mounted() {
    setTimeout(() => {
      this.apexLoading = true;
    });
  },
};
</script>

<style src="./Dashboard.scss" lang="scss" />
