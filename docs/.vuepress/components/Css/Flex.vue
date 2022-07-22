<template>
  <div>
    <div v-if="example === '1'">
      <p><strong>- row（默认值）</strong>：主轴为水平方向，起点在左端。</p>
      <div class="flex flex-direction_row">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <p><strong>- row-reverse</strong>：主轴为水平方向，起点在右端。</p>
      <div class="flex flex-direction_row-reverse">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <p><strong>- column</strong>：主轴为垂直方向，起点在上沿。</p>
      <div class="flex flex-direction_column">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
      <p><strong>- column-reverse</strong>：主轴为垂直方向，起点在下沿。</p>
      <div class="flex flex-direction_column-reverse">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
      </div>
    </div>
    <div v-if="example === '2'">
      <p><strong>- nowrap（默认）</strong>：不换行。</p>
      <div class="flex flex-wrap_nowrap">
        <div class="box" v-for="item in 20" :key="item">{{ item }}</div>
      </div>
      <p><strong>- wrap</strong>：换行，第一行在上方。</p>
      <div class="flex flex-wrap_wrap">
        <div class="box" v-for="item in 20" :key="item">{{ item }}</div>
      </div>
      <p><strong>- wrap-reverse</strong>：换行，第一行在下方。</p>
      <div class="flex flex-wrap_wrap-reverse">
        <div class="box" v-for="item in 20" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '3'">
      <p><strong>- flex-start（默认值）</strong>：左对齐。</p>
      <div class="flex justify-content_flex-start">
        <div class="box" v-for="item in 5" :key="item">{{ item }}</div>
      </div>
      <p><strong>- flex-end</strong>：右对齐。</p>
      <div class="flex justify-content_flex-end">
        <div class="box" v-for="item in 5" :key="item">{{ item }}</div>
      </div>
      <p><strong>- center</strong>：居中。</p>
      <div class="flex justify-content_center">
        <div class="box" v-for="item in 5" :key="item">{{ item }}</div>
      </div>
      <p><strong>- space-between</strong>：两端对齐，项目之间的间隔都相等。</p>
      <div class="flex justify-content_space-between">
        <div class="box" v-for="item in 5" :key="item">{{ item }}</div>
      </div>
      <p><strong>- space-around</strong>：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。</p>
      <div class="flex justify-content_space-around">
        <div class="box" v-for="item in 5" :key="item">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '4'">
      <p><strong>- flex-start（默认值）</strong>：交叉轴的起点对齐。</p>
      <div class="flex align-items_flex-start">
        <div class="box" v-for="item in 5" :key="item" :style="{ height: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- flex-end</strong>：交叉轴的终点对齐。</p>
      <div class="flex align-items_flex-end">
        <div class="box" v-for="item in 5" :key="item" :style="{ height: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- center</strong>：交叉轴的中点对齐。</p>
      <div class="flex align-items_center">
        <div class="box" v-for="item in 5" :key="item" :style="{ height: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- baseline</strong>：项目的第一行文字的基线对齐。</p>
      <div class="flex align-items_baseline">
        <div class="box" v-for="item in 5" :key="item" :style="{ height: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- stretch（默认值）</strong>：如果项目未设置高度或设为auto，将占满整个容器的高度。</p>
      <div class="flex align-items_stretch">
        <div class="box" v-for="item in 5" :key="item" :style="{ height: 'auto' }">{{ item }}</div>
      </div>      
    </div>
    <div v-if="example === '5'">
      <p><strong>- flex-start（默认值）</strong>：与交叉轴的起点对齐。</p>
      <div class="flex align-content_flex-start flex-wrap_wrap" style="height: 300px">
        <div class="box" v-for="item in 10" :key="item" :style="{ width: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- flex-end</strong>：与交叉轴的终点对齐。</p>
      <div class="flex align-content_flex-end flex-wrap_wrap" style="height: 300px">
        <div class="box" v-for="item in 10" :key="item" :style="{ width: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- center</strong>：与交叉轴的中点对齐。</p>
      <div class="flex align-content_center flex-wrap_wrap" style="height: 300px">
        <div class="box" v-for="item in 10" :key="item" :style="{ width: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- space-between</strong>：与交叉轴两端对齐，轴线之间的间隔平均分布。</p>
      <div class="flex align-content_space-between flex-wrap_wrap" style="height: 300px">
        <div class="box" v-for="item in 10" :key="item" :style="{ width: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- space-around</strong>：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</p>
      <div class="flex align-content_space-around flex-wrap_wrap" style="height: 300px">
        <div class="box" v-for="item in 10" :key="item" :style="{ width: item * 20 + 'px' }">{{ item }}</div>
      </div>
      <p><strong>- stretch（默认值）</strong>：轴线占满整个交叉轴。</p>
      <div class="flex align-content_stretch flex-wrap_wrap" style="height: 300px">
        <div class="box" v-for="item in 10" :key="item" :style="{ width: item * 20 + 'px', height: 'auto' }">{{ item }}</div>
      </div>
    </div>
    <div v-if="example === '6'">
      <div class="flex">
        <div class="box" style="order: 4;"> 4 </div>
        <div class="box" style="order: 1;"> 1 </div>
        <div class="box" style="order: 2;"> 2 </div>
        <div class="box" style="order: 3;"> 3 </div>
      </div>
      <p></p>
      <div class="flex">
        <div class="box" style="order: 4;"> 4 </div>
        <div class="box" style="order: 1;"> 1 </div>
        <div class="box" style="order: 2;"> 2 </div>
        <div class="box" style="order: -1;"> -1 </div>
      </div>
    </div>
    <div v-if="example === '7'">
      <div class="flex">
        <div class="box" style="flex-grow: 1;"> 1 </div>
        <div class="box" style="flex-grow: 2;"> 2 </div>
        <div class="box" style="flex-grow: 2;"> 2 </div>
      </div>
      <p></p>
      <div class="flex">
        <div class="box" style="flex-grow: 1;"> 1 </div>
        <div class="box" style="flex-grow: 1;"> 1 </div>
        <div class="box" style="flex-grow: 1;"> 1 </div>
      </div>
    </div>
    <div v-if="example === '8'">
      <div class="flex" style="width: 500px">
        <div class="box" style="width: 100px; flex-shrink: 1;"> 1 </div>
        <div class="box" style="width: 100px; flex-shrink: 0;"> 0 </div>
        <div class="box" style="width: 100px; flex-shrink: 1;"> 1 </div>
        <div class="box" style="width: 100px; flex-shrink: 1;"> 1 </div>
        <div class="box" style="width: 100px; flex-shrink: 2;"> 2 </div>
        <div class="box" style="width: 100px; flex-shrink: 0;"> 0 </div>
      </div>
    </div>
    <div v-if="example === '9'">
      <div class="flex" style="width: 500px">
        <div class="box" style="flex:0 0 200px"> 200px </div>
        <div class="box" style="flex:0 1 300px"> 300px </div>
        <div class="box" style="flex:0 0 1;"> 1 </div>

      </div>
    </div>
  </div>
</template>

<script setup>

const props = defineProps(['example'])

</script>

<style scoped>
.align-content_flex-start {
  align-content: flex-start;
}
.align-content_flex-end {
  align-content: flex-end;
}
.align-content_center {
  align-content: center;
}
.align-content_space-between {
  align-content: space-between;
}
.align-content_space-around {
  align-content: space-around;
}
.align-content_stretch {
  align-content: stretch;
}

.align-items_flex-start {
  align-items: flex-start;
}
.align-items_flex-end {
  align-items: flex-end;
}
.align-items_baseline {
  align-items: baseline;
}
.align-items_center {
  align-items: center;
}
.align-items_stretch {
  align-items: stretch;
}

.justify-content_space-around {
  justify-content: space-around;
}
.justify-content_space-between {
  justify-content: space-between;
}
.justify-content_center {
  justify-content: center;
}
.justify-content_flex-end {
  justify-content: flex-end;
}
.justify-content_flex-start {
  justify-content: flex-start;
}

.flex-wrap_wrap {
  flex-wrap: wrap;
}
.flex-wrap_wrap-reverse {
  flex-wrap: wrap-reverse;
}
.flex-wrap_nowrap {
  flex-wrap: nowrap;
}

.flex-direction_column {
  flex-direction: column;
}
.flex-direction_column-reverse {
  flex-direction: column-reverse;
}
.flex-direction_row-reverse {
  flex-direction: row-reverse;
}
.flex-direction_row {
  flex-direction: row;
}

.flex {
  display: flex;
  border: 2px solid #E0DFCC
}
.box {
  width: 50px;
  height: 50px;
  text-align: center;
  background: #E88024;
  margin: 5px;
  color: #fff;
  font-size: 2em;
}
* {
  box-sizing: border-box;
}
</style>