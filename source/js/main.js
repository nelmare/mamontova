import {showTabs} from './modules/tabs';
import {addTextReviewsSwiper} from './modules/text-reviews-swiper';
import {addVideoReviewsSwiper} from './modules/video-reviews-swiper';
import {anchorsScroll} from './modules/anchors-scroll';
import {iosVhFix} from './utils/ios-vh-fix';
import {setupVideo} from './modules/video';
import {onIntroTextContentSet, changeIntroTextContent} from './modules/intro-text-content';

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  iosVhFix();

  // Modules
  showTabs();
  addTextReviewsSwiper();
  addVideoReviewsSwiper();
  anchorsScroll();
  setupVideo();
  onIntroTextContentSet();
  changeIntroTextContent();
});
