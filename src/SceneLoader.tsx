import { Player } from "./nodes/Player"
import { Boundary } from "./nodes/Boundary"

export const SceneLoader = () => {

    return (
        <div className="no-scrollbar">
			<div className="relative w-[10000px] h-[10000px]
            bg-grass bg-repeat">
                <Player/>
                <Boundary/>
            </div>
		</div>
    )
}