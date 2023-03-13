import { Theme } from "./theme"
import { Filter } from "./components/atoms/Filter"
import { Subtitle } from "./components/atoms/Subtitle"
import { Title } from "./components/atoms/Title"
import { Button } from "./components/atoms/Button"
import { Avatar } from "./components/atoms/Avatar"
import { Name } from "./components/atoms/Name"
import { Info } from "./components/atoms/Info"
import { Role } from "./components/atoms/Role"
import { Function } from "./components/atoms/Function"
import { Navbar } from "./components/atoms/Navbar"
import { Filters } from "./components/molecules/Filters"
import { StakeholderInfo } from "./components/organisms/Stakeholder"
import { StackholderDetails } from "./components/organisms/StakeholderDetails"

function App() {
  return (
    <div style={{ backgroundColor: 'lightcyan' }}>
      <Theme>
        <Navbar />

        <StackholderDetails
          imageUrl="https://github.com/mauricimendes.png"
          role="Deputado Federal"
          name="Aureo Ribeiro"
          party="Solidariedade"
          subtitle="TITULAR EM EXERCÍCIO 2019 - 2023"
        />
      </Theme>
    </div>
  )
}

export default App
