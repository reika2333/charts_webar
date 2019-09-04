let cubeHtml: string = `
    <!-- A-Frame の VR空間に AR.js を紐づける（デバッグUIは非表示） -->
    <a-scene embedded arjs="debugUIEnabled:false;">

        <!-- マーカーを登録（プリセットされている「hiro」マーカー） -->
        <a-marker preset="hiro">
          <!-- マーカーの場所に箱を置く（見やすいようにワイヤーフレーム表示） -->
          <a-box position="0 0.5 0" wireframe="true"></a-box>
        </a-marker>
  
        <!-- AR用のカメラを置く -->
        <a-entity camera></a-entity>
  
      </a-scene>`;

export default cubeHtml;
