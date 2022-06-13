<template>
  <div class="main-page">
    <div id="example-content" class="container">

      <affix class="sidebar" relative-element-selector="#example-content">
        <div class="sidebar__version">
          <a target="_blank" href="https://vue-cool-lightbox.lucaspulliese.com/v1">Go to v1.X</a>
        </div>
        <div class="sidebar__block">
          <h4 class="sidebar__title">Setup</h4>
          <ul class="sidebar__list">
            <li>
              <a href="#getting-started">Getting started</a>
              <ul>
                <li><a href="#installation">Installation</a></li>
                <li><a href="#basic-usage">Basic Usage</a></li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="sidebar__block">
          <h4 class="sidebar__title">Examples</h4>
          <ul class="sidebar__list">
            <li><a href="#example-basic">Basic</a></li>
            <li><a href="#example-fade">Fade effect</a></li>
            <li><a href="#example-with-captions">With captions</a></li>
            <li><a href="#example-zoom">Zoom</a></li>
            <li><a href="#example-fullscreen">Fullscreen</a></li>
            <li><a href="#example-video">Video</a></li>
          </ul>
        </div>

        <div class="sidebar__block">
          <h4 class="sidebar__title">API</h4>
          <ul class="sidebar__list">
            <li><a href="#items-attributes">Items attributes</a></li>
            <li><a href="#props">Props</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#slots">Slots</a></li>
          </ul>
        </div>
        
        <div class="sidebar__block">
          <h4 class="sidebar__title">Others</h4>
          <ul class="sidebar__list">
            <li><a href="#acknowledgements">Acknowledgements</a></li>
            <li><a href="#online-examples">Online examples</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
        </div>
      </affix>
      <!--/sidebar-->

      <Content />

    </div>
  </div>
</template>

<script>
import Content from '@/components/Content';

export default {
  name: 'home',
  components: {
    Content,
  }
}
</script>

