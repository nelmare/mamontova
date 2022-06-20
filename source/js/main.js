import {showTabs} from './modules/tabs';
import {shadowTextFill} from './modules/shadow-fill';
import {addTrainersSwiper} from './modules/trainers-swiper';
import {addTextReviewsSwiper} from './modules/text-reviews-swiper';
import {addVideoReviewsSwiper} from './modules/video-reviews-swiper';
import {anchorsScroll} from './modules/anchors-scroll';
import {validateForm} from './modules/form';
import {userPhoneMaskFill} from './modules/phone-mask';
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
  // shadowTextFill();
  // addTrainersSwiper();
  // addReviewsSwiper();
  // anchorsScroll();
  // validateForm();
  // userPhoneMaskFill();
  setupVideo();
  onIntroTextContentSet();
  changeIntroTextContent();
});
