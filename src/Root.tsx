//Import lifecycle events.
import "./lifecycle/update"
import "./lifecycle/fixed"
import "./lifecycle/input"

//Import root components.
import { SceneLoader } from "./SceneLoader"
import { UserInterface } from "./UserInterface"

export const Root = () => {
	
	return (
		<>
			<SceneLoader/>
			<UserInterface/>
		</>
	)
}