const LinksSocialMedia = {
  github: 'endrichb',
  youtube: 'channel/UCN3K4D4C77-2s1q-ZYQJ23Q',
  facebook: 'endrichb',
  instagram: 'endrick.bm',
  twitter: 'condosegcs'
}
function changeLinksSocialMedia() {
  //       for( let i = 0; i <= 10; i++){
  // }
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    // alert(li.children[0].href)
  }
}
changeLinksSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
function MudarLogoInstagram() {
  insta.src = 'images/insta.svg'
}
function LogoInstagram() {
  insta.src = 'images/instagram.svg'
}
function MudarLogoYouTube() {
  yt.src = 'images/yt.svg'
}
function LogoYouTube() {
  yt.src = 'images/youtube.svg'
}
function MudarLogoFacebook() {
  face.src = 'images/fb.svg'
}
function LogoFacebook() {
  face.src = 'images/facebook.svg'
}
