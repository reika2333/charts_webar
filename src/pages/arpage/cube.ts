const cubeHtml: string = `
    <a-scene embedded arjs="debugUIEnabled:false;">

        <a-marker preset="hiro">

          <a-box position="0 0.5 0"
                height="1"
                width="0.4"
                depth="0.4"
                material="color: white;side: double;opacity: 0.5"></a-box>

          <!--坐标-->
          <a-entity line="start: 0, 0, 0; end: 0 0 10; color: red"
          line__2="start: 0, 0, 0; end: 0 10 0; color: green"
          line__3="start: 0, 0, 0; end: 10 0 0; color: blue"></a-entity>

        </a-marker>
  
        <a-entity camera></a-entity>
  
      </a-scene>`;

export default cubeHtml;
