<template>
  <div>
    <div v-if="example === '1'">
      <div class="content grid-box-1">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </div>
    <div v-if="example === '2'">
      <div class="content grid-box-2">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
    <div v-if="example === '3'">
      <div class="content grid-box-3">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
    <div v-if="example === '4'">
      <div class="content grid-box-4">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
    <div v-if="example === '5'">
      <div class="content grid-box-5">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </div>
    <div v-if="example === '6'">
      <div class="content grid-box-6">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </div>
    <div v-if="example === '7'">
      <div class="content grid-box-7">
        <div class="box" v-for="item in 9" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '8'">
      <div class="content grid-box-8">
        <div class="box a">a</div>
        <div class="box b">b</div>
        <div class="box c">c</div>
      </div>
    </div>
    <div v-if="example === '9'">
      <div class="content grid-box-9">
        <div class="box a">a</div>
        <div class="box b">b</div>
        <div class="box c">c</div>
      </div>
    </div>
    <div v-if="example === '10'">
      <div class="content grid-box-10">
        <div class="box" v-for="item in 9" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '11'">
      <div class="content grid-box-11">
        <div class="box" v-for="item in 9" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '12'">
      <div class="content grid-box-12">
        <div class="box box-12-1">1</div>
        <div class="box box-12-1">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
    <div v-if="example === '13'">
      <div class="content grid-box-13">
        <div class="box box-12-1">1</div>
        <div class="box box-12-1">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
    <div v-if="example === '14'">
      <div class="content grid-box-14">
        <div class="box box-12-1">1</div>
        <div class="box box-12-1">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
    <div v-if="example === '15'">
      <div class="content grid-box-15">
        <div class="box" v-for="item in 9" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '16'">
      <div class="content grid-box-16">
        <div class="box" v-for="item in 9" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '17'">
      <div class="content grid-box-17">
        <div class="box" v-for="item in 9" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '18'">
      <div class="content grid-box-18">
        <div class="box" v-for="item in 9" :key="item" style="width: 50%; height: 50%;">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '19'">
      <div class="content grid-box-19">
        <div class="box" v-for="item in 9" :key="item" style="width: 50%; height: 50%;">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '20'">
      <div class="content grid-box-20">
        <div class="box" v-for="item in 7" :key="item" style="width: 50%; height: 50%;">{{ item }}</div>
        <div class="box" style="grid-row-start: 4; grid-column-start: 4;">8</div>
        <div class="box" style="grid-row-start: 5; grid-column-start: 5;">9</div>
      </div>
    </div>
    <div v-if="example === '21'">
      <div class="content grid-box-21">
        <div class="box box-21-1">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
      </div>
    </div>
    <div v-if="example === '22'">
      <div class="content grid-box-22">
        <div class="box box-22-1">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
      </div>
    </div>
    <div v-if="example === '23'">
      <div class="content grid-box-23">
        <div class="box box-23-1">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
      </div>
    </div>
    <div v-if="example === '24'">
      <div class="content grid-box-24">
        <div class="box box-24-1">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
    <div v-if="example === '25'">
      <div class="content grid-box-25">
        <div class="box box-25-1">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
        <div class="box">4</div>
        <div class="box">5</div>
        <div class="box">6</div>
        <div class="box">7</div>
        <div class="box">8</div>
        <div class="box">9</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.grid-box-25 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.box-25-1 {
  grid-area: 2 / 2 / 3 / 3;
  background: red !important;
}

.grid-box-24 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-template-areas: 'a b c' 'd e f' 'g h i' 
}
.box-24-1 {
  grid-area: e;
  background: red !important;
}

.grid-box-23 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.box-23-1 {
  grid-column-start: span 2;
  grid-row-start: span 2;
}

.grid-box-22 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
.box-22-1 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box-21-1 {
  grid-column-start: 2;
  grid-column-end: 4;
}
.grid-box-21 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-auto-flow: row;
}
.grid-box-20 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-columns: 50px;
  grid-auto-rows: 50px;
  height: auto !important;
}
.grid-box-19 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  place-items: center center;
  place-content: center space-between;
}
.grid-box-18 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  place-items: center center;
  place-content: center center;
}
.grid-box-17 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  place-items: start end;
 }
.grid-box-16 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: start;
 }
.grid-box-15 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  justify-items: start;
 }
.grid-box-14 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column dense;
  height: unset !important;
  overflow: auto;
 }
.grid-box-13 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: row dense;
  height: unset !important;
  overflow: auto;
 }
.box-12-1 {
  grid-column-start: 1;
  grid-column-end: 3;
}
.box-12-2 {
  grid-column-start: 1;
  grid-column-end: 3;
}
.grid-box-12 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: row;
  height: unset !important;
  overflow: auto;
 }
.grid-box-10 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: row;
}
.grid-box-11 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-flow: column;
}
.grid-box-9 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'a a a' 
                       'b b .'
                       'c c c';
}
.a {
  grid-area: a;
}
.b {
  grid-area: b;
}
.c {
  grid-area: c;
}
.grid-box-8 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 'a a a'
                       'b b b'
                       'c c c';
}
.grid-box-7 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px 20px;
}
.grid-box-6 {
  display: grid;
  grid-template-columns: [l1] 100px [l2] 100px [l3] 100px [l4];
}
.grid-box-5 {
  display: grid;
  grid-template-columns: 100px auto 100px;
}
.grid-box-4 {
  display: grid;
  grid-template-columns: 1fr 2fr;
}
.grid-box-3 {
  display: grid;
  grid-template-columns: repeat(auto-fill, 100px);
}
.grid-box-2 {
  display: grid;
  grid-template-columns: repeat(3, 33.33%);
  grid-template-rows: repeat(3, 33.33%);
}
.grid-box-1 {
  display: grid;
  grid-template-columns: 100px 100px 100px;
}
.content {
  width: 100%;
  height: 300px;
  border: 2px solid #E0DFCC;
}

.box {
  text-align: center;
  background: #E88024;
  border: 1px solid #fff;
  color: #fff;
  font-size: 2em;
}
</style>

<script setup>

const props = defineProps(['example'])

</script>