const counterLoop = (t) => {
  setInterval(()=>{
      t = t-1
      if(t > 0){
        chrome.browserAction.setBadgeText({ text: ''+t+'' }); 
      }
  },1000)
}
(myFunction = () => {
  let pages = [
      'https://www.fiverr.com/alif214221?up_rollout=true', 
      'https://www.fiverr.com/users/alif214221/seller_dashboard', 
      'https://www.fiverr.com/users/alif214221/manage_orders',
      'https://www.fiverr.com/users/alif214221/manage_gigs', 
      'https://www.fiverr.com/users/alif214221/requests'
  ]
  let min = 170,
    max = 250,
    minPage = 0,
    maxPage = 4;
  let time = Math.floor(Math.random() * (max - min + 1) + min);
  let page = Math.floor(Math.random() * (maxPage - minPage + 1) + minPage);
  chrome.tabs.update({url:pages[page]});
  counterLoop(time)
  setTimeout(myFunction, time * 1000);
}
)()

