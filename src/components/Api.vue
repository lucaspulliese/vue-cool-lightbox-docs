<template>
  <div class="block">
    <div class="block__intro">
      <h2>API</h2>
    </div>

    <div class="block__content">
      <h3 id="items-attributes">Items attributes</h3>
      
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr style="width: 100%;">
              <td>src</td>
              <td>Url of the image/video</td>
            </tr>

            <tr style="width: 100%;">
              <td>alt</td>
              <td>alt attribute of the image</td>
            </tr>
            
            <tr style="width: 100%;">
              <td>title</td>
              <td>Slide title</td>
            </tr>

            <tr style="width: 100%;">
              <td>description</td>
              <td>Slide description</td>
            </tr>

            <tr style="width: 100%;">
              <td>thumb</td>
              <td>Thumb url used in thumbs block</td>
            </tr>

            <tr style="width: 100%;">
              <td>mediaType</td>
              <td>Defines media type</td>
            </tr>
            
            <tr style="width: 100%;">
              <td>autoplay</td>
              <td>Setting it to true it will work with youtube, vimeo or any web video format.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--/table-wrapper-->

      <h3 id="props">Props</h3>

      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th width="150">Type</th>
              <th width="150">Default</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>index</td>
              <td>Number</td>
              <td></td>  	
              <td>Index of items to open</td>
            </tr>
            
            <tr>
              <td>items</td>
              <td>Array</td>
              <td></td>
              <td>Array of images/videos</td>
            </tr>
            
            <tr>
              <td>loop</td>
              <td>Boolean</td>
              <td>true</td>
              <td>Enables looping through items</td>
            </tr>

            <tr>
              <td>effect</td>
              <td>String</td>
              <td>swipe</td>
              <td>Effect on slide, could be swipe or fade</td>
            </tr>

            <tr>
              <td>fullScreen</td>
              <td>Boolean</td>
              <td>false</td>
              <td>Allow users to fullscreen mode</td>
            </tr>
            
            <tr>
              <td>slideshow</td>
              <td>Boolean</td>
              <td>true</td>
              <td>Enables lighbox slideshow</td>
            </tr>
            
            <tr>
              <td>slideshowColorBar</td>
              <td>String</td>
              <td>#fa4242</td>
              <td>Color of the slideshow progress bar</td>
            </tr>

            <tr>
              <td>slideshowDuration</td>
              <td>Number</td>
              <td>3000</td>
              <td>Duration of slides when slideshow is running (in ms)</td>
            </tr>
            
            <tr>
              <td>srcName</td>
              <td>String</td>
              <td>src</td>
              <td>Name of the prop to use as image/video url</td>
            </tr>
            
            <tr>
              <td>srcThumb</td>
              <td>String</td>
              <td>thumb</td>
              <td>Name of the prop to use as image/video thumb</td>
            </tr>

            <tr>
              <td>overlayColor</td>
              <td>String</td>
              <td>rgba(30, 30, 30, .9)</td>
              <td>Overlay color</td>
            </tr>
            
            <tr>
              <td>zIndex</td>
              <td>Number</td>
              <td>9999</td>
              <td>.cool-lightbox z-index</td>
            </tr>
            
            <tr>
              <td>thumbsPosition</td>
              <td>String</td>
              <td>right</td>
              <td>Defines thumbs position, could be right or bottom</td>
            </tr>

            <tr>
              <td>youtubeCookies</td>
              <td>Boolean</td>
              <td>true</td>
              <td>if is setted to false it will use https://www.youtube-nocookie.com/embed/YOUTUBE_ID for youtube videos</td>
            </tr>
            
            <tr>
              <td>useZoomBar</td>
              <td>Boolean</td>
              <td>false</td>
              <td>enables a zoom bar similar with the zoom as in Slack</td>
            </tr>
            
            <tr>
              <td>enableWheelEvent</td>
              <td>Boolean</td>
              <td>false</td>
              <td>enables change slides on mouse wheel events</td>
            </tr>
            
            <tr>
              <td>closeOnClickOutsideMobile</td>
              <td>Boolean</td>
              <td>false</td>
              <td>enables close lightbox when the user clicks outside the image/video/iframe on mobile devices</td>
            </tr>
            
            <tr>
              <td>srcMediaType</td>
              <td>String</td>
              <td>'mediaType'</td>
              <td>media type src for each item</td>
            </tr>

            <tr>
              <td>dir</td>
              <td>String</td>
              <td>'ltr'</td>
              <td>if you set it to 'rtl' it will work fine with sites where the body or any wrapper has direction: rtl</td>
            </tr>

            <tr>
              <td>enableScrollLock</td>
              <td>Boolean</td>
              <td>true</td>
              <td>By default when the lightbox is open the body is locked</td>
            </tr>

            <tr>
              <td>translations</td>
              <td>Object</td>
              <td>
                <pre class="language-javascript"><code>
{
  previous: 'Previous',
  next: 'Next',
  showThumbNails: 'Show thumbnails',
  playSlideShow: 'Play slideshow',
  fullScreen: 'Fullscreen',
  close: 'Close' 
} 
</code>
</pre>
              </td>
              <td>Translation to allow simple locale settings</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--/table-wrapper-->

      
      <h3 id="events">Events</h3>
      
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th width="150">Attributes</th>
              <th width="150">Listen to</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>OnChange</td>
              <td>(indexItem)</td>
              <td>@on-change</td>  	
              <td>Emitted when the lightbox changes the item index</td>
            </tr>
            
            <tr>
              <td>OnOpen</td>
              <td>(indexItem)</td>
              <td>@on-open</td>  	
              <td>Emitted when the lightbox is opened</td>
            </tr>
            
            <tr>
              <td>Close</td>
              <td>(indexItem)</td>
              <td>@close</td>
              <td>Emitted when the lightbox is closed</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--/table-wrapper-->

      
      <h3 id="slots">Slots</h3>

      <div class="table-wrapper">
        <table class="table table--full">
          <thead>
            <tr>
              <th width="200">Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>icon-previous</td>
              <td>Previous icon</td>
            </tr>
            
            <tr>
              <td>icon-next</td>
              <td>Next icon</td>
            </tr>
            
            <tr>
              <td>close</td>
              <td>Close icon</td>
            </tr>
            
            <tr>
              <td>loading</td>
              <td>Loading animation</td>
            </tr>
          </tbody>
        </table>
      </div>
      <!--/table-wrapper-->

    </div>
    <!--/block__content-->
  </div>
</template>

<script>
export default {
  
}
</script>