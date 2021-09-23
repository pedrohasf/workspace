# Governed
***
## Functions:
- [`constructor()`](#constructor_)
- [`nominateNewGovernance()`](#nominateNewGovernance_)
- [`acceptGovernance()`](#acceptGovernance_)
## Events:
- [`GovernanceNominated`](#GovernanceNominated_)
- [`GovernanceChanged`](#GovernanceChanged_)
## Modifiers:
- [`onlyGovernance()`](#onlyGovernance_)
## Graphs:
- [`Dependency Graph`](#dependencyGraph)
- [`Inheritance Graph`](#inheritanceGraph)
***
## Function Definitions:
### <a name="constructor_"></a> constructor() {#constructor_}
```
constructor(address _governance) public 
```
### <a name="nominateNewGovernance_"></a> nominateNewGovernance() {#nominateNewGovernance_}
```
nominateNewGovernance(address _governance) external 
```
### <a name="acceptGovernance_"></a> acceptGovernance() {#acceptGovernance_}
```
acceptGovernance() external 
```
## Events
### <a name="GovernanceNominated_"></a> GovernanceNominated {#GovernanceNominated_}
```
GovernanceNominated(address newGovernance)
```
### <a name="GovernanceChanged_"></a> GovernanceChanged {#GovernanceChanged_}
```
GovernanceChanged(address oldGovernance, address newGovernance)
```
## Modifiers
### <a name="onlyGovernance_"></a> `onlyGovernance()` {#onlyGovernance_}
```
onlyGovernance()
```
## Graphs
### <a name="dependencyGraph"></a> `Dependency Graph` {#dependencyGraph}
![Dependency Graph](images/Governed_dependency_graph.png)
### <a name="inheritanceGraph"></a> `Inheritance Graph` {#inheritanceGraph}
![Inheritance Graph](images/Governed_inheritance_graph.png)
