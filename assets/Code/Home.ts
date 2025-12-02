import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Home')
export class Home extends Component {
    @property(Node)
    Fishing_Preparation_Page_nodee: Node = null;


    start() {
        if (this.Fishing_Preparation_Page_nodee) {
            this.Fishing_Preparation_Page_nodee.active = false;
        }
    }

    update(deltaTime: number) {
        
    }
}

