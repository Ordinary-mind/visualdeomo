<template>
  <div class="home">
    <div class="flex-1">
      <div class="panel-margin">
        <theme-panel title="统计模块一"></theme-panel>
      </div>
      <div style="height: calc(50% - 80px);">
        <el-row style="height:100%;">
          <el-col :span="12" style="height:100%;">
            <div style="margin: 0 6px 0 12px;height:100%;">
              <custom-chart></custom-chart>
            </div>
          </el-col>
          <el-col :span="12" style="height:100%;">
            <div style="height:100%;margin:0px 12px 0px 6px;">
              <line-chart></line-chart>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="panel-margin">
        <theme-panel title="统计模块二"></theme-panel>
      </div>
      <div style="height: calc(50% - 80px);">
        <el-row style="height:100%;">
          <el-col :span="12" style="height:100%;">
            <div style="margin: 0 6px 0 12px;height:100%;">
              <annular-chart></annular-chart>
            </div>
          </el-col>
          <el-col :span="12" style="height:100%;">
            <div style="margin: 0 12px 0 6px;height: 100%">
              <pie-chart></pie-chart>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="flex-1">
      <div
        style="
          height: 70%;
          position: relative;
        "
      >
        <div class="weather-wrap">
          <weather></weather>
        </div>
        <div style="position: absolute; width: 100%; bottom: 8px; z-index: 1">
          <el-button-group>
            <el-button
              type="primary"
              class="btn-custom"
              v-for="item in btnList"
              :key="item.id"
              :class="[activeBtn == item.id ? 'btn-custom-active' : '']"
              @click="btnClick(item)"
              >{{ item.name }}</el-button
            >
          </el-button-group>
        </div>
        <div style="height: 100%">
          <gis-map :options="geoJson"></gis-map>
        </div>
      </div>

      <div style="height:30%;">
        <div class="base-unit-wrapper" style="height:calc(50% - 12px);">
          <div class="base-unit-item1">
            <base-unit value="1432" unit="t" text="城市供水"></base-unit>
          </div>
          <div class="base-unit-item2">
            <base-unit value="1.31万" unit="kw" text="城市供电"></base-unit>
          </div>
          <div class="base-unit-item3">
            <base-unit value="1432" unit="m³" text="城市供气"></base-unit>
          </div>
        </div>
        <div class="base-unit-wrapper" style="height:calc(50% - 12px)%;">
          <div class="base-unit-item1">
            <base-unit value="889" unit="kw" text="照明节能 "></base-unit>
          </div>
          <div class="base-unit-item2">
            <base-unit value="87" unit="TDS" text="实时水质"></base-unit>
          </div>
          <div class="base-unit-item3">
            <base-unit value="2.5" unit="MPa" text="管网水压"></base-unit>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div class="panel-margin">
        <theme-panel title="统计模块三"></theme-panel>
      </div>
      <div style="height:calc(50% - 80px)">
        <el-row style="height:100%;">
          <el-col :span="12" style="height:100%;">
            <div style="margin: 0 6px 0 12px;height:100%;">
              <annular-chart></annular-chart>
            </div>
          </el-col>
          <el-col :span="12" style="height:100%;">
            <div style="margin: 0 12px 0 6px;height:100%;">
              <a-world-cloud :data="defaultWords"></a-world-cloud>
            </div>
          </el-col>
        </el-row>
      </div>

      <div class="panel-margin">
        <theme-panel title="统计模块四"></theme-panel>
      </div>
      <div style="height:calc(50% - 80px)">
        <el-row  style="height:100%;">
          <el-col :span="12" style="height:100%;">
            <div style="margin: 0 6px 0 12px;height:100%;">
              <histogram-chart></histogram-chart>
            </div>
          </el-col>
          <el-col :span="12" style="height:100%;">
            <div style="margin: 0 12px 0 6px;height:100%;">
              <pie-chart></pie-chart>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import ThemePanel from "../components/themePanel";
import CustomChart from "../components/customChart";
import BaseUnit from "../components/baseUnit";
import Weather from "../components/weather";
import * as echarts from "echarts";
import AWorldCloud from '../components/aWorldCloud'
import GisMap from '../components/gisMap'
import LineChart from '../components/lineChart'
import AnnularChart from '../components/annularChart'
import PieChart from '../components/pieChart'
import HistogramChart from '../components/histogramChart'

import Axios from "axios";

export default {
  name: "home",
  components: {
    ThemePanel,
    CustomChart,
    BaseUnit,
    Weather,
    AWorldCloud,
    GisMap,
    LineChart,
    AnnularChart,
    PieChart,
    HistogramChart
  },
  data() {
    return {
      btnList: [
        { id: "1", name: "广州市",json:"guangzhou.json" },
        { id: "2", name: "佛山市",json:"foshan.json" },
        { id: "3", name: "梧州市",json:"wuzhou.json" },
        { id: "4", name: "北京市",json:"beijing.json" },
      ],
      activeBtn: "1",
      defaultWords: [
        {
          name: "用户体验",
          value: 26,
        },
        {
          name: "UI设计",
          value: 19,
        },
        {
          name: "词云",
          value: 18,
        },
        {
          name: "TOB",
          value: 16,
        },
        {
          name: "数据分析",
          value: 15,
        },
        {
          name: "大数据",
          value: 19,
        },
        {
          name: "IOT",
          value: 11,
        },
        {
          name: "原型设计",
          value: 9,
        },
      ],
      geoJson: null
    };
  },
  mounted() {
    let self = this;
    Axios.get("/guangzhou.json").then((res) => {
      this.geoJson = res.data;      
    });
  },
  methods: {
    btnClick(e) {
      this.activeBtn = e.id;
      Axios.get(e.json).then((res) => {
      this.geoJson = res.data;      
    });
    },
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  height: calc(100% - 70px);
  .flex-1 {
    flex: 1;
    position: relative;
    height: 100%;

    .panel-margin {
      margin: 12px;
    }
  }

  .base-unit-wrapper {
    display: flex;
    padding: 8px 0;

    .base-unit-item1 {
      flex: 1;
      padding: 0 8px 0 0;
    }

    .base-unit-item2 {
      flex: 1;
      padding: 0 4px 0 4px;
    }

    .base-unit-item3 {
      flex: 1;
      padding: 0 0 0 8px;
    }
  }

  .weather-wrap {
    position: absolute;
    top: 24px;
    left: 8px;
    width: 80px;
    height: 150px;
  }

  .btn-custom {
    background: #12203a;
    border-color: #222f47 !important;
  }
  .btn-custom-active {
    background: #31466b;
  }
}
</style>
