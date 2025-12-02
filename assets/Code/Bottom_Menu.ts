import { _decorator, Component, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bottom_Menu')
export class Bottom_Menu extends Component {

    @property(Prefab)
    Bottom_Button_Prefab: Prefab = null;

    start() {

    }

    update(deltaTime: number) {
        
    }
}

