@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,700&display=swap');
  
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

a{
  text-decoration: none;
  color: #ffff;
}

i{
  color: #f30606;
  cursor: pointer;
}

img{
  object-fit: cover;
  object-position: top;
  border-radius: 8px;
}

html, body,
.menu{
  height: 100vh;
  background: linear-gradient(#050505, #18181d);
}

.container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr 2fr;
  /* background: linear-gradient(#050505, #18181d); */
}

/* ------------container side bar section=----------- */

.container .sidebar{
  height: 100vh;
  background-color: #18181d;
  padding:12px 15px ;
  display: flex;
  flex-direction: column;
  z-index: 10000;
  transition: all 1.5s ease;
}

.container .sidebar .menu{ 
  margin-top: 10px;
}

.container .sidebar .logo{
  display: flex;
  align-items: center;
  gap: 6px;
}

.container .sidebar .logo > i{
  font-size: 24px;
  transition: all 6s ease;
}

.container .sidebar .logo a{
  font-weight: bold;
  transition: all 3s ease;
}

.container .sidebar .logo a:hover,
.container .sidebar .logo > i:hover,
.container .sidebar .menu ul li:hover a,
.container .sidebar .menu ul li:hover i,
.container main header .nav-links a:hover{
color: #5773ff;
}

.container .sidebar .menu h5{
  color: #919191;
  margin-bottom: 12px;
  text-transform: uppercase;
}

.container .sidebar .menu ul{ 
  list-style: none;
}

.container .sidebar .menu ul li{
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.container .sidebar .menu ul li a{
  font-size: 14px;
  font-weight: bold;
  transition: all 0.3s ease;   
}


.container .sidebar .playing .top{
  background-color: #32323d;
  border-radius: 6px 6px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #ffff;
  font-size: 13px;
}

.container .sidebar .playing  .top img{
width: 20px;
/* height: 30px; */
}

.container .sidebar .playing .bottom{
background-color: #25252D;
border-radius: 0 0 6px 6px;
padding: 8px;
display: flex;
align-items: center;
justify-content: center;
gap: 6px;
font-size: 12px;
}

.bottom .sidebar .playing .bottom i,
.bottom .sidebar .playing .bottom p{
  color: #fff;
}

/* --------------container/main/ header section=------------- */

.container main{
  padding: 20px 36px;
}

.container main header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container main header .nav-links{
  display: flex;
  align-items: center;
  gap: 20px;
}

.container main header .nav-links a{
  text-transform: uppercase;
  color: #919191;
  transition: all 0.3s ease;
}

.container main header .search{
  display: flex;
  align-items: center;
  gap: 6px;
  width: 55%;
  background-color: #1d1d1d;
  border: 1px solid #464748;
  padding: 7px;
  border-radius: 8px;
}

.container main header .search input{
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: #ffff;
}

/* --------------container/main trending section=------------- */

.container main .trending{
  margin-top: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffff;
}

.container main .trending .left .info{
  margin-top: 12px;
  padding: 26px;
}

.container main .trending .left .info h2{
font-size: 31px;
margin-bottom: 8px;
}

.container main .trending .left .info h4,
.container main .trending .left .info h5{
  display: inline;
}

.container main .trending .left .info h5{
  margin-left: 12px;
  color: #919191;
}

.container main .trending .left .info .buttons{
  margin-top: 30px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.container main .trending .left .info .buttons button{
  padding: 10px 13px;
  background-color: #5773ff;
  border: none;
  border-radius: 12px;
  color: #ffff;
  font-weight: bold;
}

.container main .trending .left .info .buttons i{
  color: #5773ff;
  font-size: 18px;
  border: 2px solid #ffff;
  padding: 7px;
  border-radius: 50%;
}

.container main .trending img{
  width: 200px;
  height: 150px;
}

/* --------------container/main/ Genres section=------------- */

.container main .playlist{
  margin-top: 14px;
  display: flex;
  gap: 20px;
}

.container main .playlist .genres{
  color: #ffff;
  background-color: #202026;
  padding: 15px;
  border-radius: 6px;
  margin-right: 40px;
  width: 49%;
}

.container main .playlist .genres .header,
.container main .playlist .music-list .header{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
}

.container main .playlist .genres .header a,
.container main .playlist .music-list .header a{
  color: #919191;
  font-size: 12px;
}

.container main .playlist .genres .items{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

.container main .playlist .genres .items .item {
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  cursor: pointer;
}

.container main .playlist .genres .items .item p{
  font-size: 14px;
  font-weight: bold;
}

.container main .playlist .genres .items .item:nth-child(1){
  background-color: #476aba;
}

.container main .playlist .genres .items .item:nth-child(2){
  background-color: #a69984;
}

.container main .playlist .genres .items .item:nth-child(3){
  background-color: #a24c34;
}

.container main .playlist .genres .items .item:nth-child(4){
  background-color: #0d4045;
}

.container main .playlist .genres .items .item:nth-child(5){
  background-color: #a67894;
}

.container main .playlist .genres .items .item:nth-child(6){
  background-color: #5547a5;
}

/* ========topsongs======== */

.container main .playlist .music-list{
  background-color: #202026;
  padding: 20px;
  color: #ffff;
  border-radius: 6px;
  width: 90%;
  font-size: 13px;
}

.container main .playlist .music-list .items .item{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.container main .playlist .music-list .items .item:last-child{
  margin-bottom: 0;
}

.container main .playlist .music-list .items .item .info,
.container main .playlist .music-list .items .item .actions{
  display: flex;
  align-items: center;
  gap: 10px;
}

.container main .playlist .music-list .items .item .info p{
  color: #919191;
  font-size: 13px;
  font-weight: bold;
  margin-top: 3px;
}

.container main .playlist .music-list .items .item .info img{
  width: 45px;
  height: 50px;
}

.container main .playlist .music-list .items .item p{
  font-size: 12px;
  font-weight: bold;
}

.container main .playlist .music-list .items .item .actions .icon{
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #32323d;
  padding: 6px;
  border: 2px solid #464748;
  border-radius: 6px;
}

.container main .playlist .music-list .items .item .actions i{
  font-size: 8px;
  color: #5773ff;
}

.container main .playlist .music-list .items .item .actions i{
  color: #476aba;
}

.container .right-section{
  padding: 20px 3px 20px 0;
}

.container .right-section .profile{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 18px;
  margin-bottom: 30px;
}

.container .right-section .profile .user{
  display: flex;
}

.container .right-section .profile .user .left{
  display: flex;
  align-items: center;
  background: #32323d;
  padding: 6px;
  border-radius: 6px 0 0 6px;
}

.container .right-section .profile .user .left img{
  width: 30px;
  height: 36px;
}

.container .right-section .profile .user .right{
  background-color: #25252D;
  border-radius: 0 6px 0;
  padding: 10px;
  color: #ffff;
}

.container .right-section .music-player{
color: #ffff;
background-color: #202026;
border-radius: 6px;
height: 88%;
display: flex;
flex-direction: column;
}

.container .right-section .music-player .top-section{
padding: 15px;
height: 80%;
}

.container .right-section .music-player .header{
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 30px;
}

.container .right-section .music-player .song-info{
display: flex;
flex-direction: column;
align-items: center;
gap: 24px;
text-align: center;
}

.container .right-section .music-player .song-info img{
width: 170PX;
height: 170px;
}

.container .right-section .music-player .description h3{
font-size: 20px;
font-weight: 400;
margin-bottom: 6px;
}

.container .right-section .music-player .description h5{
font-size: 16px;
margin-bottom: 4px;
}

.container .right-section .music-player .description p{
color: #919191;
font-size: 12px;
font-weight: bold;
}

.container .right-section .music-player .song-info .progress{
display: flex;
align-items: center;
margin: 10px 0;
}

.container .right-section .music-player .song-info .progress p{
font-size: 11px;
}

.container .right-section .music-player .song-info .progress .active-line{
position: relative;
width: 120px;
height: 2px;
background-color: #fff;
margin-left: 30px;
}

.container .right-section .music-player .song-info .progress .deactive-line{
width: 80px;
height: 2px;
background-color: #919191;
margin-right: 30px;
}

.container .right-section .music-player .song-info .progress .active-line::before{
content: "";
background-color: #25252D;
height: 10px;
width: 10px;
border: 2px solid #fff;
position: absolute;
top: -6px;
left: 80px;
border-radius: 50%;
}

.container .right-section .music-player .player-actions{
background-color: #0625c2;
height: 27%;
border-radius: 6px;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
}

.container .right-section .music-player .player-actions .buttons{
display: flex;
align-items: center;
gap: 30px;
margin-top: 24px;
}

.container .right-section .music-player .player-actions .buttons i{
font-size: 19px;
}

.container .right-section .music-player .player-actions .buttons .play-button{
padding: 10px;
background-color: #fff; 
color: #5773ff;
border-radius: 18px;
}

.container .right-section .music-player .player-actions .lyrics{
display: flex;
flex-direction: column;
align-items: center;
position: absolute;
bottom: 8px;
} 

.container main header .nav-links button,
.container .sidebar .logo button{
display: none;
align-self: center;
justify-content: center;
background-color: #1d1d1d;
border: 1px solid #464748;
font-size: 20px;
padding: 4px;
border-radius: 8px;
cursor: pointer;
}

@media screen and (max-width: 1400px) {
.container .sidebar .playing .bottom p{
  font-size: 10px;
}

.container main .header .search{
width: 50%;
}

.container main .trending .left .info h2{
font-size: 36px;
}

.container main .trending img{
width: 200px;
height: 180px;
}

.container main .playlist .genres{
width: 40%;
}

.container main .playlist .genres .items{
grid-template-columns: 1fr;
}

.container main .playlist .genres .items .item{
padding: 10px;
}

.container main .playlist .genres .items .item p{
font-size: 10px;
}

.container main .playlist .genres .items .item:nth-child(6),
.container main .playlist .music-list .items .item .info > p{
display: none;
}
}

@media screen and (max-width:1200px){

.container main header .search{
width: 40%;
}

.container main .trending .left .info h2{
font-size: 24px;
}

.container main .trending .left .info h5{
display: block;
font-size: 12px;
margin-left: 0;
}

.container main .trending .left .info .buttons button{
padding: 10px 12px;
font-size: 12px;
}

.container main .trending .left .info .buttons i{
font-size: 14px;
}
/* 
.container main .playlist .genres{
display: none;
} */

.container main .playlist .music-list{
width: 70%;
}

.container .right-section .music-player{
height: 88% ;
}

.container .right-section .music-player .song-info img{
width: 220px;
height: 220px;
}

.container .right-section .music-player .song-info .description h3{
font-size: 22px;
}

.container .music-player .song-info .progress{
margin: 0;
}

.container .right-section .music-player .song-info .progress .active-line{
width: 80px;
}

.container .right-section
.music-player .song-info .progress .deactive-line{
width: 40px;
}

.container .right-section .music-player .song-info .progress .active-line{
margin-left: 20px;
}

.container .music-player .song-info 
.progress .active-line::before{
left: 80px;
}

.container .right-section .music-player .player-actions .buttons{
margin-top: 30px;
}

.container .right-section .music-player .player-actions .buttons .play-button{
padding: 10px;
border-radius: 16px;
}
}

@media screen and (max-width: 992px){
.container{
  grid-template-columns: 3fr 2fr;
}

.container .sidebar{
  position: absolute;
  left: -100%;
}

.container .sidebar .playing{
display: none;
}

.container main header .nav-links a{
font-size: 13px;
}

.container main header .search{
width: 38px;
}

.container main header .search input{
display: none;
}

.container main .trending img{
width: 120px;
height: 100px;
margin-top: 66px;
}

.container main .playlist{
margin-top: 40px;
}

.container .right-section .music-player{
height: 87%;
}

.container .right-section .music-player .song-info img{
width: 180px;
height: 180px;
}

.container .right-section .music-player .player-actions .buttons{
margin-top: 38px;
}

.container .right-section .music-player .player-actions .buttons i{
font-size: 18px;
}

.container main header .nav-links button,
.container .sidebar .logo button{
display: flex;
}
}

@media screen and (max-width: 768px) {
.container{
  grid-template-columns: 1fr;
}

.container main .trending,
.container main .playlist{
  display: none;
}

.container main header .search{
  width: 40%;
}

.container main header .search input{
  display: block;
}

.container .right-section{
  padding: 20px 36px;
}

.container .right-section .profile{
  justify-content: center;
  margin-bottom: 20px;
}

.container .right-section .music-player{
  height: 100%;
}

.container .right-section .music-player .song-info img{
  width: 240px;
  height: 180px;
}

.container .right-section .music-player .buttons i{
  font-size: 22px;
}
}