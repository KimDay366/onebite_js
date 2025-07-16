export default function RegionList({ $app, initialState, handleregion }) {

  this.state = initialState;
  this.handleregion = handleregion;

  this.$target = document.createElement("div");
  this.$target.className = "region-list";

  $app.appendChild(this.$target);

  this.template = () => {
    const regionList = [
      '✈️ All', '🌅 Asia', '🕌 Middle-East', '🏛️ Europe', '🍹 Latin-America', '🐘 Africa', '🛣️ North-America','🏝️ Oceania'];

    // const temp = `<ul></ul>`;
    
    // for(let i = 0; i < regionList.length; i++){
    //   const tempList = '';
    //   const region = `<li id="${regionList[i]}"><a herf="#">${regionList[i]}</a></li>`

    //   tempList += region;
      
    //   return tempList;
    // }

    // temp.innerHTML = tempList;

    // return temp;

    let temp = '';
    regionList.forEach((ele)=>{
      let regionId = ele.split(' ')[1];
      temp += `<div id="${regionId}">${ele}</div>`
    });

    return temp;

  };

  this.render = () => {
    this.$target.innerHTML = this.template();

    // 활성화 된 지역명에 별도의 스타일 부여 
    if(this.state){
      let $currentRegion = document.getElementById(this.state);
      $currentRegion && ($currentRegion.className = 'clicked');
    }else{
      document.getElementById('All').className = 'clicked';
    }

    const $regionList = this.$target.querySelectorAll('div');

    $regionList.forEach((ele)=>{
      ele.addEventListener('click',()=>{
        this.handleregion(ele.id);
      });
    });
    
  };

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  };

  this.render();
}
