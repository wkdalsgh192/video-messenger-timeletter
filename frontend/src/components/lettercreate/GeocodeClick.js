import React, { useState, useEffect } from 'react';

const { kakao } = window

let map = null
let marker = null

const Geocode = () => {
  // console.log('Geocode')
  const [lat, setLat] = useState(36.10716908475293)
  const [lng, setLng] = useState(128.4162241001512)
  
  useEffect(() => {
    console.log('create map')
    //지도를 담을 영역의 DOM 레퍼런스
    const container = document.getElementById('map'); 

    //지도를 생성할 때 필요한 기본 옵션
    const options = { 
      center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };

    //지도 생성 및 객체 리턴
    map = new kakao.maps.Map(container, options); 

    // 지도를 클릭한 위치에 표출할 마커입니다
    marker = new kakao.maps.Marker({ 
      // 지도 중심좌표에 마커를 생성합니다 
      position: map.getCenter() 
    }); 

    // 지도에 마커를 표시합니다
    marker.setMap(map);
  }, [])

  useEffect(() => {
    console.log('click')
    // 지도에 클릭 이벤트를 등록합니다
    // 지도를 클릭하면 마지막 파라미터로 넘어온 함수를 호출합니다
    kakao.maps.event.addListener(map, 'click', function(mouseEvent) {        
        
      // 클릭한 위도, 경도 정보를 가져옵니다 
      var latlng = mouseEvent.latLng; 
      // console.log(latlng)
      
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);
      setLat(latlng.getLat())
      setLng(latlng.getLng())
    });
  }, [lat])

  return (
    <div>
      <div>위도 : {lat}</div>
      <div>경도 : {lng}</div>
      <div id="map" style={{width: '100%', height: '300px'}}></div>
    </div>
  );
};

export default Geocode;