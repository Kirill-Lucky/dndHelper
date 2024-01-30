import Navbar from "./pageComponents/Navbar";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Creation from "./pages/Creation";
import { Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/creation" element={<Creation />} />
        </Routes>
        

class App extends Component {
  constructor() {
    super();
    this.state = {
      ...getInitialState(),
      race: {
        name: ''
      },
      classChosen: {
        name: ''
      },
      skillsChosen: [],
      aligment: '',
      name: '',
      playerName: ''
    };
  }
  name = map(get('name'))
  get abilityScores() {
    return abilityScores(
      this.state.abilities,
      this.state.race.abilities);
  }
  get skills() {
    return skills(
      this.state.skills,
      this.abilityScores,
      (this.state.classChosen.proficiencies || {}).skills
    );
  }
  get savingThrows() {
    return savingThrows(
      this.abilityScores,
      this.state.classChosen.proficiencies);
  }
  get maximumHitPoinst() {
    return (this.state.classChosen.hitDie || 0) + getModifier('CON', this.abilityScores);
  }
  get level() {
    return 1;
  }
  handleAddAbilityScore = (name) => {
    this.setState({
      abilities: incAbility(name, this.state.abilities)
    });
  }
  handleRemoveAbilityScore = (name) => {
    this.setState({
      abilities: decAbility(name, this.state.abilities)
    });
  }
  handleNameChange = (name) => {
    this.setState({
      name
    });
  }
  handlePlayerNameChange = (playerName) => {
    this.setState({
      playerName
    });
  }
  handleRaceChange = (raceName) => {
    this.setState({
      race: find(
        matches({name: raceName}),
        this.state.races)
    });
  }
  handleClassChosenChange = (classChosen) => {
    this.setState({
      classChosen: find(
        matches({name: classChosen}),
        this.state.classes)
    });
  }
  handleAligmentChange = (aligment) => {
    this.setState({
      aligment
    });
  }
  handleSkillChosen = (skillName) => {
    const {skills, skillsChosen, classChosen} = this.state;
    const newSkillsChosen = changeSkillsChosen(skillsChosen, skills, skillName);

    this.setState({
      skillsChosen: newSkillsChosen,
      skillsFull: newSkillsChosen.length === classChosen.proficiencies.skills.number
    });
  }
  render() {
    return (
      <ContainerFluid>
        <Row>
          <Col sm='12'>
            <BasicInformation classChosen={{}}
              race={this.state.race.name}
              races={this.name(this.state.races)}
              classChosen={this.state.classChosen.name}
              classes={this.name(this.state.classes)}
              aligment={this.state.aligment}
              aligments={this.state.aligments}
              level={this.level}
              onNameChange={this.handleNameChange}
              onPlayerNameChange={this.handlePlayerNameChange}
              onRaceChange={this.handleRaceChange}
              onClassChosenChange={this.handleClassChosenChange}
              onAligmentChange={this.handleAligmentChange}
              />
          </Col>
        </Row>
        <span className='space-16'></span>
        <Row>
          <Col sm='4'>
            <AbilityScores abilityScores={this.abilityScores}
              onAddAbilityScore={this.handleAddAbilityScore}
              onRemoveAbilityScore={this.handleRemoveAbilityScore} />
          </Col>
          <Col sm='4'>
            <SkillList skills={this.skills}
              skillsChosen={this.state.skillsChosen}
              full={this.state.skillsFull}
              onSkillChosen={this.handleSkillChosen}
            />
          </Col>
          <Col sm='4'>
            <SavingThrows savingThrows={this.savingThrows}/>
          </Col>
          <Col sm='4'>
            <DefenseCombatInformation ac={calcAC(
                this.abilityScores,
                this.state.baseAC
              )}
              initiative={getModifier('DEX', this.abilityScores)}
              speed={this.state.race.speed}
              hitPoints={this.maximumHitPoinst}
              maximum={this.maximumHitPoinst}/>
          </Col>
        </Row>
      </ContainerFluid>
        
      </div>
    </div>
  );
}

export default App;
