// Youtube IFrame API를 비동기로 로드
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// onYouTubePlayerAPIReady 함수 이름은,
// Youtube IFrame Player API에서 사용하는 이름이기 때문에,
// 다르게 지정하면 동작하지 않는다.


function onYouTubePlayerAPIReady() {
  // <div id="player"></div>
  new YT.Player('player', { //id 속성의 값이 들어가는 것
    videoId: 'An6LvWQuj_8', // 최초 재생할 유튜브 영상 ID
    playerVars: { //영상을 재생하기 위한 여러가지 변수들의 옵션
      autoplay: true, // 자동 재생 유무
      loop: true, // 반복 재생 유무
      playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 ID 목록
    },
    events: {
      // 영상이 준비되었을 때,
      onReady: function (event) { // 객체데이터 내부에 함수데이터가 할당되어있는것을 메소드라고함 
        event.target.mute() // 음소거! (mute라는 메소드 실행)
      }
    }
  })
}