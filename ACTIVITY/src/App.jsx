import Profile from './components/Profile' 
import Contacts from './components/Contacts'
import Skills from './components/Skills'
import WorkExp from './components/WorkExp'
function App() {

  return (
    <>
    <Profile
    profileName = "John Carlo Apuyan"
    profileInfo = "Handshome developer na walang ibang ginawa kundi mag pabuhat."
    />

    <Contacts
    email = "carloapuyan@gmail.com"
    phone = "0912-092-5978"
    address = "P-3 Pogidian st."
    />

    <Skills
    skill1 = "C++"
    skill2 = "C#"
    skill3 = "JavaScript"
    />

    <WorkExp 
    worksIn = "Dancer in Adonis Gay Bar"
    jobPeriod = "2019-2023"
    jobDes = "Entertaining others with my charismatic dance moves."
    />
  </>
  )
}

export default App
