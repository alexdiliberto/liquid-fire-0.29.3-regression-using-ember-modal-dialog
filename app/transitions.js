const SLIDE_IN_DURATION = 3000;
const SLIDE_OUT_DURATION = SLIDE_IN_DURATION;

export default function() {
  this.transition(
    this.matchSelector('.slide-in-modal'),
    this.toValue(0),
    this.use(
      'explode',
      {
        pickNew: '.ember-modal-dialog', // Find the new ember-modal-dialog
        use: ['to-left', { duration: SLIDE_IN_DURATION, easing: [0.39, 0.575, 0.565, 1] }] // animate in with an [easeOutSine easing](http://easings.net/#easeOutSine)
      },
      {
        use: ['fade', { duration: SLIDE_IN_DURATION }] // fade everything else
      }
    ),
    this.reverse(
      'explode',
      {
        pickOld: '.ember-modal-dialog', // Find the existing ember-modal-dialog
        use: ['to-right', { duration: SLIDE_OUT_DURATION, easing: [0.47, 0, 0.745, 0.715] }] // animate out with an [easeInSine easing](http://easings.net/#easeInSine)
      },
      {
        use: ['fade', { duration: SLIDE_OUT_DURATION }] // fade everything else
      }
    )
  );
}
