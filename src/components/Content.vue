<template>
<main class="main">
<div class="block">
  <div class="block__content intro">
    <h2>V2 is here!</h2>
    <p>Pretty Vue.js lightbox inspired by <a href="https://fancyapps.com/fancybox/3/" target="_blank">fancybox</a><br>
       with zoom, swipe, captions and videos supported.<br>
    </p>
    
    <p style="font-weight: 400; margin-top: 50px"><strong>Important:</strong>
    loop only works when effect is swipe
    </p>
  </div>
</div>

<div id="getting-started" class="block">
<div class="block__intro">
<h2>Getting started</h2>
</div>

<div class="block__content">
<h3 id="installation">Installation</h3>
<h4>via npm</h4>
<pre class="no-break language-bash"><code>npm install --save vue-cool-lightbox</code></pre>

<h4>via CDN</h4>
<pre class="no-break language-html"><code>&lt;!-- the lightbox uses body-scroll-lock as a dependency -->
&lt;script src="https://cdn.jsdelivr.net/npm/body-scroll-lock/lib/bodyScrollLock.min.jsx">&lt;/script>
&lt;script src="https://unpkg.com/vue-cool-lightbox">&lt;/script>

&lt;link rel="stylesheet" media="all" href="https://unpkg.com/vue-cool-lightbox/dist/vue-cool-lightbox.min.css" /></code>
</pre>

<h3 id="basic-usage">Basic Usage</h3>
<h4>via npm</h4>
            
<pre class="language-javascript"><code>// use the component
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'
 
export default {
  components: {
    CoolLightBox,
  },
}

// or register it globally
import Vue from 'Vue'
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

Vue.use(CoolLightBox)</code>
</pre>

<h4>via CDN</h4>

<pre class="language-html"><code>&lt;script>
// register globally
Vue.component('vue-cool-lightbox', window.CoolLightBox.default)
&lt;/script>
</code></pre>

</div>
<!--/block__content-->

</div>

<div class="block">
  <div class="block__intro">
    <h2>Examples</h2>
  </div>

<div class="block__content">
<h3 id="example-basic">Basic</h3>
<p>You can swipe the slides, when you swipe to up or to down the lightbox is going to close.</p>

<div class="block-code">
  <div class="block-code__example">
    <CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image-wrapper" 
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="index = imageIndex">
        <div
        class="image"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
    </div>
  </div>

  <div class="block-code__code">
<pre class="language-html"><code>&lt;template>
  &lt;div id="app">
    &lt;CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    &lt;/CoolLightBox>

    &lt;div class="images-wrapper">
      &lt;div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      >&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  data: function () {
    return {
      items: [
        'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
      ],
      index: null
    };
  },
};
&lt;/script>
</code></pre>
  </div>
</div>

<h3 id="example-fade">Fade effect</h3>

<div class="block-code">
  <div class="block-code__example">
    <CoolLightBox 
      :items="items" 
      :index="indexFade"
      :effect="'fade'"
      @close="indexFade = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image-wrapper" 
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="indexFade = imageIndex">
        <div
        class="image"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
    </div>
  </div>

  <div class="block-code__code">
<pre class="language-html"><code>&lt;template>
  &lt;div id="app">
    &lt;CoolLightBox 
      :items="items" 
      :index="index"
      :effect="'fade'"
      @close="index = null">
    &lt;/CoolLightBox>

    &lt;div class="images-wrapper">
      &lt;div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      >&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  data: function () {
    return {
      items: [
        'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
      ],
      index: null
    };
  },
};
&lt;/script>
</code></pre>
  </div>
</div>

<h3 id="example-with-captions">With captions</h3>

<div class="block-code">
  <div class="block-code__example">
    <CoolLightBox 
      :items="itemsCaptions" 
      :index="indexCaptions"
      @close="indexCaptions = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image-wrapper" 
          v-for="(image, imageIndex) in itemsCaptions"
          :key="imageIndex"
          @click="indexCaptions = imageIndex">
        <div
        class="image"
          :style="{ backgroundImage: 'url(' + image.src + ')' }"
        ></div>
      </div>
    </div>
  </div>

  <div class="block-code__code">
<pre class="language-html"><code>&lt;template>
  &lt;div id="app">
    &lt;CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    &lt;/CoolLightBox>

    &lt;div class="images-wrapper">
      &lt;div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      >&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  data: function () {
    return {
      items: [
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          src: 'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
        },
        {
          title: 'a beautiful mountain view',
          description: "Photo by Facundo",
          src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        },
      ],
      index: null
    };
  },
};
&lt;/script>
</code></pre>
  </div>
</div>

<h3 id="example-zoom">Zoom example</h3>

<p><strong>Important:</strong> The zoom is only activated when the image is bigger than the height or width of the screen. On mobile sizes is disabled at the moment.</p>
<div class="block-code">
  <div class="block-code__example">
    <CoolLightBox 
      :items="itemsZoom" 
      :index="indexZoom"
      @close="indexZoom = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image-wrapper" 
          v-for="(image, imageIndex) in itemsZoom"
          :key="imageIndex"
          @click="indexZoom = imageIndex">
        <div
        class="image"
          :style="{ backgroundImage: 'url(' + image.src + ')' }"
        ></div>
      </div>
    </div>
  </div>

  <div class="block-code__code">
<pre class="language-html"><code>&lt;template>
  &lt;div id="app">
    &lt;CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    &lt;/CoolLightBox>

    &lt;div class="images-wrapper">
      &lt;div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.src + ')' }"
      >&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  data: function () {
    return {
      items: [
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          src: 'https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
          title: 'A beautiful mountain view',
          description: "Photo by Facundo",
          src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg',
        },
      ],
      index: null
    };
  },
};
&lt;/script>
</code></pre>
  </div>
</div>

<h3 id="example-fullscreen">Zoom bar</h3>

<div class="block-code">
  <div class="block-code__example">
    <CoolLightBox 
      :items="itemsZoom" 
      :index="indexZoomBar"
      :useZoomBar="true"
      @close="indexZoomBar = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image-wrapper" 
          v-for="(image, imageIndex) in itemsZoom"
          :key="imageIndex"
          @click="indexZoomBar = imageIndex">
        <div
        class="image"
          :style="{ backgroundImage: 'url(' + image.src + ')' }"
        ></div>
      </div>
    </div>
  </div>

  <div class="block-code__code">
<pre class="language-html"><code>&lt;template>
  &lt;div id="app">
    &lt;CoolLightBox 
      :items="items" 
      :index="index"
      :useZoomBar="true"
      @close="index = null">
    &lt;/CoolLightBox>

    &lt;div class="images-wrapper">
      &lt;div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      >&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  data: function () {
    return {
      items: [
        'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
      ],
      index: null
    };
  },
};
&lt;/script>
</code></pre>
  </div>
</div>

<h3 id="example-fullscreen">Fullscreen</h3>

<div class="block-code">
  <div class="block-code__example">
    <CoolLightBox 
      :items="items" 
      :index="indexFullscreen"
      :fullScreen="true"
      @close="indexFullscreen = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image-wrapper" 
          v-for="(image, imageIndex) in items"
          :key="imageIndex"
          @click="indexFullscreen = imageIndex">
        <div
        class="image"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
    </div>
  </div>

  <div class="block-code__code">
<pre class="language-html"><code>&lt;template>
  &lt;div id="app">
    &lt;CoolLightBox 
      :items="items" 
      :index="index"
      :fullScreen="true"
      @close="index = null">
    &lt;/CoolLightBox>

    &lt;div class="images-wrapper">
      &lt;div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      >&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  data: function () {
    return {
      items: [
        'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
      ],
      index: null
    };
  },
};
&lt;/script>
</code></pre>
  </div>
</div>

<h3 id="example-video">Videos</h3>

<div class="block-code">
  <div class="block-code__example">
    <CoolLightBox 
      :items="itemsVideos" 
      :index="indexVideos"
      @close="indexVideos = null">
    </CoolLightBox>

    <div class="images-wrapper">
      <div class="image-wrapper" 
          v-for="(image, imageIndex) in itemsVideos"
          :key="imageIndex"
          @click="indexVideos = imageIndex">
        <div
        class="image"
          :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
        ></div>
      </div>
    </div>
  </div>

  <div class="block-code__code">
<pre class="language-html"><code>&lt;template>
  &lt;div id="app">
    &lt;CoolLightBox 
      :items="items" 
      :index="index"
      @close="index = null">
    &lt;/CoolLightBox>

    &lt;div class="images-wrapper">
      &lt;div
        class="image"
        v-for="(image, imageIndex) in items"
        :key="imageIndex"
        @click="index = imageIndex"
        :style="{ backgroundImage: 'url(' + image.thumb + ')' }"
      >&lt;/div>
    &lt;/div>
  &lt;/div>
&lt;/template>

&lt;script>
export default {
  data: function () {
    return {
      items: [
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          thumb: 'https://cosmos-images2.imgix.net/file/spina/photo/20565/191010_nature.jpg?ixlib=rails-2.1.4&auto=format&ch=Width%2CDPR&fit=max&w=835',
          src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
        },
        {
          title: 'A beautiful mountain view',
          description: "Photo by Facundo",
          src: 'https://vimeo.com/43338103',
          thumb: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        },
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          thumb: 'https://scx1.b-cdn.net/csz/news/800/2019/1-nature.jpg',
          src: '/video.mp4',
        },
      ],
      index: null
    };
  },
};
&lt;/script>
</code></pre>
  </div>
</div>

</div>
<!--/block__content-->

</div>
<!--/block-->

<Api />

<Acknowledgements />
<OnlineExamples />
<Donation />

</main>
<!--/main-->
</template>

<script>
import Api from '@/components/Api';
import Acknowledgements from '@/components/Acknowledgements';
import OnlineExamples from '@/components/OnlineExamples';
import Donation from '@/components/Donation';

export default {
  components: {
    Api,
    Acknowledgements,
    OnlineExamples,
    Donation
  },
  data: function() {
    return {
      // items
      items: [
        'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768',
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
      ],

      // items captions
      itemsCaptions: [
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          src: 'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768',
        },
        {
          title: 'A beautiful mountain view',
          description: "Photo by Facundo",
          src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        },
      ],
      
      // items videos
      itemsVideos: [
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          thumb: 'https://pix10.agoda.net/hotelImages/1199068/-1/09cb9a2780bf41ad1e8f8a3d2e074754.jpg?s=1024x768',
          src: 'https://www.youtube.com/watch?v=d0tU18Ybcvk',
        },
        {
          title: 'A beautiful mountain view',
          description: "Photo by Facundo",
          src: 'https://vimeo.com/43338103',
          thumb: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/nature-quotes-1557340276.jpg?crop=0.666xw:1.00xh;0.168xw,0&resize=640:*',
        },
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          thumb: 'https://scx1.b-cdn.net/csz/news/800/2019/1-nature.jpg',
          src: '/video.mp4',
        },
      ],
      
      // zoom items
      itemsZoom: [
        {
          title: 'In nature, nothing is perfect and everything is perfect',
          description: "Photo by Lucas",
          src: 'https://images.unsplash.com/photo-1420593248178-d88870618ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
        {
          title: 'A beautiful mountain view',
          description: "Photo by Facundo",
          src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Shaqi_jrvej.jpg',
        },
      ],

      // indexes
      index: null,
      indexCaptions: null,
      indexVideos: null,
      indexZoom: null,
      indexFade: null,
      indexFullscreen: null,
      indexZoomBar: null,
    }
  }
}
</script>
